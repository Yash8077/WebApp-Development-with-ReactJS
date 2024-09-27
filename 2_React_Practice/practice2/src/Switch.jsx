import React, { useState } from 'react';

export default function Switch() {
    const [state, setState] = useState('off');

    const toggleSwitch = () => {
        setState(state === 'off' ? 'on' : 'off');
    };

    return (
        <div>
            <h1>The switch is {state}</h1>
            <button onClick={toggleSwitch}>Toggle switch {state==="off"?"on":"off"}</button>
        </div>
    );
}
