import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MultiFieldUncontrollableForm from './components/MultiFieldUncontrollableForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <MultiFieldUncontrollableForm />
    </>
  )
}

export default App
