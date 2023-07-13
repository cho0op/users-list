import styles from './TicTacToe.module.css';
import { useState } from 'react';
import Board from './Board/Board';

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
    });

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
    );
};

export default TicTacToe;
