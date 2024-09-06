import React, { useState } from 'react';

export default function RandomColor() {
    const [color, setColor] = useState('');
    let array=["red","blue","green","pink"];
    const changeColor = () => {
        const randomIndex = Math.floor(Math.random() * array.length);
        const randomColor = array[randomIndex];
        setColor(randomColor);
    };

    return (
        <>
            <button onClick={changeColor}>Change Color</button>
            <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
        </>
    );
}
