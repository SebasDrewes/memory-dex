import {useState} from 'react'
import './App.css';
import Header from './Components/Header'
import Cards from './Components/Cards'

const App = () => {
  const [score, setScore] = useState(0);
  const [highestScore, setHighestScore] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <div className="App">
      <Header 
      score={score} 
      highestScore={highestScore}
      level={level}
      />
      <Cards
      score={score} 
      highestScore={highestScore}
      level={level}
      setScore={setScore} 
      setHighestScore={setHighestScore}
      setLevel={setLevel}
      />
    </div>
  );
}

export default App;
