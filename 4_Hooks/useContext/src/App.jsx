import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './UserContext'
import { ThemeProvider } from './ThemeContext'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <UserContext/> {/*Import the context file here and not the file which is connected to it */}
    <ThemeProvider/>
    </>
  )
}

export default App
