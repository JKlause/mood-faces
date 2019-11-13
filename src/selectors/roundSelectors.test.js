import { getStart, getCount } from './roundSelectors';

describe('round selectors', () => {
  const state = {
    roundReducer: {
      start: true,
      count: 1,
    }
  };
  it('getStart gets start out of state', ()=> {
    expect(getStart(state)).toEqual(true);
  });
  it('getCount gets Count out of state', ()=> {
    expect(getCount(state)).toEqual(1);
  });
});
