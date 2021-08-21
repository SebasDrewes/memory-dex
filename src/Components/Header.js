import './Header.css';

const Header = ({score, highestScore, level}) => {
    return (
        <div id="header">
            <h2 id="level" >Nivel {level}</h2>
            <h1 id="title">Memory-Dex</h1>
            <div id="scoreBoard">
            <h2 id="score">Puntaje: {score}</h2>
            <h2 id="highestScore">Mejor Puntaje: {highestScore}</h2>
            </div>
        </div>
    )
}

export default Header;