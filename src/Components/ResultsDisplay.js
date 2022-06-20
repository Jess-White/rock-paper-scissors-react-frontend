import React, { useState, useEffect } from "react";

export default function ResultsDisplay({
  setDisplayArgs,
  result,
  player1NameInput,
  player2NameInput,
}) {
  const message = (() => {
    if (result === "player1") {
      return `Congratulations, ${player1NameInput}! You have won the game!`;
    } else if (result === "player2") {
      return `Congratulations, ${player2NameInput}! You have won the game!`;
    } else if (result === "draw") {
      return `It's a draw!`;
    }
  })();
  return (
    <>
      <h1>{message}</h1>
      <h1>Would you like to play again?</h1>
      <button
        onClick={() => setDisplayArgs({ display: "gameTypePrompt", type: 0 })}
      >
        Sure!
      </button>
      <button
        onClick={() => setDisplayArgs({ display: "noThanksMessage", type: 0 })}
      >
        Nah.
      </button>
    </>
  );
}
