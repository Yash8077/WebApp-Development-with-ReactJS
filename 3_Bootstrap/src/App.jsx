import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tablu from './table'
import 'bootstrap/dist/css/bootstrap.min.css';
import SuccessNotification from './Success_notification'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <SuccessNotification name="Yash"/>
      <Tablu />
    </>
  )
}

export default App
