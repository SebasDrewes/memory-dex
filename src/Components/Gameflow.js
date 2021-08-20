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
    const gameOver = (condition, level, setLevel, setCardCount, setScore, highestScore, 
        setHighestScore, newGameSwitch, setNewGameSwitch) => {
        if (condition) {
            setLevel(1)
            setScore(0)
            setCardCount(4)
            setHighestScore(highestScore)
            if(level === 1) {
            // solo forza rerender con newGameSwitch si el nivel es 1
            if(newGameSwitch) {
                setNewGameSwitch(false)
            } else {
                setNewGameSwitch(true)
            }
        }
            console.log('gameover!!')
        }
    }
    const nextRound = (pokemons, level, setLevel, cardCount, setCardCount) => {
        if(pokemons.every(pokemon => pokemon.isClicked)) {
            setLevel(level + 1)
            if(cardCount <= 10)
            setCardCount(cardCount + 1);
            console.log(level)
        }
    }
    const updateScore = (score, setScore, highestScore, setHighestScore) => {
        setScore(score + 1)
        if (score >= highestScore) {
        setHighestScore(score + 1)
        }
    }
    return [randomIndex, shufflePokemons, checkGameOver, gameOver, nextRound, markClick, updateScore]
}
export default Gameflow