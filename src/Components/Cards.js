/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import Gameflow from './Gameflow'
import Pokemons from './Pokemons'
import uniqid from 'uniqid'

const Cards = ({score, globalScore, level, setScore, setGlobalScore, setLevel}) => {
    const [randomIndex, shufflePokemons, checkGameOver, gameOver, nextRound, markClick, updateScore] = Gameflow();
    const [pokemons, setPokemons] = useState([])
    const [cardCount, setCardCount] = useState(4);

    useEffect(async () => {
        console.log('isLoading')
        const pokedata = await(await fetch('https://pokeapi.co/api/v2/pokemon?limit=386', { mode: 'cors' })).json();
        setPokemons(pokedata ? pokedata.results
            .slice(randomIndex, randomIndex + cardCount)
            .map((pokemon, index) => ({
                name: pokemon.name,
                img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomIndex+ index + 1}.png`,
                isClicked: false,
                doubleClicked: false,
                id: uniqid()
            })) : [])
    }, [cardCount])

    const handleClick = (id) => {
        shufflePokemons(pokemons, setPokemons);
        updateScore(score, setScore, globalScore, setGlobalScore)
        markClick(id, pokemons);
        gameOver(checkGameOver(pokemons), setLevel, setCardCount);
        nextRound(pokemons, level, setLevel, cardCount, setCardCount);
    }

    return (
        <Pokemons pokemons={pokemons} handleClick={handleClick}/>
    )
}

export default Cards