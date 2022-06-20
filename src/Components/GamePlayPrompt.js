import React, { useState, useEffect } from "react";

export default function GamePlayPrompt({
  gameType,
  player1NameInput,
  player2NameInput,
  setGameArgs,
  gameArgs,
}) {
  if (gameType === 1) {
    return (
      <>
        <h1>Hi, {player1NameInput}!</h1>
        <h1>Please make a selection to play:</h1>
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
      </>
    );
  } else if (gameType === 2) {
    return (
      <>
        <h1>Hi, {player1NameInput}!</h1>
        <h1>Please make a selection to play:</h1>
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
        <h1>Hi, {player2NameInput}!</h1>
        <h1>Please make a selection to play:</h1>
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
    );
  }
}
