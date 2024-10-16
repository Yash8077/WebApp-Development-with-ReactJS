import React, { useRef } from 'react';

export default function UncontrollableForms() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);

  function handleSubmit(event) {
    event.preventDefault();
    alert(`Name: ${nameRef.current.value}\nEmail: ${emailRef.current.value}`);
  }

  return (
    <>
      <h2>UncontrollableForms</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" ref={nameRef} />

        <label>Email:</label>
        <input type="email" name="email" ref={emailRef} />

        <button type="submit">Submit</button>
      </form>
    </>
  );
}
