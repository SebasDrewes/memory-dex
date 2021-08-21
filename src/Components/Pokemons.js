import React, {useState}from 'react';
import './Pokemons.css'

const Pokemons = ({pokemons, handleClick, setLoading}) => {
    const [animationClass, setAnimationClass] = useState("cardImg")
    const isLoaded = (i) => {
        return pokemons[i].isLoaded = true
    }
    const checkIfAllLoaded = () => {
        if(pokemons.every(pokemon => pokemon.isLoaded)) {
            setLoading(false)
        }
    }
    const capitalize = (string) => {
    return string.replace(string[0], string[0].toUpperCase());
    }
    const animationClick = () => {
        if(animationClass === "cardImg") {
            setAnimationClass("cardImgClicked")
        } else {
            setAnimationClass("cardImg")
        }
        }

    const displayPokemons = () => {
        const pokemonsArray = []
        for (let i = 0; i < pokemons.length; i += 1) {
            const { id } = pokemons[i];
            pokemonsArray.push(
            <div className="card" key={`card${id}`} onClick={() => {handleClick(id); animationClick()}}>
                <img 
                className={animationClass}
                key={`cardImg${id}`}
                src={pokemons[i].img}
                draggable="false"
                onLoad={() => {isLoaded(i); checkIfAllLoaded()}}
                alt={pokemons[i].name}>
                </img>
                <p
                className="cardName"
                key={`cardName${id}`}
                >
                {capitalize(pokemons[i].name)}
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