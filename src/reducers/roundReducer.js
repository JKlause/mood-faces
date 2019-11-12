
const roundState = {
  start: false,
  count: 30
};

function roundReducer(state = roundState, action) {
  switch(action.type) {
    case 'START_GAME':
      return { ...state, start: true };
    case 'DECREMENT':
      return { ...state, count: state.count - 1 };
    case 'TIMEOUT':
      return {
        coffees: 0,
        snacks: 0,
        naps: 0,
        studies: 0,
        start: false,
        count: 30
      };
    default:
      return state;
  }
}

export default roundReducer;
