const { START_GAME, DECREMENT, RESET, startGame, decrementTimer, resetGame } = require('./roundActions');

describe('round actions ', () => {
  it('START_GAME returns exepcted', () => {
    expect(START_GAME).toEqual('START_GAME');
  });
  it('DECREMENT returns exepcted', () => {
    expect(DECREMENT).toEqual('DECREMENT');
  });
  it('RESET returns exepcted', () => {
    expect(RESET).toEqual('RESET');
  });
  it('startGame returns exepcted', () => {
    expect(startGame()).toEqual({ type: 'START_GAME' });
  });
  it('decrementTimer returns exepcted', () => {
    expect(decrementTimer()).toEqual({ type: 'DECREMENT' });
  });
  it('resetGame returns exepcted', () => {
    expect(resetGame()).toEqual({ type: 'RESET' });
  });
});
