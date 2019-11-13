import { SAVE_GAME, SET_STATE_TO_SAVED, saveGame, setStateToSaved } from './savedGameActions';

describe('saved game actions ', () => {
  it('SAVE_GAME returns exepcted', () => {
    expect(SAVE_GAME).toEqual('SAVE_GAME');
  });
  it('SET_STATE_TO_SAVED returns exepcted', () => {
    expect(SET_STATE_TO_SAVED).toEqual('SET_STATE_TO_SAVED');
  });
  it('saveGame returns exepcted', () => {
    expect(saveGame({})).toEqual({ type: 'SAVE_GAME', payload: {} });
  });
  it('setStateToSaved returns exepcted', () => {
    expect(setStateToSaved({})).toEqual({ type: 'SET_STATE_TO_SAVED', payload: {} });
  });
});
