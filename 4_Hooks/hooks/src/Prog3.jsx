import React from 'react'
import { useState } from 'react';

export default function Prog3() {
    var [input,setInput]=useState('');
    var [input2,setInput2]=useState('');
    var [ans,setAns]=useState('');
    var add = () =>{
        setAns(Number(input)+Number(input2));
    } 
    return (
        <div>Input calc
            <input type="number" value={input} onChange={(e) => setInput(e.target.value)}/>
            <input type="number" value={input2} onChange={(w) =>setInput2(w.target.value)}/>
            <button onClick={add}>Add</button>
            <p>{ans}</p>;
        </div>
    )
}
