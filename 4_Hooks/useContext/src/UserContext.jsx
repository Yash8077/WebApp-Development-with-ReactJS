import { useState,createContext } from 'react'
import Context from './Context';
import React from 'react'
export var user=createContext(); // we will use this context in our file
export default function UserContext() 
{
    var [user1,setUser1]=useState("Yash");
    return (
    <>
    <user.Provider value={user1}> {/* context_variable_name.Provider */}
        <h1>HI {user1}</h1>
    <Context></Context>{/*Should be the same as file name in which we are using the context */}
    </user.Provider>
    </>

  )
}
