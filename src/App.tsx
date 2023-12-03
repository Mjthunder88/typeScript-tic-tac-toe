import "./App.css";
import Square from "./components/Square";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState(["", "", "", "", "", "", "", "", ""]);

  const [playersTurn, setPlayersTurn] = useState(true);

  const handleClick = () => {
    setSquares(["", "", "", "", "", "", "", "", ""]);
    setPlayersTurn(true);
    return;
  };

  const calculateWinner = (arr: string[]) => {
    let lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
        return `${arr[a]} won!`;
      }
    }
    return "Who will win?";
  };

  return (
    <div className="card">
    <div className="App">
      <span>{calculateWinner(squares)}</span>
      <div className="container">
        {squares.map((val, index) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              playersTurn={playersTurn}
              setPlayersTurn={setPlayersTurn}
              val={val}
              index={index}
            />
          );
        })}
      </div>
      <button className="button" onClick={handleClick}>Reset</button>
    </div>

    </div>

  );
}

export default App;
