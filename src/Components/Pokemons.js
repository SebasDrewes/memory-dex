import React from 'react';
import './Pokemons.css'

const Pokemons = ({pokemons, shufflePokemons}) => {
    const displayPokemons = () => {
        const pokemonsArray = []
        for (let i = 0; i < pokemons.length; i += 1) {
            const { id } = pokemons[i];
            pokemonsArray.push(
            <div className="card" key={`card${id}`} onClick={shufflePokemons}>
                <img 
                className="cardImg"
                key={`cardImg${id}`}
                src={pokemons[i].img} 
                alt={pokemons[i].name}>
                </img>
                <p
                className="cardName"
                key={`cardName${id}`}
                value={pokemons[i].name}
                >
                {pokemons[i].name}
                </p>
            </div>
            );
        }
        return pokemonsArray
    }

    return (
        <div id="cardsContainer">
            {displayPokemons()}
        </div>
    )
}

export default Pokemons