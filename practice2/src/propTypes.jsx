import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}!</h1>
            <p>You are {props.age} years old.</p>
            <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
};

MyComponent.propTypes = {
    name: PropTypes.string.isRequired,//validation that input is a string
    age: PropTypes.number.isRequired,
    isActive: PropTypes.bool.isRequired
};

export default MyComponent;
