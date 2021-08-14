const Header = ({score, globalScore}) => {

    return (
        <div id="header">
            <h1 id="title">Memory-Dex</h1>
            <h2 id="score">{score}</h2>
            <h2 id="globalScore">{globalScore}</h2>
        </div>
    )
}

export default Header;