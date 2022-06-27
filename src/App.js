import './App.css';

import GameSession from './GameSession.js'

const questions = [
  {
    question: "Der erste Begriff im Buchstabier-Alphabet ist...",
    answers: ["Anton", "Alfa", "Anne"],
    correct_answer: "Alfa",
  },
  {
    question: "Der zweite Begriff im Buchstabier-Alphabet ist...",
    answers: ["Butter", "Beta", "Bravo"],
    correct_answer: "Bravo",
  },
  {
    question: "Der dritte Begriff im Buchstabier-Alphabet ist...",
    answers: ["Caesar", "Charlie", "Culprit"],
    correct_answer: "Charlie",
  },
]

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Wiss-Quiz</h1>
        <hr/>
        <GameSession questions = { questions }/>
        <hr/>
      </header>
    </div>
  );
}

export default App;
