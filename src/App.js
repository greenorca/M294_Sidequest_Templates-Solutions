import './App.css';

function App(props) {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to the Wiss-Quiz</h1>
        <hr />
        <h2>Welcher Begriff kommt im <a href="https://de.wikipedia.org/wiki/ICAO-Alphabet">ICAO-Buchstabieralphabet</a> zuerst?</h2>
        { /* hier könnte ein Smiley entstehen */ }
        <hr />
      </header>
      <div className="buttonbar">
        { /* Buttons hier erstellen */ }
      </div>
      <hr />
      <div className="feedbackbar">
        { /*answer*/ }
      </div>
    </div>
  );
}

export default App;
