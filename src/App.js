import './App.css';

import Question from './Question.js'

const question ='Welcher Begriff kommt im ICAO-Buchstabieralphabet zuerst?'
const answers = [ 'Alfa', 'Anne', 'Andy' ]

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Wiss-Quiz</h1>
        <hr/>
        <Question
          question = { question }
          answers = { answers }
        />
        <hr/>
      </header>
    </div>
  );
}

export default App;
