import React from 'react';

/**
 * PUBLIC_INTERFACE
 * Square renders a single cell in the Tic Tac Toe board.
 * Props:
 * - value: 'X'|'O'|null
 * - onClick: () => void
 * - ariaLabel: string
 */
function Square({ value, onClick, ariaLabel }) {
  return (
    <button
      className={`square ${value === 'X' ? 'mark-x' : value === 'O' ? 'mark-o' : ''}`}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      <span className="glyph">{value || ''}</span>
    </button>
  );
}

export default Square;
