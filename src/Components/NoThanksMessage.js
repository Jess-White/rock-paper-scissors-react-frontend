import React, { useState, useEffect } from "react";

export default function NoThanksMessage({ setDisplayArgs }) {
  return (
    <>
      <h1>Okay! Thanks all the same!</h1>
      <button
        onClick={() => setDisplayArgs({ display: "welcomeMessage", type: 0 })}
      >
        Click here to return to welcome screen
      </button>
    </>
  );
}
