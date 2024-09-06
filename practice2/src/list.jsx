import React from 'react'
import { useState } from 'react'
export default function List() {
    const [label,setLabel]=useState('Hide');
    const [disp,setDisp]=useState('none');
    const [content1,setCon1] = useState('');
    const [content2,setCon2] = useState('');
    const [content3,setCon3] = useState('');
    const [color,setColor] = useState('white');
    const [txtclr,setTxtClr] = useState('teal');
    const toggleButton = () =>{
        setLabel(label==="Show"?"Hide":"Show");
        setDisp(disp==="none"? "block":"none");
        setColor(color==="teal"?"white":"teal");
        setTxtClr(txtclr==="teal"?"white":"teal");
    }
    const Colors = () => {
        setCon1("Red");
        setCon2("Blue");
        setCon3("Green");
    }
    const Country = () => {
        setCon1("India");
        setCon2("China");
        setCon3("USA");
    }
    const Birds = () => {
        setCon1("Sparrow");
        setCon2("Pigeon");
        setCon3("Chidiya");
    }
    
    return (
    <div>
        <hr></hr>
        <button onClick={toggleButton} style={{backgroundColor:color,border:"2px solid teal",fontSize:"30px",color:txtclr,borderRadius:"50px",padding:"20px"}}> {label==="Show"?"Hide":"Show"} list </button>
        <div style={{display:disp}}>
            <table>
                <tr>
                    <button onClick={Colors}>Show all colors names</button>
                </tr>
                <tr>
                    <button onClick={Country}>Show all Countries names</button>
                </tr>
                <tr>
                    <button onClick={Birds}>Show all Birds names</button>
                </tr>
                <tr>
                    <h3>{content1}</h3>
                </tr>
                <tr>
                    <h3>{content2}</h3>
                </tr>
                <tr>
                    <h3>{content3}</h3>
                </tr>
            </table>
        </div>
    </div>
  )
}
