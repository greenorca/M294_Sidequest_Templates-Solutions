import './App.css';

import Button from './Button.js'

const buttonLabels = [ 'Alfa', 'Anne', 'Anton' ]

//export var answer = ""

const myfun = function(event){
  console.log(event.target.innerHTML)
  //answer = <h4>{ event.target.innerHTML }</h4>
}

function App(props) {
  const buttons = buttonLabels.map((item) =>
      <Button label = { item }
              key = { item }
              onClick = { myfun }
      />
  )
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Wiss-Quiz</h1>
        <hr />
        <h2>Welcher Begriff kommt im <a href="https://de.wikipedia.org/wiki/ICAO-Alphabet">ICAO-Buchstabieralphabet</a> zuerst?</h2>
        <img src="img/question_smiley.png" alt=""/>
        <hr />
      </header>
      <div className="buttonbar">
        { buttons }
      </div>
      <hr />
      <div className="feedbackbar">
        { /*answer*/ }
      </div>
    </div>
  );
}

export default App;
