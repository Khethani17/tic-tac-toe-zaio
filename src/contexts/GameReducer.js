export const initialState = {
  board: Array(9).fill(null),
  isXNext: true,
  winner: null,
  isDraw: false,
  scores: { x: 0, o: 0, draws: 0 },
};

export function gameReducer(state, action) {
  switch (action.type) {
    case "MAKE_MOVE":
      const { index } = action.payload;
      if (state.board[index] || state.winner) return state;

      const newBoard = [...state.board];
      newBoard[index] = state.isXNext ? "X" : "O";

      const winner = calculateWinner(newBoard);
      const isDraw = !winner && newBoard.every((cell) => cell !== null);

      return {
        ...state,
        board: newBoard,
        isXNext: !state.isXNext,
        winner,
        isDraw,
        // Update scores if game ends
        scores: winner
          ? {
              ...state.scores,
              [winner.toLowerCase()]: state.scores[winner.toLowerCase()] + 1,
            }
          : isDraw
            ? { ...state.scores, draws: state.scores.draws + 1 }
            : state.scores,
      };

    case "RESET_GAME":
      return {
        ...initialState,
        scores: state.scores, // Keep the scoreboard across rounds!
      };

    default:
      return state;
  }
}

// Helper function to find the winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // Rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // Cols
    [0, 4, 8],
    [2, 4, 6], // Diagonals
  ];
  for (let [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
