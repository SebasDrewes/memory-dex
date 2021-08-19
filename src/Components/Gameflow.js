const Gameflow = () => {
    
    const randomIndex = Math.floor(Math.random() * (375 - 0)) + 0;

    const shufflePokemons = (pokemons, setPokemons) => {
        console.log(pokemons)
        const shuffledPokemons = pokemons
        for (let i = pokemons.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          const temp = shuffledPokemons[i];
          shuffledPokemons[i] = shuffledPokemons[j];
          shuffledPokemons[j] = temp;
        }
        // ... para mutar state array y trigger a rerender
        setPokemons([...shuffledPokemons])
      }

    const markClick = (id, pokemons) => {
        pokemons.map((pokemon) => {
            if(pokemon.id === id){
                if(!pokemon.isClicked) {
                pokemon.isClicked = true
            }else {
                pokemon.doubleClicked = true
            }
            }
            return pokemon
        })

    }

    const checkGameOver = (pokemons) => {
        return pokemons.some(pokemon => pokemon.doubleClicked)
    }
    const gameOver = (condition, setLevel, setCardCount) => {
        if (condition) {
            setLevel(1)
            setCardCount(4)
            console.log('gameover!!')
        }
    }
    const nextRound = (pokemons, level, setLevel, cardCount, setCardCount) => {
        if(pokemons.every(pokemon => pokemon.isClicked)) {
            setLevel(level + 1)
            if(cardCount <= 10)
            setCardCount(cardCount + 2);
            console.log(level)
        }
    }
    const updateScore = (score, setScore, globalScore, setGlobalScore) => {
        setScore(score + 1)
        setGlobalScore(globalScore + 1)
    }
    return [randomIndex, shufflePokemons, checkGameOver, gameOver, nextRound, markClick, updateScore]
}
export default Gameflow