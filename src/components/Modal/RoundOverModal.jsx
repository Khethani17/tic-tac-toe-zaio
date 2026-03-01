// src/components/Modal/RoundOverModal.jsx

import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { ModalContext } from "../../contexts/ModalContext";
import { ReactComponent as IconX } from "../../assets/svgs/IconX.svg";
import { ReactComponent as IconO } from "../../assets/svgs/IconO.svg";
import Button from "../Button/Button";
import { ModalTitle, WinnerRow, DrawText, ModalActions } from "./Modal.styled";

function RoundOverModal() {
  const { game, resetGame } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);

  const handlePlayAgain = () => {
    resetGame();
    handleModal(); // closes the modal
  };

  if (game.winner) {
    const winnerColor = game.winner === "x" ? "#e94560" : "#00d2ff";
    return (
      <>
        <ModalTitle>Takes the round!</ModalTitle>
        <WinnerRow $color={winnerColor}>
          {game.winner === "x" ? <IconX /> : <IconO />}
          <span>Wins!</span>
        </WinnerRow>
        <ModalActions>
          <Button onClick={handlePlayAgain} small>
            🔁 Next Round
          </Button>
        </ModalActions>
      </>
    );
  }

  return (
    <>
      <ModalTitle>Round Over</ModalTitle>
      <DrawText>It's a Draw!</DrawText>
      <ModalActions>
        <Button onClick={handlePlayAgain} small>
          🔁 Next Round
        </Button>
      </ModalActions>
    </>
  );
}

export default RoundOverModal;
