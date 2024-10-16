import React from 'react'

export default function UncontrollableForms() {
    const inputRef=useRef(null);
    function handleSubmit(){
        alert(inputRef.current.value);
    }
  return (
    <>
        <h2>UncontrollableForms</h2>
        <form onSubmit={handleSubmit}>
            <label> Name:</label>
            <input type="text" name="name" ref={inputRef} />
            <button type="submit"> Submit</button>
        </form>
    </>
  )
}
