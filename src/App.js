import React, { useState } from 'react';
import Square from './Square';

function App() {
    const [square1Color, setSquare1Color] = useState('red')
    const [square2Color, setSquare2Color] = useState('blue')

    const handleSquare1Click = () => {
        setSquare1Color((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
        setSquare2Color((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
    };

    const handleSquare2Click = () => {
        setSquare1Color((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
        setSquare2Color((prevColor) => (prevColor === 'red' ? 'blue' : 'red'))
    };

    return (
        <div className="App">
            <Square squareColor={square1Color} setSquareColor={handleSquare1Click} />
            <Square squareColor={square2Color} setSquareColor={handleSquare2Click} />
        </div>
    );
}

export default App;
