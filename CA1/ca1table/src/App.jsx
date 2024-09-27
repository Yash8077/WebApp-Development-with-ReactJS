import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TableComp from './Table'
import '../src/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)
  const teams=[{
    name:"Player C",
    team:"Team Z",
    goals:12,
    assists:4
  },
  {
    name:"Player A",
    team:"Team X",
    goals:10,
    assists:5
  },
  {
    name:"Player B",
    team:"Team Y",
    goals:8,
    assists:7
  }
]
  return (
    <>
      <TableComp teams={teams} />
    </>
  )
}

export default App
