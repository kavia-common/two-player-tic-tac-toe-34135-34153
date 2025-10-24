# Retro Tic Tac Toe (React)

A simple two-player Tic Tac Toe game with a retro-inspired aesthetic.

## Features

- 3x3 grid where two players (X and O) alternate turns
- Status text indicating Turn, Winner, or Draw
- New Game button to reset state
- Light theme with accents:
  - Primary: `#3b82f6`
  - Success: `#06b6d4`
  - Secondary: `#64748b`
- Subtle CRT-style scanlines and noise for a retro vibe
- Runs on port 3000 using Create React App

## Getting Started

From the `frontend` directory:

```bash
npm install
npm start
```

Visit http://localhost:3000.

## How to Play

- Player X starts.
- Click any empty square to place your mark.
- The app detects a winner via straight-line checks, or a draw when the board is full.

## Structure

- `src/App.js` — App shell, game state, status, and controls
- `src/components/Board.jsx` — 3x3 grid rendering
- `src/components/Square.jsx` — Individual clickable cells
- `src/styles/theme.css` — Theme tokens and retro styles
- `src/index.css` — Global base styles

## Notes

- No external services or environment variables required.
- This project uses vanilla React and CSS only (no UI libraries).
