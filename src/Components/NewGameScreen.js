import psyduck from './psyduck.png';
import './NewGameScreen.css';

const NewGameScreen = ({level, score, setScore, setLevel}) => {
    const newGame = () => {
        setLevel(1)
        setScore(0)
    }
        if (level === 0) {
            return (
                <div className="loadingScreen">
                    <p>Perdiste!!</p>
                    <img src={psyduck} alt="psyduck" id="psyduck" draggable="false"></img>
                    <p>Tu puntaje es {score -1}</p>
                    <button id="newGame"onClick={newGame}>New Game</button>
                </div>
            )
        } return null
}

export default NewGameScreen