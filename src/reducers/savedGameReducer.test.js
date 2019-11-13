import savedGamesReducer from './savedGameReducer';
import { SAVE_GAME } from '../actions/savedGameActions';

describe('saved games reducer', () => {

  it('deals with START_GAME as expected', ()=> {
    const payload = {
      payload: 'yay'
    };
    expect(savedGamesReducer(undefined, { type: SAVE_GAME, payload })).toEqual([payload]);
  });
});
