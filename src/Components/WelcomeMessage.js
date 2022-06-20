import React, { useState, useEffect } from "react";

export default function WelcomeMessage({ setDisplayArgs }) {
  return (
    <>
      <h1>Hey there!</h1>
      <h1>
        This app is a simple rock paper scissors game. Would you like to play?
      </h1>
      <button
        onClick={() => {
          setDisplayArgs({ display: "gameTypePrompt", type: 0 });
        }}
      >
        Sure!
      </button>
      <button
        onClick={() => {
          setDisplayArgs({ display: "noThanksMessage", type: 0 });
        }}
      >
        No, thanks.
      </button>
    </>
  );
}
