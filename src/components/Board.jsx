import calculateWinner from "../utils/calculateWinner";
import { useState } from "react";
import Square from "./Square";
import "./Board.css"

const rowStyle = {
    display: 'flex'
  };
  
  const boardStyle = {
    backgroundColor: 'gray',
    width: '208px',
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    flexDirection: 'column',
    border: '3px #eee solid'
  };
  
  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  };
  
  
  const buttonStyle = {
    marginTop: '15px',
    marginBottom: '16px',
    width: '80px',
    height: '40px',
    backgroundColor: 'pink',
    color: 'white',
    fontSize: '16px',
    border: 'none',
    cursor: 'pointer'
  };



function Board() {
      
      

    const [squares, setSquares] = useState(Array(9).fill(null));
    const [xIsNext, setXIsNext] = useState(true);
    const winner = calculateWinner(squares);
  
    const handleClick = (i) => {
      // Evitar clics si ya hay un ganador o la casilla está ocupada
      if (squares[i] || winner) return;
      const newSquares = squares.slice();
      newSquares[i] = xIsNext ? "X" : "O";
      setSquares(newSquares);
      setXIsNext(!xIsNext);
    };
  
    const handleReset = () => {
      setSquares(Array(9).fill(null));
      setXIsNext(true);
    };
  
    const status = winner ? `Winner: ${winner}` : `Next player: ${xIsNext ? "X" : "O"}`;
  
    return (
      <div style={containerStyle} className="gameBoard">
        <div id="statusArea" className="status">{status}</div>
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

  export default Board