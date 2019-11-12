const moodState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
};

function moodReducer(state = moodState, action) {
  switch(action.type) {
    case 'DRINK_COFFEE':
      return { ...state, coffees: state.coffees + 1 };
    case 'EAT_SNACK':
      return { ...state, snacks: state.snacks + 1 };
    case 'TAKE_NAP':
      return { ...state, naps: state.naps + 1 };
    case 'STUDY':
      return { ...state, studies: state.studies + 1 };
    default:
      return state;
  }
}

export default moodReducer;
