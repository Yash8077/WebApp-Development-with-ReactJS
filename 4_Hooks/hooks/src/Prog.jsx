import React ,{useState}from 'react'

export default function Prog() {
    var [details,setDetails]=useState({name:"Yash",age:30});
    var changeAge= () =>{
        setDetails(prevValue =>{return{...prevValue,age:details.age+1 }});//used spread operator to keep the object intact. If we only used age:details.age+1, then the object would be overwritten and would only have age
        console.log(details);
    } 
  return (
    <button onClick={() => {changeAge()}}>Age is {details.age}</button>
  )
}
