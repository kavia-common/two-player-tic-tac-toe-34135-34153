import React, { useState, useMemo } from 'react';
import './App.css';
import './styles/theme.css';
import Board from './components/Board';

/**
 * PUBLIC_INTERFACE
 * App is the main entry for the Tic Tac Toe game.
 * It renders the status text, the 3x3 board, and game controls with a retro theme.
 */
function App() {
  // Game state: array of 9 squares, 'X' first
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  // Derived state: winner and draw detection
  const winner = useMemo(() => calculateWinner(squares), [squares]);
  const isDraw = useMemo(
    () => squares.every(Boolean) && !winner,
    [squares, winner]
  );

  // PUBLIC_INTERFACE
  const handleSquareClick = (index) => {
    /**
     * Handles a click on a square:
     * - Ignores clicks when the square is filled or the game is over.
     * - Sets 'X' or 'O' based on current turn.
     * - Toggles turn.
     */
    if (squares[index] || winner) return;
    const next = squares.slice();
    next[index] = xIsNext ? 'X' : 'O';
    setSquares(next);
    setXIsNext(!xIsNext);
  };

  // PUBLIC_INTERFACE
  const resetGame = () => {
    /** Resets the game state to start a new game. */
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  };

  const statusText = winner
    ? `Winner: ${winner}`
    : isDraw
    ? 'Draw'
    : `Turn: ${xIsNext ? 'X' : 'O'}`;

  return (
    <div className="retro-app">
      <div className="crt-frame">
        <header className="header">
          <h1 className="title">Tic Tac Toe</h1>
          <p className={`status ${winner ? 'status-win' : isDraw ? 'status-draw' : ''}`}>
            {statusText}
          </p>
        </header>

        <main className="game-area">
          <Board squares={squares} onSquareClick={handleSquareClick} />
        </main>

        <footer className="controls">
          <button className="btn btn-primary" onClick={resetGame} aria-label="Start a new game">
            ⟳ New Game
          </button>
        </footer>
      </div>
      <div className="scanlines" aria-hidden="true" />
      <div className="noise" aria-hidden="true" />
    </div>
  );
}

/**
 * PUBLIC_INTERFACE
 * calculateWinner checks all winning line combinations to determine a winner.
 * @param {Array<string|null>} sq - 9-length board array.
 * @returns {'X'|'O'|null} winner
 */
function calculateWinner(sq) {
  const lines = [
    [0, 1, 2], // rows
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6], // cols
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8], // diagonals
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (sq[a] && sq[a] === sq[b] && sq[a] === sq[c]) {
      return sq[a];
    }
  }
  return null;
}

export default App;
