import styles from '../TicTacToe.module.css'
import Square from '../Square/Square';
import calculateWinner from '../helpers';

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

export default Board