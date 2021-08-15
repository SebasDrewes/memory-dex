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
    console.log(fetchedData.results[55])

    return (
        <div id="mainContainer"></div>
    )
}

export default Main