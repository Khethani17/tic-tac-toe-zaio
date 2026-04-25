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