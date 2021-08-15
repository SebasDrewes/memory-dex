import React, { useEffect } from 'react';
//custom hook
import { useHttp } from '../hooks/http'

const Main = ({setScore, setGlobalScore}) => {
    useEffect(() => {
        setScore(5);
        setGlobalScore(10);
    }, [setScore, setGlobalScore]);
    
    const [isLoading, fetchedData] = useHttp('https://pokeapi.co/api/v2/pokemon?limit=151', []);
    console.log(isLoading)
    const selectedPokemons = fetchedData ? fetchedData.results
      .slice(0, 5)
      .map((pokemon, index) => ({
          name: pokemon.name,
          img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`,
          id: index + 1 
      })) : [] ;

    console.log(selectedPokemons);
    console.log(fetchedData);

    return (
        <div id="mainContainer"></div>
    )
}

export default Main