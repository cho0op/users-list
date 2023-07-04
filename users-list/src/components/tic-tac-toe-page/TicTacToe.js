import styles from './TicTacToe.module.css'
import { useState } from 'react';

const TicTacToe = () => {
    // история - один большой расширяющийся массив?
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];
    const xIsNext = currentMove % 2 === 0;

    function handlePlay(copySquares) {
        // текущая история = история от начала до текущего хода
        const nextHistory = [...history.slice(0, currentMove + 1), copySquares];
        setHistory(nextHistory);
        setCurrentMove(nextHistory.length - 1);
    }

    function jumpTo(nextMove) {
        setCurrentMove(nextMove);
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li key={move}>
                <button className={styles.step} onClick={() => jumpTo(move)}>
                    {description}
                </button>
            </li>
        );
    })

    return (
        <div className={styles.content}>
            <Board
                xIsNext={xIsNext}
                squares={currentSquares}
                onPlay={handlePlay}
            />
            <div className={styles.gameinfo}>
                <ol>{moves}</ol>
            </div>
        </div>
    )
}

const Board = ({ xIsNext, squares, onPlay }) => {

    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }

        const copySquares = squares.slice(); // array's copy
        if (xIsNext) {
            copySquares[i] = 'X';
        }
        else {
            copySquares[i] = 'O';
        }
        onPlay(copySquares)
    }

    const winner = calculateWinner(squares);
    let status;
    if (winner) {
        status = "Winner: " + winner;
    }
    else {
        status = "Next player: " + (xIsNext ? "X" : "O");
    }

    return (
        <div className={styles.gamefield}>
            <div className={styles.status}>
                {status}
            </div>
            <div className={styles.row}>
                <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
                <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
                <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
            </div>
            <div className={styles.row}>
                <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
                <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
                <Square value={squares[5]} onSquareClick={() => handleClick(5)} />

            </div>
            <div className={styles.row}>
                <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
                <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
                <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
            </div>
        </div>
    )
}

const Square = ({ value, onSquareClick }) => {
    return (
        <button
            className={styles.square}
            onClick={onSquareClick}
        >
            {value}
        </button>
    )
}

function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}

export default TicTacToe