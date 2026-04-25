import React, { createContext, useReducer, useCallback } from "react";

// ---- Initial State ----
const initialState = {
  board: Array(9).fill(null),
  turn: "x",
  winner: null,
  winningCombination: null,
  isDraw: false,
  roundComplete: false,
  scores: { x: 0, o: 0, draws: 0 },
  moveHistory: [],
  gameMode: "pvp", // "pvp" or "pvc"
  aiDifficulty: "easy", // "easy" or "hard"
};

// ---- Action Types ----
const UPDATE_BOARD = "UPDATE_BOARD";
const RESET_GAME = "RESET_GAME";
const UNDO_MOVE = "UNDO_MOVE";
const SET_GAME_MODE = "SET_GAME_MODE";
const SET_AI_DIFFICULTY = "SET_AI_DIFFICULTY";

// ---- Helper Logic ----
const WINNING_COMBINATIONS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Cols
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

const checkWinner = (board) => {
  for (const combo of WINNING_COMBINATIONS) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], combination: combo };
    }
  }
  return null;
};

// ---- Reducer ----
function gameReducer(state, action) {
  switch (action.type) {
    case UPDATE_BOARD: {
      const { index } = action.payload;

      // Prevent move if cell filled or game over
      if (state.board[index] || state.roundComplete) return state;

      // 1. Update Board
      const newBoard = [...state.board];
      newBoard[index] = state.turn;

      // 2. Check for Winner/Draw
      const winResult = checkWinner(newBoard);
      const isDraw = !winResult && newBoard.every((cell) => cell !== null);
      const isFinished = winResult || isDraw;

      // 3. Update Scores
      const newScores = { ...state.scores };
      if (winResult) newScores[winResult.winner.toLowerCase()] += 1;
      if (isDraw) newScores.draws += 1;

      // 4. Save History (for Undo)
      const newHistory = [
        ...state.moveHistory,
        { board: state.board, turn: state.turn },
      ];

      return {
        ...state,
        board: newBoard,
        turn: state.turn === "x" ? "o" : "x",
        moveHistory: newHistory,
        roundComplete: !!isFinished,
        winner: winResult ? winResult.winner : null,
        winningCombination: winResult ? winResult.combination : null,
        isDraw: isDraw,
        scores: newScores,
      };
    }

    case RESET_GAME: {
      return {
        ...initialState,
        scores: state.scores, // Persist scoreboard
        gameMode: state.gameMode,
        aiDifficulty: state.aiDifficulty,
      };
    }

    case UNDO_MOVE: {
      if (state.moveHistory.length === 0 || state.roundComplete) return state;

      // In PvC mode, we undo 2 steps so the human doesn't get stuck on the AI's turn
      const isPvC = state.gameMode === "pvc";
      const steps = isPvC && state.moveHistory.length >= 2 ? 2 : 1;

      const targetIndex = state.moveHistory.length - steps;
      const restorePoint = state.moveHistory[targetIndex];
      const newHistory = state.moveHistory.slice(0, targetIndex);

      return {
        ...state,
        board: restorePoint.board,
        turn: restorePoint.turn,
        moveHistory: newHistory,
        winner: null,
        winningCombination: null,
        isDraw: false,
        roundComplete: false,
      };
    }

    case SET_GAME_MODE: {
      return {
        ...initialState,
        scores: state.scores,
        gameMode: action.payload,
      };
    }

    case SET_AI_DIFFICULTY: {
      return {
        ...initialState,
        scores: state.scores,
        aiDifficulty: action.payload,
      };
    }

    default:
      return state;
  }
}

// ---- Context & Provider ----
export const GameContext = createContext();

export function GameContextProvider({ children }) {
  const [game, dispatch] = useReducer(gameReducer, initialState);

  const updateBoard = useCallback((index) => {
    dispatch({ type: UPDATE_BOARD, payload: { index } });
  }, []);

  const resetGame = useCallback(() => {
    dispatch({ type: RESET_GAME });
  }, []);

  const undoMove = useCallback(() => {
    dispatch({ type: UNDO_MOVE });
  }, []);

  const setGameMode = useCallback((mode) => {
    dispatch({ type: SET_GAME_MODE, payload: mode });
  }, []);

  const setAiDifficulty = useCallback((diff) => {
    dispatch({ type: SET_AI_DIFFICULTY, payload: diff });
  }, []);

  return (
    <GameContext.Provider
      value={{
        game,
        updateBoard,
        resetGame,
        undoMove,
        setGameMode,
        setAiDifficulty,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
