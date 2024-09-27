import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export default function API() {
    const [data,setData]=useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(result=>setData(result))
            .catch(error=> console.error("Error fetching data",error));
    },[]);
    return (
        <>
        <h1>Fetched Data</h1>
        <ul>
            {data.map(item => {
                return(
                    <li >{item.name}</li>
                );
            })}
        </ul>
        </>
    )
}
