import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import  Greet from './Greet';
import App from './App.tsx'
import './index.css'
import { Greet3 } from './Greet3.tsx';
import { Greet4 } from './greet4.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
    <Greet />
    <Greet3 />
    <Greet4 />
  
  </StrictMode>,
)
