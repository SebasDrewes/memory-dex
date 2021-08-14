import React, { useEffect } from 'react';

const Main = ({setScore, setGlobalScore}) => {

    setScore(5);
    setGlobalScore(10);
    const randomNumber = Math.floor(Math.random() * (152 - 0)) + 0;
    const fetchData = (number) => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
        .then(response => {
            if (!response) {
                throw new Error('Failed to fetch')
            }
            return response.json();
        })
        .then(pokeData => {
            console.log(number)
            console.log(pokeData.results[number].name);
            console.log(pokeData.results[number+1].name);
            console.log(pokeData.results[number+2].name);
            console.log(pokeData.results[number+5].name);
        })

    }
    

    useEffect(() => {
        fetchData(randomNumber)
    }, [randomNumber]);

    return (
        <div id="mainContainer"></div>
    )
}

export default Main