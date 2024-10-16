import {useState , useRef} from 'react';
export default function Addform(){
    const [name,setName]=useState("");
    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`The entered name is ${name}`)
    }
    return(
        <form onSubmit={handleSubmit}>
            <label>Enter Your name:
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            </label>
            <input type='submit'></input>
        </form>
    )
}