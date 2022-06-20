import React, { useState, useEffect } from "react";

export default function GameTypePrompt({ setDisplayArgs }) {
  return (
    <>
      <h1>Awesome!</h1>
      <h1>
        Would you like to play a two-person game, or one person against the
        computer?
      </h1>
      <button
        onClick={() => {
          setDisplayArgs({ display: "playerNamePrompt", type: 2 });
        }}
      >
        Two-person game.
      </button>
      <button
        onClick={() => {
          setDisplayArgs({ display: "playerNamePrompt", type: 1 });
        }}
      >
        Play against the computer
      </button>
    </>
  );
}
