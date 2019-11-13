import moodReducer from './moodReducer';
import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/moodActions';
import { RESET } from '../actions/roundActions';
import { SET_STATE_TO_SAVED, SAVE_GAME } from '../actions/savedGameActions';

describe('mood reducer', () => {
  const moodState = {
    coffees: 0,
    snacks: 0,
    naps: 0,
    studies: 0,
  };

  it('deals with DRINK_COFFEE as expected', ()=> {
    expect(moodReducer(moodState, { type: DRINK_COFFEE })).toEqual({ ...moodState, coffees: 1 });
  });
  it('deals with EAT_SNACK as expected', ()=> {
    expect(moodReducer(moodState, { type: EAT_SNACK })).toEqual({ ...moodState, snacks: 1 });
  });
  it('deals with TAKE_NAP as expected', ()=> {
    expect(moodReducer(moodState, { type: TAKE_NAP })).toEqual({ ...moodState, naps: 1 });
  });
  it('deals with STUDY as expected', ()=> {
    expect(moodReducer(moodState, { type: STUDY })).toEqual({ ...moodState, studies: 1 });
  });
  it('deals with RESET as expected', ()=> {
    expect(moodReducer(moodState, { type: RESET })).toEqual({ ...moodState });
  });
  it('deals with SET_STATE_TO_SAVED as expected', ()=> {
    const payload = {
      coffees: 1,
      snacks: 2,
      naps: 1,
      studies: 2
    };
    expect(moodReducer(moodState, { type: SET_STATE_TO_SAVED, payload })).toEqual({ ...payload });
  });
  it('deals with SAVE_GAME as expected', ()=> {
    expect(moodReducer(moodState, { type: SAVE_GAME })).toEqual({ ...moodState });
  });
  it('deals with DEFAULT as expected', ()=> {
    expect(moodReducer(moodState, { type: 'Default' })).toEqual({ ...moodState });
  });
});
