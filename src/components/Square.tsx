type Props = {
    squares: string[],
    setSquares: React.Dispatch<React.SetStateAction<string[]>>,
    playersTurn: boolean,
    setPlayersTurn: React.Dispatch<React.SetStateAction<boolean>>
}

const Square = ({ squares, playersTurn}: Props) => {
    console.log(squares, playersTurn)
  return (
    <div></div>
  )
}

export default Square