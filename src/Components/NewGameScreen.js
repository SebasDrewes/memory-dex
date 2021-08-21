//import pokeball from './pokeball.png';

const NewGameScreen = ({level, score, setScore, setLevel}) => {
    const newGame = () => {
        setLevel(1)
        setScore(0)
    }
        if (level === 0) {
            return (
                <div id="loadingScreen">
                    <p>Game Over</p>
                    <p>Tu puntaje es {score -1}</p>
                    <button onClick={newGame}>New Game</button>
                </div>
            )
        } return null
}

export default NewGameScreen