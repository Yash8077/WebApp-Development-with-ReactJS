import React from 'react'
import { useState } from 'react'

export default function Prog2() {
    var [input,setInput]=useState('');
    var setInput1=(e)=>{
        setInput(e.target.value);
    }
    return (
        <div>
            <input type="text" value={input} onChange={setInput1} />
            <p>{input}</p>
        </div>
    )
}
