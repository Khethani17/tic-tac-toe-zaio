// src/pages/Game/Game.jsx
import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import GameCell from "../../components/GameCell/GameCell";
import Player from "../../components/Player/Player";
import Button from "../../components/Button/Button";
import Modal from "../../components/Modal/Modal";
import GameModeSelector from "../../components/GameModeSelector/GameModeSelector";
import useAI from "../../hooks/useAI";
import {
  GameWrapper,
  BoardGrid,
  ScoreSection,
  ControlsRow,
} from "./Game.styled";

function Game() {
  const { game, resetGame, undoMove } = useContext(GameContext);
  const { isAiThinking } = useAI();

  // This function formats the result text for the UI
  const getStatusMessage = () => {
    if (game.roundComplete) {
      if (game.winner) {
        return `Winner: ${game.winner.toUpperCase()}`;
      }
      if (game.isDraw) {
        return "It's a Draw!";
      }
    }
    return `Next Player: ${game.turn.toUpperCase()}`;
  };

  return (
    <GameWrapper>
      {/* 1. Game Mode & Difficulty Selectors */}
      <GameModeSelector />

      {/* 2. Scoreboard */}
      <ScoreSection>
        <Player
          label={game.gameMode === "pvc" ? "X (You)" : "X (P1)"}
          score={game.scores.x}
          color="#e94560"
          isActive={game.turn === "x" && !game.roundComplete}
        />
        <Player
          label="Draws"
          score={game.scores.draws}
          color="#f5a623"
          isActive={false}
        />
        <Player
          label={game.gameMode === "pvc" ? "O (AI)" : "O (P2)"}
          score={game.scores.o}
          color="#00d2ff"
          isActive={game.turn === "o" && !game.roundComplete}
        />
      </ScoreSection>

      {/* 3. Results / Status Area */}
      <h2
        style={{
          textAlign: "center",
          color: "#fff",
          margin: "1.5rem 0",
          height: "2rem",
        }}
      >
        {isAiThinking ? "🤖 AI is thinking..." : getStatusMessage()}
      </h2>

      {/* 4. Game Board */}
      <BoardGrid>
        {game.board.map((cell, index) => (
          <GameCell
            key={index}
            cellItem={cell}
            index={index}
            disabled={isAiThinking || game.roundComplete}
          />
        ))}
      </BoardGrid>

      {/* 5. Footer Controls */}
      <ControlsRow>
        <Button onClick={resetGame} small>
          🔁 Restart
        </Button>
        <Button
          onClick={undoMove}
          small
          variant="secondary"
          disabled={
            game.moveHistory.length === 0 || isAiThinking || game.roundComplete
          }
        >
          ⏪ Undo
        </Button>
      </ControlsRow>

      <Modal />
    </GameWrapper>
  );
}

export default Game;
