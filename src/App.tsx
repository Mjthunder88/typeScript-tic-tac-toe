import "./App.css";
import Square from "./components/Square";
import { useState } from "react";

function App() {
  const [squares, setSquares] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);

  const [playersTurn, setPlayersTurn] = useState(true);

  return (
    <div className="App">
      <Square squares={squares} setSquares={setSquares} playersTurn={playersTurn} setPlayersTurn={setPlayersTurn} />
    </div>
  );
}

export default App;
