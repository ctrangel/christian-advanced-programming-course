import React from "react";
import "../../src/TicTacToe.css";
import { Box, Button } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import Confetti from "react-confetti";

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
    <>
      {winner && winner !== "D" && <Confetti />}
      <Box
        p={4}
        border={"1px solid black"}
        borderRadius={"md"}
        width={"fit-content"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        backgroundColor={"#f0f0f0"}
      >
        <Box
          m={4}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          className="tic-tac-toe"
        >
          <Text m={5} fontSize={"25px"}>
            Tic Tac Toe
          </Text>
          <Box className="board">
            {board.map((square, i) => (
              <button key={i} className="square" onClick={() => handleClick(i)}>
                {square}
              </button>
            ))}
          </Box>
          <div>
            <p>{getStatusMessage()}</p>
          </div>
          <Button
            className="reset-button"
            onClick={resetGame}
            m={5}
            bgColor={"#ca99e8"}
          >
            Reset Game
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default TicTacToe;
