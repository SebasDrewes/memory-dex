import React, {useState}from 'react';
import './Pokemons.css'

const Pokemons = ({pokemons, handleClick, setLoading}) => {
    const [animationClass, setAnimationClass] = useState("card")
    const isLoaded = (i) => {
        return pokemons[i].isLoaded = true
    }
    const checkIfAllLoaded = () => {
        if(pokemons.every(pokemon => pokemon.isLoaded)) {
            setLoading(false)
        }
    }
    const capitalize = (string) => {
        let capitalizedString = string
        return capitalizedString.replace(capitalizedString[0], capitalizedString[0].toUpperCase());
    }
    const animationClick = () => {
        if(animationClass === "card") {
            setAnimationClass("cardClicked")
        } else {
            setAnimationClass("card")
        }
        }

    const displayPokemons = () => {
        const pokemonsArray = []
        for (let i = 0; i < pokemons.length; i += 1) {
            const { id } = pokemons[i];
            pokemonsArray.push(
            <div className={animationClass} key={`card${id}`} onClick={() => {handleClick(id); animationClick()}}>
                <img 
                className="cardImg"
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