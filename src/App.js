import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect} from "react";

function App() {
  const [displayWelcome, setDisplayWelcome] = useState(true)
  const [displayNameInput, setDisplayNameInput] = useState(false)
  const [displayGame, setDisplayGame] = useState(false)
  const [nameInput, setNameInput] = useState("")

  const handleSubmitName = (event) => {
    event.preventDefault();
    console.log(nameInput)

  }

  return (
    <div className="App">
      <h1>Hey there!</h1>
      <h1>This app is a simple rock paper scissors game. Would you like to play?</h1>
      <button onClick={() => {setDisplayNameInput(true)}}>Sure!</button><button>No, thanks.</button>
      {displayNameInput ? (
        <>
        <h1>Awesome!</h1>
        <h1>I need to get your name first. Please enter it below:</h1>
        <form onSubmit={handleSubmitName}>
          <input type="text" value={nameInput} onChange={(event) => setNameInput(event.target.value)}></input>
          <button type="submit">Save Player</button>
        </form>
        </>
      ) : null}
      <>
        <h1>Hi, {nameInput}!</h1>
      </>
    </div>
  );
}

export default App;