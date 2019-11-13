export const START_GAME = 'START_GAME';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

export const startGame = () => ({
  type: START_GAME
});

export const decrementTimer = () => ({
  type: DECREMENT
});

export const resetGame = () => ({
  type: RESET
});
