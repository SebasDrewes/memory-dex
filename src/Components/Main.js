import React, { useEffect } from 'react';
import Cards from './Cards'

const Main = ({setScore, setGlobalScore}) => {
    useEffect(() => {
        setScore(5);
        setGlobalScore(10);
    }, [setScore, setGlobalScore]);
    
    return (
        <div id="mainContainer">
            <Cards />
        </div>
    )
}

export default Main