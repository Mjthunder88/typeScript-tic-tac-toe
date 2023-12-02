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
  }

  return (
    <div className="App">
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
      <button onClick={handleClick}>Reset</button>
    </div>
  );
}

export default App;
