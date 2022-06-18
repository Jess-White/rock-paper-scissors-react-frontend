import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [displayWelcome, setDisplayWelcome] = useState(true);
  const [displayNameInput, setDisplayNameInput] = useState(false);
  const [displayGame, setDisplayGame] = useState(false);
  const [gameType, setGameType] = useState(0);
  const [player1NameInput, setPlayer1NameInput] = useState("");
  const [player2NameInput, setPlayer2NameInput] = useState("");
  // const [choiceArray, setChoiceArray] = useState([]);
  // const [player1Choice, setPlayer1Choice] = useState({});
  // const [player2Choice, setPlayer2Choice] = useState({});
  const [gameArgs, setGameArgs] = useState({ player1: "", player2: "" });

  const handleSubmitName = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(event.target[0].value);
  };

  useEffect(() => {
    playGame(gameArgs);
  }, [gameArgs]);

  const playGame = (choices) => {
    console.log(choices);
    if (choices.player1.length > 1 && choices.player2.length > 1) {
      console.log("judge game!");
    }
  };

  return (
    <div className="App">
      <h1>Hey there!</h1>
      <h1>
        This app is a simple rock paper scissors game. Would you like to play?
      </h1>
      <button
        onClick={() => {
          setDisplayNameInput(true);
        }}
      >
        Sure!
      </button>
      <button>No, thanks.</button>
      {displayNameInput ? (
        <>
          <h1>Awesome!</h1>
          <>
            <h1>
              Would you like to play a two-person game, or one person against
              the computer?
            </h1>
            <button
              onClick={() => {
                setGameType(2);
              }}
            >
              Two-person game.
            </button>
            <button
              onClick={() => {
                setGameType(1);
              }}
            >
              Play against the computer
            </button>
          </>

          <h1>I need to get your name first. Please enter it below:</h1>

          <form onSubmit={handleSubmitName}>
            <input
              type="text"
              value={player1NameInput}
              onChange={(event) => setPlayer1NameInput(event.target.value)}
            ></input>
            <button type="submit">Save Player</button>
          </form>
          <form onSubmit={handleSubmitName}>
            <input
              type="text"
              value={player2NameInput}
              onChange={(event) => setPlayer2NameInput(event.target.value)}
            ></input>
            <button type="submit">Save Player</button>
          </form>
        </>
      ) : null}
      <>
        <h1>Hi, {player1NameInput}!</h1>
        <div>
          <button
            value={gameArgs.player1}
            onClick={() => setGameArgs({ ...gameArgs, player1: "rock" })}
          >
            Rock
          </button>
          <button
            value={gameArgs.player1}
            onClick={() => setGameArgs({ ...gameArgs, player1: "paper" })}
          >
            Paper
          </button>
          <button
            value={gameArgs.player1}
            onClick={() => setGameArgs({ ...gameArgs, player1: "scissors" })}
          >
            Scissors
          </button>
        </div>
        <h1>Hi, {player2NameInput}!</h1>
        <button
          value={gameArgs.player2}
          onClick={() => setGameArgs({ ...gameArgs, player2: "rock" })}
        >
          Rock
        </button>
        <button
          value={gameArgs.player2}
          onClick={() => setGameArgs({ ...gameArgs, player2: "paper" })}
        >
          Paper
        </button>
        <button
          value={gameArgs.player2}
          onClick={() => setGameArgs({ ...gameArgs, player2: "scissors" })}
        >
          Scissors
        </button>
      </>
    </div>
  );
}

export default App;
