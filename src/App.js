import {useState} from 'react'
import './App.css';
import Header from './Components/Header'
import Main from './Components/Main'

const App = () => {
  const [score, setScore] = useState(0);
  const [globalScore, setGlobalScore] = useState(0);

  return (
    <div className="App">
      <Header 
      score={score} 
      globalScore={globalScore}
      />
      <Main 
      setScore={setScore} 
      setGlobalScore={setGlobalScore}
      />
    </div>
  );
}

export default App;
