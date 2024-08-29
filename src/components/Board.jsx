import calculateWinner from "../utils/calculateWinner";
import { useState, useEffect } from "react";
import Square from "./Square";
import "./Board.css";

const rowStyle = {
  display: "flex",
};

const boardStyle = {
  backgroundColor: "rgb(105, 53, 105)",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

function Board() {
  const gameStart = new Audio("/startgame.mp3");
  const resetSound = new Audio("/reset.mp3")

  const h1BounceStyle = {
    display: "inline-block",
    animation: "bounce 2s infinite",
    fontSize: "2em",
    color: "white",
    textShadow: "0px 0px 15px pink",
  };

  const styles = `
    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-30px);
      }
      60% {
        transform: translateY(-15px);
      }
    }
  `;

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  useEffect(() => {
    // Agregar el CSS de animación al montar el componente
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    return () => {
      // Limpiar el CSS de animación al desmontar el componente
      document.head.removeChild(styleSheet);
    };
  }, []);

  useEffect(() => {
    if (winner) {
      const winnerSound = new Audio("/winner.mp3");
      winnerSound.play();
      const statusDiv = document.getElementById("statusArea");
      if (statusDiv) {
        Object.assign(statusDiv.style, h1BounceStyle);
      }
    }
  }, [winner]);

  useEffect(() => {
    // Reproducir sonido de inicio solo una vez al montar el componente
    gameStart.play();
  }, []);

  const handleClick = (i) => {
    // Evitar clics si ya hay un ganador o la casilla está ocupada
    if (squares[i] || winner) return;
    const clickSound = new Audio("/click-sound.mp3");
    clickSound.play();
    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleReset = () => {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
    resetSound.play()
  };

  const status = winner
    ? `Winner: ${winner}`
    : `Next player: ${xIsNext ? "X" : "O"}`;

  return (
    <div style={containerStyle} className="gameBoard">
      <div id="statusArea" className="status">
        {status}
      </div>
      <button onClick={handleReset}>Reset</button>
      <div style={boardStyle}>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[0]} onClick={() => handleClick(0)} />
          <Square value={squares[1]} onClick={() => handleClick(1)} />
          <Square value={squares[2]} onClick={() => handleClick(2)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[3]} onClick={() => handleClick(3)} />
          <Square value={squares[4]} onClick={() => handleClick(4)} />
          <Square value={squares[5]} onClick={() => handleClick(5)} />
        </div>
        <div className="board-row" style={rowStyle}>
          <Square value={squares[6]} onClick={() => handleClick(6)} />
          <Square value={squares[7]} onClick={() => handleClick(7)} />
          <Square value={squares[8]} onClick={() => handleClick(8)} />
        </div>
      </div>
    </div>
  );
}

export default Board;
