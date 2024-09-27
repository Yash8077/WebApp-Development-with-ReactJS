import React from 'react'
import { useState } from 'react'

export default function Prog4() {
    var [input,setInput]=useState("Please Enter a value");
    
    return (
    <div>
        <input type="text" value={input} onClick={() => setInput("")} onChange={(e)=>setInput(e.target.value)} />
        <p>{input==="Please Enter a value"?"Hello world":input}</p>

    </div>
  )
}
