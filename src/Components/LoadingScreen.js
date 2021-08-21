import './LoadingScreen.css';
import pokeball from './pokeball.png';

const LoadingScreen = ({loading, level}) => {
    const loadingGif = () => {
        if (loading) {
            return (
                <div id="loadingScreen">
                    <div id="pokeFlex">
                    <img src={pokeball} alt="pokeball" id="pokeball"></img>
                    <p id="loadingText">Nivel {level}</p>
                    </div>
                </div>
            )
        } return null
    }
    return (
        loadingGif()
    )
}

export default LoadingScreen;