type Props = {
  squares: string[];
  setSquares: React.Dispatch<React.SetStateAction<string[]>>;
  playersTurn: boolean;
  setPlayersTurn: React.Dispatch<React.SetStateAction<boolean>>;
  val: string;
  index: number;
};

const Square = ({
  squares,
  setSquares,
  playersTurn,
  setPlayersTurn,
  val,
  index,
}: Props) => {
  const handleClick = () => {
    if (!val && playersTurn === true) {
      squares.splice(index, 1, "X");
      setSquares(squares);
      setPlayersTurn(!playersTurn);
    } else {
      squares.splice(index, 1, "O");
      setSquares(squares);
      setPlayersTurn(!playersTurn);
    }
  };

  return (
    <div className="square" onClick={handleClick}>
      {val === "O" ? val : val}
    </div>
  );
};

export default Square;
