import logo from './logo.svg';
import './App.css';
import React, { useState, useMemo } from "react";

function App() {
  const [displayGame, setDisplayGame] = useState(false)
  const [displayPlayerName, setDisplayPlayerName] = useState(false)
  const [displayWelcome, setDisplayWelcome] = useState(true)

  return (
    <div className="App">
      <h1>Hey there!</h1>
      <h1>This app is a simple rock paper scissors game in React and Rails. Would you like to play?</h1>
      <button onClick={() => {setDisplayPlayerName(true)}}>Sure!</button><button>No, thanks.</button>
    </div>
  );
}

export default App;
