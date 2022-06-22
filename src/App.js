import "./App.css";
import React, { useState, useEffect } from "react";
import WelcomeMessage from "./Components/WelcomeMessage";
import PlayerNamePrompt from "./Components/PlayerNamePrompt";
import GameTypePrompt from "./Components/GameTypePrompt";
import GamePlayPrompt from "./Components/GamePlayPrompt";
import ResultsDisplay from "./Components/ResultsDisplay";
import NoThanksMessage from "./Components/NoThanksMessage";
import { useQuery, useMutation, useQueryClient } from "react-query";
import * as PlayerService from "./Services/PlayerService";

function App() {
  const [displayArgs, setDisplayArgs] = useState({
    display: "welcomeMessage",
    type: 0,
  });
  const [gameType, setGameType] = useState(0);
  const [player1NameInput, setPlayer1NameInput] = useState("");
  const [player2NameInput, setPlayer2NameInput] = useState("");
  const [gameArgs, setGameArgs] = useState({ player1: null, player2: null });
  const [result, setResult] = useState("");
  const queryClient = useQueryClient();
  const [playersSaved, setPlayersSaved] = useState(0);

  useEffect(() => {
    if (gameType === 1) {
      setPlayersSaved(2);
    }
  });

  const ROCK_PAPER_SCISSORS = ["rock", "paper", "scissors"];

  const clearAll = () => {
    if (
      displayArgs.display === "welcomeMessage" ||
      displayArgs.display === "gameTypePrompt"
    ) {
      setGameType(0);
      setPlayer1NameInput("");
      setPlayer2NameInput("");
      setGameArgs({ player1: null, player2: null });
      setResult("");
      setPlayersSaved(0);
    }
  };

  useEffect(() => {
    clearAll();
  }, [displayArgs]);

  const { mutate: createPlayer } = useMutation(
    (playerFields) => PlayerService.createPlayer(playerFields),
    {
      onSuccess: () => {
        console.log("Player created!");
        queryClient.invalidateQueries();
        setPlayersSaved(playersSaved + 1);
      },
    }
  );

  const handleSubmitName = (newPlayerFields) => {
    createPlayer({
      player_name: newPlayerFields,
    });
    queryClient.invalidateQueries();
    refetch();
  };

  const handleStartGame = () => {
    setDisplayArgs({ display: "gamePlayPrompt", type: displayArgs.type });
  };

  const { data: players, refetch } = useQuery("getPlayers", () =>
    PlayerService.getPlayers()
  );

  const { mutate: updatePlayer } = useMutation(
    (playerId, playerFields) =>
      PlayerService.updatePlayer(playerId, playerFields),
    {
      onSuccess: () => {
        console.log("Player updated - wins added!");
      },
    }
  );

  useEffect(() => {
    refetch();
  }, [gameArgs]);

  const handleAddPlayerWins = (gameResult) => {
    queryClient.invalidateQueries();
    refetch();
    if (gameResult === "draw") {
      return;
    }
    const winningPlayerName =
      gameResult === "player1" ? player1NameInput : player2NameInput;
    const winningPlayer = players.find((player) => {
      return player.player_name === winningPlayerName;
    });
    return updatePlayer(winningPlayer.id, {
      player_name: winningPlayer.player_name,
      wins: winningPlayer.wins + 1,
    });
  };

  useEffect(() => {
    if (displayArgs.type === 1 && gameArgs.player1 && !gameArgs.player2) {
      const randomSelection =
        ROCK_PAPER_SCISSORS[(ROCK_PAPER_SCISSORS.length * Math.random()) | 0];
      setGameArgs({ ...gameArgs, player2: randomSelection });
    }
    if (gameArgs.player1 && gameArgs.player2) {
      playGame(gameArgs);
    }
  }, [gameArgs, gameArgs.player1, setGameArgs]);

  const determineWinner = ({ player1, player2 }) => {
    if (player1 === player2) {
      return "draw";
    } else if (
      (player1 === "paper" && player2 === "rock") ||
      (player1 === "rock" && player2 === "scissors") ||
      (player1 === "scissors" && player2 === "paper")
    ) {
      return "player1";
    } else {
      return "player2";
    }
  };

  const playGame = async (choices) => {
    const newResult = determineWinner(choices);
    await handleAddPlayerWins(newResult);
    setResult(newResult);
    setDisplayArgs({ display: "resultsDisplay", type: 0 });
  };

  const GameDisplay = () => {
    const { display, type } = displayArgs;
    if (display === "welcomeMessage") {
      return <WelcomeMessage setDisplayArgs={setDisplayArgs} />;
    } else if (displayArgs.display === "gameTypePrompt") {
      return <GameTypePrompt setDisplayArgs={setDisplayArgs} />;
    } else if (display === "playerNamePrompt") {
      return (
        <PlayerNamePrompt
          gameType={type}
          setPlayer1NameInput={setPlayer1NameInput}
          setPlayer2NameInput={setPlayer2NameInput}
          player1NameInput={player1NameInput}
          player2NameInput={player2NameInput}
          handleSubmitName={handleSubmitName}
          handleStartGame={handleStartGame}
          playersSaved={playersSaved}
        />
      );
    } else if (display === "gamePlayPrompt") {
      return (
        <GamePlayPrompt
          gameType={type}
          setGameArgs={setGameArgs}
          gameArgs={gameArgs}
          player1NameInput={player1NameInput}
          player2NameInput={player2NameInput}
        />
      );
    } else if (display === "resultsDisplay") {
      return (
        <ResultsDisplay
          setDisplayArgs={setDisplayArgs}
          result={result}
          player1NameInput={player1NameInput}
          player2NameInput={player2NameInput}
        />
      );
    } else if (display === "noThanksMessage") {
      return <NoThanksMessage setDisplayArgs={setDisplayArgs} />;
    }
  };

  return <div className="App">{GameDisplay()}</div>;
}

export default App;
