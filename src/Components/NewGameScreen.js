import psyduck from './psyduck.png';
import './NewGameScreen.css';

const NewGameScreen = ({level, score, setScore, setLevel, setCardCount}) => {
    const newGame = () => {
        setLevel(1)
        setScore(0)
        setCardCount(4)
    }
        if (level === 0) {
            setCardCount(0)
            return (
                <div className="loadingScreen">
                    <p>Perdiste!!</p>
                    <img src={psyduck} alt="psyduck" id="psyduck"></img>
                    <p>Tu puntaje es {score -1}</p>
                    <button onClick={newGame}>New Game</button>
                </div>
            )
        } return null
}

export default NewGameScreen