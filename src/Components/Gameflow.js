import { useState} from 'react';

const Gameflow = () => {
    const [level, setLevel] = useState(1);
    const [cardCount, setCardCount] = useState(4);
    
    const randomIndex = Math.floor(Math.random() * (375 - 0)) + 0;

    const turns = (level) => {
            setLevel(level + 1)
            if(cardCount <= 10) {
                setCardCount(cardCount + 1);
            }
        }
    return [level, cardCount, randomIndex, turns]
}
export default Gameflow