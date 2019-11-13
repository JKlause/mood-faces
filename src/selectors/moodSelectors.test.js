const { getCoffees, getSnacks, getNaps, getStudies } = require('./moodSelectors');

describe('mood selectors', () => {
  const state = {
    moodReducer: {
      coffees: 1,
      snacks: 1,
      naps: 1,
      studies: 1
    }
  };
  it('getCoffees gets coffee out of state', ()=> {
    expect(getCoffees(state)).toEqual(1);
  });
  it('getSnacks gets snacks out of state', ()=> {
    expect(getSnacks(state)).toEqual(1);
  });
  it('getNaps gets naps out of state', ()=> {
    expect(getNaps(state)).toEqual(1);
  });
  it('getStudies gets studies out of state', ()=> {
    expect(getStudies(state)).toEqual(1);
  });
});
