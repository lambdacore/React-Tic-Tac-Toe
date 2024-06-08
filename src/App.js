/* Jonathan Harrington - Completing the game*/

import {useState} from 'react'

function Square({value, onSquareClick}) {
    return (
        <button
            className="square" onClick={onSquareClick}
        >
            {value}
        </button>
);
}

export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));

    function handleClick (i) {
        const nextSquares = squares.slice();
        nextSquares[i] ="X"
        setSquares(nextSquares)
    }

    return (
        /* single lines needs ; while fragments do not */
        <>
            <div className="board-row">
                <Square value = {squares[0]} onSquareClick={() => handleClick(0)} /> {/* 1 */}
                <Square value = {squares[1]} onSquareClick={ () => handleClick(1)} /> {/* 2 */}
                <Square value = {squares[2]} onSquareClick={() => handleClick(2)} /> {/* 3 */}
            </div>
            <div className="board-row">
                <Square value = {squares[3]} onSquareClick={() => handleClick(3)} /> {/* 4 */}
                <Square value = {squares[4]} onSquareClick={() => handleClick(4)} /> {/* 5 */}
                <Square value = {squares[5]} onSquareClick={() => handleClick(5)} /> {/* 6 */}
            </div>
            <div className="board-row">
                <Square value = {squares[6]} onSquareClick={() => handleClick(6)} /> {/* 7 */}
                <Square value = {squares[7]} onSquareClick={() => handleClick(7)} /> {/* 8 */}
                <Square value = {squares[8]} onSquareClick={() => handleClick(8)} /> {/* 9 */}
            </div>
        </>
    )
}
