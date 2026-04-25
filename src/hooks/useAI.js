import { useContext, useEffect, useRef } from "react";

import { GameContext } from "../contexts/GameContext";
import { ModalContext } from "../contexts/ModalContext";
import { SfxContext } from "../contexts/SfxContext";

import {
  checkForWinner,
  checkForDraw,
  getComputerMove,
  getSmartComputerMove,
} from "../utils/GameUtils";

import RoundOverModal from "../components/Modal/RoundOverModal";

const useAI = () => {
  const { game, updateBoard, roundComplete } = useContext(GameContext);
  const { handleModal } = useContext(ModalContext);
  const { clickSfx, completedSfx } = useContext(SfxContext);

  const aiTimeoutRef = useRef(null);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (game.gameMode !== "pvc" || game.turn !== "o" || game.roundComplete) {
      return;
    }

    aiTimeoutRef.current = setTimeout(() => {
      const moveIndex =
        game.aiDifficulty === "hard"
          ? getSmartComputerMove([...game.board], "o")
          : getComputerMove(game.board);

      if (moveIndex === null) return;

      clickSfx();
      updateBoard(moveIndex);

      const simulatedBoard = [...game.board];
      simulatedBoard[moveIndex] = "o";

      const result = checkForWinner(simulatedBoard);

      if (result) {
        completedSfx();
        roundComplete("o", result);
        handleModal(<RoundOverModal />);
        return;
      }

      if (checkForDraw(simulatedBoard)) {
        completedSfx();
        roundComplete(null);
        handleModal(<RoundOverModal />);
      }
    }, 500);

    return () => {
      if (aiTimeoutRef.current) {
        clearTimeout(aiTimeoutRef.current);
      }
    };
  }, [
    game.turn,
    game.gameMode,
    game.roundComplete,
    game.board,
    game.aiDifficulty,
  ]);

  const isAiThinking =
    game.gameMode === "pvc" && game.turn === "o" && !game.roundComplete;

  return { isAiThinking };
};

export default useAI;