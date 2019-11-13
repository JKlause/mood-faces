import roundReducer from './roundReducer';
import { START_GAME, DECREMENT, RESET } from '../actions/roundActions';
import { SET_STATE_TO_SAVED, SAVE_GAME } from '../actions/savedGameActions';

describe('round reducer', () => {
  const roundState = {
    start: false,
    count: 30,
  };

  it('deals with START_GAME as expected', ()=> {
    expect(roundReducer(roundState, { type: START_GAME })).toEqual({ ...roundState, start: true });
  });
  it('deals with DECREMENT as expected', ()=> {
    expect(roundReducer(roundState, { type: DECREMENT })).toEqual({ ...roundState, count: 29 });
  });
  it('deals with RESET as expected', ()=> {
    expect(roundReducer(roundState, { type: RESET })).toEqual({ ...roundState });
  });
  it('deals with SET_STATE_TO_SAVED as expected', ()=> {
    const payload = {
      start: true,
      count: 2,
    };
    expect(roundReducer(roundState, { type: SET_STATE_TO_SAVED, payload })).toEqual({ ...payload });
  });
  it('deals with SAVE_GAME as expected', ()=> {
    expect(roundReducer(roundState, { type: SAVE_GAME })).toEqual({ ...roundState });
  });
  it('deals with DEFAULT as expected', ()=> {
    expect(roundReducer(roundState, { type: 'Default' })).toEqual({ ...roundState });
  });
});
