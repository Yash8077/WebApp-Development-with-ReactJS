
import { useState, useEffect, useRef } from 'react'
import { Fireworks } from 'fireworks-js'

export default function SudokuSolver() {
  const [grid, setGrid] = useState(Array(9).fill(null).map(() => Array(9).fill('')))
  const [speed, setSpeed] = useState('Medium')
  const [showPopup, setShowPopup] = useState(true)
  const [showSuccessToast, setShowSuccessToast] = useState(false)
  const [showFailToast, setShowFailToast] = useState(false)
  const [failToastMessage, setFailToastMessage] = useState('')
  const [backtrackingCount, setBacktrackingCount] = useState(0)
  const [solving, setSolving] = useState(false)
  const [gradientColors, setGradientColors] = useState(['#137c99', '#000046'])

  const fireworksRef = useRef<HTMLDivElement>(null)
  const fireworksInstanceRef = useRef<Fireworks | null>(null)

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('hasSeenPopup')
    if (hasSeenPopup) {
      setShowPopup(false)
    }

    if (fireworksRef.current && !fireworksInstanceRef.current) {
      fireworksInstanceRef.current = new Fireworks(fireworksRef.current, {
        autoresize: true,
        opacity: 0.5,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 50,
        traceLength: 3,
        traceSpeed: 10,
        explosion: 5,
        intensity: 30,
        flickering: 50,
        lineStyle: 'round',
        hue: {
          min: 0,
          max: 360
        },
        delay: {
          min: 30,
          max: 60
        },
        rocketsPoint: {
          min: 50,
          max: 50
        },
        lineWidth: {
          explosion: {
            min: 1,
            max: 3
          },
          trace: {
            min: 1,
            max: 2
          }
        },
        brightness: {
          min: 50,
          max: 80
        },
        decay: {
          min: 0.015,
          max: 0.03
        },
        mouse: {
          click: false,
          move: false,
          max: 1
        }
      })
    }
  }, [])

  const handleCellChange = (row: number, col: number, value: string) => {
    if (value === '' || (parseInt(value) >= 1 && parseInt(value) <= 9)) {
      const newGrid = [...grid]
      newGrid[row][col] = value
      setGrid(newGrid)
    }
  }

  const generatePuzzle = () => {
    const newGrid = Array(9).fill(null).map(() => Array(9).fill(''))
    const solution = solveSudoku([...newGrid])
    if (solution) {
      // Remove some numbers to create a puzzle
      for (let i = 0; i < 40; i++) {
        const row = Math.floor(Math.random() * 9)
        const col = Math.floor(Math.random() * 9)
        newGrid[row][col] = solution[row][col]
      }
    }
    setGrid(newGrid)
  }

  const clearGrid = () => {
    setGrid(Array(9).fill(null).map(() => Array(9).fill('')))
    setSolving(false)
    setBacktrackingCount(0)
  }

  const solveSudoku = (board: string[][]): string[][] | null => {
    const emptyCell = findEmptyCell(board)
    if (!emptyCell) return board // puzzle is solved

    const [row, col] = emptyCell

    for (let num = 1; num <= 9; num++) {
      if (isValid(board, row, col, num.toString())) {
        board[row][col] = num.toString()
        setBacktrackingCount(prev => prev + 1)

        if (solveSudoku(board)) {
          return board
        }

        board[row][col] = '' // backtrack
      }
    }

    return null // no solution exists
  }

  const findEmptyCell = (board: string[][]): [number, number] | null => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (board[row][col] === '') {
          return [row, col]
        }
      }
    }
    return null
  }

  const isValid = (board: string[][], row: number, col: number, num: string): boolean => {
    // Check row
    for (let x = 0; x < 9; x++) {
      if (board[row][x] === num) return false
    }

    // Check column
    for (let x = 0; x < 9; x++) {
      if (board[x][col] === num) return false
    }

    // Check 3x3 box
    const boxRow = Math.floor(row / 3) * 3
    const boxCol = Math.floor(col / 3) * 3
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[boxRow + i][boxCol + j] === num) return false
      }
    }

    return true
  }

  const solve = async () => {
    setSolving(true)
    setBacktrackingCount(0)
    const solution = solveSudoku([...grid])
    if (solution) {
      await visualizeSolution(solution)
      setShowSuccessToast(true)
      if (fireworksInstanceRef.current) {
        fireworksInstanceRef.current.start()
        setTimeout(() => fireworksInstanceRef.current?.stop(), 5000)
      }
    } else {
      setFailToastMessage('No solution exists for this puzzle')
      setShowFailToast(true)
    }
    setSolving(false)
  }

  const visualizeSolution = async (solution: string[][]) => {
    const delay = speed === 'Fast' ? 10 : speed === 'Medium' ? 50 : 200
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === '') {
          await new Promise(resolve => setTimeout(resolve, delay))
          setGrid(prev => {
            const newGrid = [...prev]
            newGrid[row][col] = solution[row][col]
            return newGrid
          })
        }
      }
    }
  }

  const applyGradient = (color1: string, color2: string) => {
    setGradientColors([color1, color2])
    setShowSuccessToast(true)
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem',
      background: `linear-gradient(to right, ${gradientColors[0]}, ${gradientColors[1]})`,
      position: 'relative'
    }}>
      {showPopup && (
        <div style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 50
        }}>
          <div style={{
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            padding: '2rem',
            borderRadius: '0.5rem',
            maxWidth: '36rem'
          }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Welcome to Sudoku Backtracking Visualizer!</h2>
            <ul style={{ listStyleType: 'disc', paddingLeft: '1.25rem', marginBottom: '1rem', lineHeight: '1.5' }}>
              <li>🧩 Enter numbers from 1 to 9 in the empty cells of the Sudoku grid.</li>
              <li>🧠 Use the Backtracking algorithm to solve the Sudoku puzzle.</li>
              <li>🔄 Click on the "Generate Puzzle" button to randomly fill.</li>
              <li>🚮 Click on the "Clear" button to clear all the cells.</li>
              <li>⏱️ Select the desired speed for the solving animation.</li>
              <li>▶️ Click on the "Solve" button to start the solving animation.</li>
              <li>🎨 Use the color picker to apply a gradient to the background.</li>
            </ul>
            <button
              onClick={() => {
                setShowPopup(false)
                localStorage.setItem('hasSeenPopup', 'true')
              }}
              style={{
                backgroundColor: '#4CAF50',
                color: 'white',
                padding: '0.5rem 1rem',
                border: 'none',
                borderRadius: '0.25rem',
                cursor: 'pointer'
              }}
            >
              Get Started!
            </button>
          </div>
        </div>
      )}

      <h1 style={{ fontSize: '2.25rem', fontWeight: 'bold', color: 'white', marginBottom: '2rem' }}>Sudoku Solver Visualizer</h1>

      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <button onClick={generatePuzzle} style={buttonStyle}>Generate Puzzle</button>
        <button onClick={clearGrid} style={buttonStyle}>Clear</button>
        <select value={speed} onChange={(e) => setSpeed(e.target.value)} style={selectStyle}>
          <option value="Fast">Fast</option>
          <option value="Medium">Medium</option>
          <option value="Slow">Slow</option>
        </select>
        <button onClick={solve} disabled={solving} style={buttonStyle}>
          {solving ? 'Solving...' : 'Solve'}
        </button>
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(9, 1fr)',
        gap: '0.25rem',
        marginBottom: '2rem'
      }}>
        {grid.map((row, rowIndex) => (
          row.map((cell, colIndex) => (
            <input
              key={`${rowIndex}-${colIndex}`}
              type="text"
              maxLength={1}
              value={cell}
              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
              style={{
                width: '3rem',
                height: '3rem',
                textAlign: 'center',
                fontSize: '1.5rem',
                backgroundColor: 'rgba(255, 255, 255, 0.8)',
                border: '1px solid #ccc',
                borderRadius: '0.25rem'
              }}
            />
          ))
        ))}
      </div>

      {backtrackingCount > 0 && (
        <p style={{ color: 'white', marginBottom: '1rem' }}>Number of Backtracking counts: {backtrackingCount}</p>
      )}

      {showSuccessToast && (
        <div style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#4CAF50',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem'
        }}>
          ✅ Sudoku solved successfully
        </div>
      )}

      {showFailToast && (
        <div style={{
          position: 'fixed',
          top: '1rem',
          left: '50%',
          transform: 'translateX(-50%)',
          backgroundColor: '#f44336',
          color: 'white',
          padding: '0.5rem 1rem',
          borderRadius: '0.25rem'
        }}>
          ❌ {failToastMessage}
        </div>
      )}

      <div style={{
        position: 'fixed',
        bottom: '1rem',
        left: '1rem',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem'
      }}>
        <button
          onClick={() => setShowPopup(true)}
          style={{
            ...buttonStyle,
            backgroundColor: 'transparent',
            border: '1px solid white'
          }}
        >
          Instructions
        </button>
      </div>

      <div style={{
        position: 'fixed',
        bottom: '1rem',
        right: '1rem',
        color: 'white',
        textAlign: 'right'
      }}>
        <p>© Made by Yash Mishra</p>
        <a href="https://github.com/Yash8077" style={{ color: 'white', textDecoration: 'none' }}>Github</a>
      </div>

      <div style={{
        position: 'fixed',
        top: '1rem',
        right: '1rem',
        display: 'flex',
        gap: '0.5rem',
        alignItems: 'center'
      }}>
        <input
          type="color"
          value={gradientColors[0]}
          onChange={(e) => setGradientColors([e.target.value, gradientColors[1]])}
          style={{ width: '2rem', height: '2rem' }}
        />
        <input
          type="color"
          value={gradientColors[1]}
          onChange={(e) => setGradientColors([gradientColors[0], e.target.value])}
          style={{ width: '2rem', height: '2rem' }}
        />
        <button onClick={() => applyGradient(gradientColors[0], gradientColors[1])} style={buttonStyle}>
          Apply Gradient
        </button>
      </div>

      <div ref={fireworksRef} style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none'
      }} />
    </div>
  )
}

const buttonStyle = {
  backgroundColor: '#4CAF50',
  color: 'white',
  padding: '0.5rem 1rem',
  border: 'none',
  borderRadius: '0.25rem',
  cursor: 'pointer',
  fontSize: '1rem'
}

const selectStyle = {
  padding: '0.5rem',
  fontSize: '1rem',
  borderRadius: '0.25rem',
  border: '1px solid #ccc'
}