import React, { useState, useEffect} from 'react';
import Gameflow from './Gameflow'
import Pokemons from './Pokemons'
import LoadingScreen from './LoadingScreen'
import NewGameScreen from './NewGameScreen'
import uniqid from 'uniqid'

const Cards = ({score, highestScore, level, setScore, setHighestScore, setLevel}) => {
    const [randomIndex, shufflePokemons, checkGameOver, gameOver, nextRound, markClick, updateScore] = Gameflow();
    const [pokemons, setPokemons] = useState([])
    const [cardCount, setCardCount] = useState(4);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        async function fetchData() {
            setLoading(true);
            if(level !== 0){
            const pokedata = await(await fetch('https://pokeapi.co/api/v2/pokemon?limit=386', { mode: 'cors' })).json();
            setPokemons(pokedata ? pokedata.results
                //slice + map para generar nuevo array de objectos de pokemons seleccionados
                .slice(randomIndex, randomIndex + cardCount)
                .map((pokemon, index) => ({
                    name: pokemon.name,
                    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${randomIndex+ index + 1}.png`,
                    isClicked: false,
                    doubleClicked: false,
                    isLoaded: false,
                    id: uniqid()
                })) : [])}};
        fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [level]);

    const handleClick = (id) => {
        shufflePokemons(pokemons, setPokemons);
        updateScore(score, setScore, highestScore, setHighestScore)
        markClick(id, pokemons);
        gameOver(checkGameOver(pokemons), level, setLevel, setCardCount,
        highestScore, setHighestScore);
        nextRound(pokemons, level, setLevel, cardCount, setCardCount);
    }

    return (
        <div>
        <Pokemons pokemons={pokemons} handleClick={handleClick} setLoading={setLoading}/>
        <LoadingScreen loading={loading} level={level}/>
        <NewGameScreen level={level} score={score} setScore={setScore} 
        setLevel={setLevel}/>
        </div>
    )
}

export default Cards