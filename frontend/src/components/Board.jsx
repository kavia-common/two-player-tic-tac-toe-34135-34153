import React from 'react';
import Square from './Square';

/**
 * PUBLIC_INTERFACE
 * Board renders a 3x3 grid of squares.
 * Props:
 * - squares: Array(9) with 'X'|'O'|null
 * - onSquareClick: function(index: number) -> void
 */
function Board({ squares, onSquareClick }) {
  return (
    <div className="board" role="grid" aria-label="Tic Tac Toe Board">
      {squares.map((val, idx) => (
        <Square
          key={idx}
          value={val}
          onClick={() => onSquareClick(idx)}
          ariaLabel={`Square ${idx + 1}`}
        />
      ))}
    </div>
  );
}

export default Board;
