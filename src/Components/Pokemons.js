import React from 'react';
import './Pokemons.css'

const Pokemons = ({pokemons, handleClick, setLoading}) => {
    const isLoaded = (i) => {
        return pokemons[i].isLoaded = true
    }
    const checkIfAllLoaded = () => {
        if(pokemons.every(pokemon => pokemon.isLoaded)) {
            setLoading(false)
        }
    }
    const displayPokemons = () => {
        const pokemonsArray = []
        for (let i = 0; i < pokemons.length; i += 1) {
            const { id } = pokemons[i];
            pokemonsArray.push(
            <div className="card" key={`card${id}`} onClick={() => handleClick(id)}>
                <img 
                className="cardImg"
                key={`cardImg${id}`}
                src={pokemons[i].img}
                onLoad={() => {isLoaded(i); checkIfAllLoaded()}}
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