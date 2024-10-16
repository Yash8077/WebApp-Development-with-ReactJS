import React, { useState } from 'react';

const MultiFieldForm = () => {
    const [inputs, setvar] = useState({});

    const handleChange = (e) => {
        const name=e.target.name;
        const value=e.target.value;
        setvar(values => ({...values, [name]: value})); //we have destructed here to keep the old values
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(inputs));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    name="username"
                    value={inputs.username||""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Age:
                <input
                    type="number"
                    name="age"
                    value={inputs.age||""}
                    onChange={handleChange}
                />
            </label>
            <br />
            <label>
                Select Item:
                <select
                    name="options"
                    value={inputs.options || ""}
                    onChange={handleChange}
                >
                    <option value="">Select an option</option>
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                </select>
            </label>
            <br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MultiFieldForm;