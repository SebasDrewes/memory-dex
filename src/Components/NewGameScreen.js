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
                    <p className="newGameText">Perdiste!!</p>
                    <img src={psyduck} alt="psyduck" id="psyduck" draggable="false"></img>
                    <p className="newGameText"> Tu puntaje es {score -1}</p>
                    <button id="newGame"onClick={newGame}>Nuevo Juego</button>
                </div>
            )
        } return null
}

export default NewGameScreen