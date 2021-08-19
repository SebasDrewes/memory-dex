import { useState} from 'react';

const Gameflow = () => {
    const [level, setLevel] = useState(1);
    const [cardCount, setCardCount] = useState(4);
    
    const randomIndex = Math.floor(Math.random() * (375 - 0)) + 0;

    const checkGameOver = (pokemons) => {
        return pokemons.some(pokemon => pokemon.doubleClicked)
    }
    const gameOver = (condition) => {
        if (condition) {
            console.log('gameover!!')
        }
    }
    const nextRound = (pokemons) => {
        if(pokemons.every(pokemon => pokemon.isClicked)) {
            setLevel(level + 1)
            setCardCount(cardCount + 2);
            console.log(level)
        }
    }
    return [level, cardCount, randomIndex, checkGameOver, gameOver, nextRound]
}
export default Gameflow