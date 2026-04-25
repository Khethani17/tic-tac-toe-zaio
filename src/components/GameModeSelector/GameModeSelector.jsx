// src/components/GameModeSelector/GameModeSelector.jsx

import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import {
  SelectorWrapper,
  ModeButton,
  DifficultyWrapper,
  DifficultyButton,
  SelectorLabel,
} from "./GameModeSelector.styled";

function GameModeSelector() {
  const { game, setGameMode, setAiDifficulty } = useContext(GameContext);

  return (
    <SelectorWrapper>
      <SelectorLabel>Game Mode</SelectorLabel>

      <div style={{ display: "flex", gap: "8px" }}>
        <ModeButton
          $isActive={game.gameMode === "pvp"}
          onClick={() => setGameMode("pvp")}
        >
          👥 PvP
        </ModeButton>

        <ModeButton
          $isActive={game.gameMode === "pvc"}
          onClick={() => setGameMode("pvc")}
        >
          🤖 vs AI
        </ModeButton>
      </div>

      {game.gameMode === "pvc" && (
        <DifficultyWrapper>
          <DifficultyButton
            $isActive={game.aiDifficulty === "easy"}
            onClick={() => setAiDifficulty("easy")}
          >
            😊 Easy
          </DifficultyButton>
          <DifficultyButton
            $isActive={game.aiDifficulty === "hard"}
            onClick={() => setAiDifficulty("hard")}
          >
            🧠 Hard
          </DifficultyButton>
        </DifficultyWrapper>
      )}
    </SelectorWrapper>
  );
}

export default GameModeSelector;
