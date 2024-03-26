import React from "react";
import "../../src/TicTacToe.css";

const TicTacToe = () => {
  const [board, setBoard] = React.useState(Array(9).fill(null));
  const [xIsNext, setXisNext] = React.useState(true);
  const [winner, setWinner] = React.useState(null);

  const handleClick = (i) => {
    if (winner || board[i]) return; // Early return if game over or square filled
    const boardCopy = [...board];
    boardCopy[i] = xIsNext ? "X" : "O";
    setBoard(boardCopy);
    setXisNext(!xIsNext);
  };

  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return;
      }
    }

    // Check for a draw (no nulls in the board array)
    const isDraw = board.every((square) => square !== null);
    if (isDraw) {
      setWinner("D"); // 'D' for Draw
    }
  };

  React.useEffect(() => {
    checkWinner();
  }, [board]);

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXisNext(true);
    setWinner(null);
  };

  const getStatusMessage = () => {
    if (winner === "D") {
      return "Game is a Draw";
    } else if (winner) {
      return "Winner: " + winner;
    } else {
      return "Next Player: " + (xIsNext ? "X" : "O");
    }
  };

  return (
    <div className="tic-tac-toe">
      <h1>Tic Tac Toe</h1>
      <div className="board">
        {board.map((square, i) => (
          <button key={i} className="square" onClick={() => handleClick(i)}>
            {square}
          </button>
        ))}
      </div>
      <div>
        <p>{getStatusMessage()}</p>
      </div>
      <button className="reset-button" onClick={resetGame}>
        Reset Game
      </button>
    </div>
  );
};

export default TicTacToe;
