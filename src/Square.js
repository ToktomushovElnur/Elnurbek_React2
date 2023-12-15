// Square.js
import React from 'react';

function Square({ squareColor, setSquareColor }) {
    const changeColor = () => {
        setSquareColor((prevColor) => (prevColor === 'red' ? 'blue' : 'red'));
    };

    return (
        <div
            style={{ width: '100px', height: '100px', backgroundColor: squareColor }}
            onClick={changeColor}
        ></div>
    );
}

export default Square;
