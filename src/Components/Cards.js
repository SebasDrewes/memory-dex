/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect} from 'react';
import Gameflow from './Gameflow'
import Pokemons from './Pokemons'
import uniqid from 'uniqid'

const Cards = () => {
    const [level, cardCount, randomIndex, turns, checkGameOver, gameOver, nextRound] = Gameflow();
    const [pokemons, setPokemons] = useState([])

    useEffect(async () => {
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
    }, [])

    const shufflePokemons = () => {
        console.log(pokemons)
        const shuffledPokemons = pokemons
        for (let i = pokemons.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = shuffledPokemons[i];
          shuffledPokemons[i] = shuffledPokemons[j];
          shuffledPokemons[j] = temp;
        }
        // ... para mutar state array y trigger a rerender
        setPokemons([...shuffledPokemons])
      }
    const markClick = (id) => {
        pokemons.map((pokemon) => {
            if(pokemon.id === id){
                if(!pokemon.isClicked) {
                pokemon.isClicked = true
                return pokemon
            }else {
                pokemon.doubleClicked = true
            }
            }
            return pokemon
        })
        console.log(pokemons)
    }
    const handleClick = (id) => {
        shufflePokemons();
        markClick(id);
        gameOver((checkGameOver(pokemons)))
        nextRound(pokemons);
    }

    return (
        <Pokemons pokemons={pokemons} handleClick={handleClick}/>
    )
}

export default Cards