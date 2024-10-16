import React, { useState } from 'react';
export default function Addition() {
  const [inputs, setInput] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(function (values) {
      return { ...values, [name]: value };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(Number(inputs['num1']) + Number(inputs['num2']));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h1>Addition</h1>
        </div>
        <label>
          Number1:
          <input
            type="number"
            name="num1"
            value={inputs.num1 || ""}//makes a variable in input which holds the value entered by user
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Number2:
          <input
            type="number"
            name="num2"
            value={inputs.num2 || ""}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Add</button>
      </form>
    </>
  );
}
