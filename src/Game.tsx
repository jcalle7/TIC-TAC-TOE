import { useState } from "react";

interface CellProps {
    value: string;
    onClick: () => void;
}

const Cell: React.FC<CellProps> = ({value, onClick}) => {
    return (
        <div className="cell" onClick={onClick}>
            {value}
        </div>
    );
};

const Game: React.FC = () => {
    const [board, setBoard] = useState <string[][]> ([
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]);
    const [turn, setTurn] = useState<string>('X');
    const [winner, setWinner] = useState<string | null>(null);

    const handleClick = (row: number, col: number) => {
        if(winner) return;
        if(board[row][col] !== '') return;

        const newBoard = [...board];
        newBoard[row][col] = turn;

        setBoard(newBoard);

        checkWinner(newBoard);

        setTurn(turn === 'X' ? 'O' : 'X');
    };

    const checkWinner = (newBoard: string[][]) => {
        for(let i = 0; i < 3; i++) {
            if(newBoard[i][0] === newBoard[i][1] && newBoard[i][1] === newBoard[i][2] && newBoard[i][0] !== '') {
                setWinner(newBoard[i][0]);
                return;
            }
            if(newBoard[0][i] === newBoard[1][i] && newBoard[1][i] === newBoard[2][i] && newBoard[0][i] !== '') {
                setWinner(newBoard[0][i]);
                return;
            }
        }
        if(newBoard[0][0] === newBoard[1][1] && newBoard[1][1] === newBoard[2][2] && newBoard[0][0] !== '') {
            setWinner(newBoard[0][0]);
            return;
        }
        if(newBoard[0][2] === newBoard[1][1] && newBoard[1][1] === newBoard[2][0] && newBoard[0][2] !== '') {
            setWinner(newBoard[0][2]);
            return;
        }
    };

    const resetGame = () => {
        setBoard([
            ['', '', ''],
            ['', '', ''],
            ['', '', ''],
        ]);
        setTurn('X');
        setWinner(null);
    };

    return (
        <div className="App">
            <h1>TIC - TAC - TOE</h1>
            <div className="board">
                {board.map((row, rowIndex) => (
                    <div key={rowIndex} className="row">
                        {row.map((cell, colIndex) => (
                            <Cell
                            key={colIndex}
                            value={cell}
                            onClick={() => handleClick(rowIndex, colIndex) }
                            />
                        ))}
                    </div>
                ))}
            </div>
            {winner && <h2>Jugador {winner} ganó!</h2>}
            <button onClick={resetGame} className="reset-button">
            Reiniciar Juego
            </button>
        </div>
    );
};

export default Game;