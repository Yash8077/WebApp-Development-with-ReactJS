import React from 'react'
import { useContext } from 'react'
import { user }  from './UserContext'
export default function Context() {
  return (
    <>
    <h1>Component 2</h1>
    <Component3/>
    </>
  )
}
function Component3(){
    return (
        <>
        <h1>Component 3</h1>
        <Component4/>
        </>
      )
}
function Component4(){
    return (
        <>
        <h1>Component 4</h1>
        <Component5/>
        </>
      )
}
function Component5() {
  const user2 = useContext(user); //Call the created context here
  return (
    <>
      <h1>Component 5</h1>
      <p>{`Hello, ${user2}!`}</p>
    </>
  );
}