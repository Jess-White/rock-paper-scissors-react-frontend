import React, { useState, useEffect } from "react";

export default function PlayerNamePrompt({
  gameType,
  setPlayer1NameInput,
  setPlayer2NameInput,
  player1NameInput,
  player2NameInput,
  handleSubmitName,
  handleStartGame,
}) {
  const gamePlayButton = (
    <button onClick={() => handleStartGame()}>Start Game</button>
  );

  const handleSubmit = (event, name) => {
    event.preventDefault();
    handleSubmitName(name);
    console.log(name);
  };

  if (gameType === 1) {
    return (
      <>
        <h1>I need to get your name first. Please enter it below:</h1>
        <form onSubmit={(event) => handleSubmit(event, player1NameInput)}>
          <input
            type="text"
            value={player1NameInput}
            onChange={(event) => setPlayer1NameInput(event.target.value)}
          ></input>
          <button type="submit">Save Player</button>
        </form>
        {gamePlayButton}
      </>
    );
  } else if (gameType === 2) {
    return (
      <>
        <h1>I need to get your names first. Please enter them below:</h1>
        <form onSubmit={(event) => handleSubmit(event, player1NameInput)}>
          <input
            type="text"
            value={player1NameInput}
            onChange={(event) => setPlayer1NameInput(event.target.value)}
          ></input>
          <button type="submit">Save Player</button>
        </form>
        {/* second player form */}
        <form onSubmit={(event) => handleSubmit(event, player2NameInput)}>
          <input
            type="text"
            value={player2NameInput}
            onChange={(event) => setPlayer2NameInput(event.target.value)}
          ></input>
          <button type="submit">Save Player</button>
        </form>
        {gamePlayButton}
      </>
    );
  }
}
