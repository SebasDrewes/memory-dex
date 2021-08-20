const Header = ({score, highestScore, level}) => {
    return (
        <div id="header">
            <h1 id="title">Memory-Dex</h1>
            <h2 id="level" >Nivel {level}</h2>
            <h2 id="score">{score}</h2>
            <h2 id="highestScore">{highestScore}</h2>
            <button onClick={() => console.log(level)}>console</button>
        </div>
    )
}

export default Header;