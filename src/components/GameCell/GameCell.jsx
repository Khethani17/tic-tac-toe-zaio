import React, { useContext } from "react";
import { GameContext } from "../../contexts/GameContext";
import { SfxContext } from "../../contexts/SfxContext";
import { CellStyle } from "./GameCell.styled";

import { ReactComponent as IconX } from "../../assets/svgs/IconX.svg";
import { ReactComponent as XIconOutline } from "../../assets/svgs/XIconOutline.svg";
import { ReactComponent as IconO } from "../../assets/svgs/IconO.svg";
import { ReactComponent as OIconOutline } from "../../assets/svgs/OIconOutline.svg";

function GameCell({ cellItem, index }) {
  // We remove roundComplete from here because it's a boolean in our state, not a function.
  const { updateBoard, game } = useContext(GameContext);
  const { clickSfx } = useContext(SfxContext);

  const cellClickHandler = () => {
    // 1. Prevent click if cell is filled, game is over, or it's the AI's turn
    if (cellItem !== null || game.roundComplete) return;
    if (game.gameMode === "pvc" && game.turn === "o") return;

    // 2. Play sound and update board
    // The Reducer will now automatically check for winner/draw and update scores!
    clickSfx();
    updateBoard(index);
  };

  // Check if this specific cell is part of the winning line to highlight it
  const isWinning =
    game.winningCombination && game.winningCombination.includes(index);

  // Logic for hover effects and pointer cursor
  const isClickable =
    cellItem === null &&
    !game.roundComplete &&
    !(game.gameMode === "pvc" && game.turn === "o");

  // Render marked X
  if (cellItem === "x") {
    return (
      <CellStyle $isWinning={isWinning} $disabled>
        <IconX className="markedItem" />
      </CellStyle>
    );
  }

  // Render marked O
  if (cellItem === "o") {
    return (
      <CellStyle $isWinning={isWinning} $disabled>
        <IconO className="markedItem" />
      </CellStyle>
    );
  }

  // Render empty cell with hover outline
  return (
    <CellStyle onClick={cellClickHandler} $disabled={!isClickable}>
      {isClickable &&
        (game.turn === "x" ? (
          <XIconOutline className="outlineIcon" />
        ) : (
          <OIconOutline className="outlineIcon" />
        ))}
    </CellStyle>
  );
}

export default GameCell;
