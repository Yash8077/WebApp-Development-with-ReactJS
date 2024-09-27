import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Taskbar from './TaskBar.jsx'
import { Clcomp1 } from './classComp.jsx'
import HelloWorld from './HelloWorld.jsx'
import MyComponent from './state_setState.jsx'
import Question from './Question.jsx'
import RandomColor from './RandomColor.jsx'
import Calculator from './Calculator.jsx'
import Switch from './Switch.jsx'
import List from './list.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Taskbar />
    <Clcomp1 name="Yash"/>
    <MyComponent name="Yash" age={20} />
    <Question name="Yash" age={21}/>
    <HelloWorld />
    <RandomColor />
    <Calculator />
    <Switch />
    <List />
  </StrictMode>,
)
