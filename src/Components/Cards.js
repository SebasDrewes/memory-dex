import React, { useEffect } from 'react';
//custom hook
import { useHttp } from '../hooks/http'

const Cards = () => {
    const [isLoading, fetchedData] = useHttp('https://pokeapi.co/api/v2/pokemon?limit=386', []);

    const number = 14
    const level = 5 
    const selectedPokemons = fetchedData ? fetchedData.results
      .slice(number, number + level)
      .map((pokemon, index) => ({
          name: pokemon.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${number + index + 1}.png`,
          id: index + 1 
      })) : [] ;

    const displayPokemons = () => {
        const pokemons = []
        for (let i = 0; i < selectedPokemons.length; i += 1) {
            const { id } = selectedPokemons[i];
            pokemons.push(
            <div className="card" key={`card${id}`}>
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
        return pokemons || null;
    }


    return (
        <div id="cardsContainer">
            {displayPokemons()}
        </div>
    )
}

export default Cards