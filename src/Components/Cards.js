import React, { useEffect } from 'react';
//custom hook
import Gameflow from './Gameflow'
import { useHttp } from '../hooks/http'

const Cards = () => {
    const [isLoading, fetchedData] = useHttp('https://pokeapi.co/api/v2/pokemon?limit=386', []);
    const [level, cardCount, randomIndex, turns] = Gameflow();
    const selectedPokemons = fetchedData ? fetchedData.results
      .slice(randomIndex, randomIndex + cardCount)
      .map((pokemon, index) => ({
          name: pokemon.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${randomIndex+ index + 1}.png`,
          id: index + 1 
      })) : [] ;

    const displayPokemons = () => {
        const pokemons = []
        for (let i = 0; i < selectedPokemons.length; i += 1) {
            const { id } = selectedPokemons[i];
            pokemons.push(
            <div className="card" key={`card${id}`} onClick={() => console.log('helloWorld')}>
                <img 
                className="cardImg"
                key={`cardImg${id}`}
                src={selectedPokemons[i].img} 
                alt={selectedPokemons[i].name}>
                </img>
                <p
                className="cardName"
                key={`cardName${id}`}
                value={selectedPokemons[i].name}
                >
                {selectedPokemons[i].name}
                </p>
            </div>
            );
        }
        const shuffledPokemons = pokemons.sort((a, b) => 0.5 - Math.random());
        return shuffledPokemons || null;
    }


    return (
        <div id="cardsContainer">
            {displayPokemons()}
        </div>
    )
}

export default Cards