import { getSavedGamesArray } from './SavedGamesSelectors';

describe('saved games selectors', () => {
  const state = {
    savedGamesReducer: []
  };
  it('getStart gets start out of state', ()=> {
    expect(getSavedGamesArray(state)).toEqual([]);
  });
});
