// src/utils/GameUtils/index.js

/**
 * Checks if three board values form a matching sequence.
 */
const checkForSequence = (option1, option2, option3) => {
  if (option1 === null || option2 === null || option3 === null) return false;
  return option1 === option2 && option2 === option3;
};

/**
 * Checks the board for a winner.
 * @returns {Array|null} Winning indices [a, b, c] or null
 */
export const checkForWinner = (board) => {
  for (let i = 0; i < 9; i += 3) {
    if (checkForSequence(board[i], board[i + 1], board[i + 2]))
      return [i, i + 1, i + 2];
  }
  for (let i = 0; i < 3; i += 1) {
    if (checkForSequence(board[i], board[i + 3], board[i + 6]))
      return [i, i + 3, i + 6];
  }
  if (checkForSequence(board[0], board[4], board[8])) return [0, 4, 8];
  if (checkForSequence(board[2], board[4], board[6])) return [2, 4, 6];
  return null;
};

/**
 * Checks if the board is completely filled (draw condition).
 */
export const checkForDraw = (board) => {
  return board.every((cell) => cell !== null);
};

/**
 * Gets indices of all empty cells on the board.
 */
export const getEmptyCells = (board) => {
  return board.reduce((acc, cell, index) => {
    if (cell === null) acc.push(index);
    return acc;
  }, []);
};

/**
 * Easy AI: picks a random empty cell.
 */
export const getComputerMove = (board) => {
  const emptyCells = getEmptyCells(board);
  if (emptyCells.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * emptyCells.length);
  return emptyCells[randomIndex];
};

// =====================
// NEW: Minimax AI (Hard)
// =====================

/**
 * Minimax algorithm — evaluates the best possible outcome.
 * @param {Array} board - Current board state
 * @param {number} depth - Current recursion depth
 * @param {boolean} isMaximizing - Is the AI maximizing?
 * @param {string} aiPlayer - AI's mark ("o")
 * @param {string} humanPlayer - Human's mark ("x")
 * @returns {number} Score for the board position
 */
function minimax(board, depth, isMaximizing, aiPlayer, humanPlayer) {
  const winnerCombo = checkForWinner(board);

  if (winnerCombo) {
    const winnerMark = board[winnerCombo[0]];
    return winnerMark === aiPlayer ? 10 - depth : depth - 10;
  }

  if (checkForDraw(board)) return 0;

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = aiPlayer;
        const score = minimax(board, depth + 1, false, aiPlayer, humanPlayer);
        board[i] = null;
        bestScore = Math.max(score, bestScore);
      }
    }
    return bestScore;
  } else {
    let bestScore = Infinity;
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        board[i] = humanPlayer;
        const score = minimax(board, depth + 1, true, aiPlayer, humanPlayer);
        board[i] = null;
        bestScore = Math.min(score, bestScore);
      }
    }
    return bestScore;
  }
}

/**
 * Hard AI: uses minimax to find the optimal move (unbeatable).
 * @param {Array} board - Current board state
 * @param {string} aiPlayer - AI's mark (default "o")
 * @returns {number|null} Best move index or null
 */
export const getSmartComputerMove = (board, aiPlayer = "o") => {
  const humanPlayer = aiPlayer === "o" ? "x" : "o";
  let bestScore = -Infinity;
  let bestMove = null;

  for (let i = 0; i < 9; i++) {
    if (board[i] === null) {
      board[i] = aiPlayer;
      const score = minimax(board, 0, false, aiPlayer, humanPlayer);
      board[i] = null;
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  return bestMove;
};
