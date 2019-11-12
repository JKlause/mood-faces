import { START_GAME, DECREMENT, RESET } from '../actions/roundActions';
import { SET_STATE_TO_SAVED, SAVE_GAME } from '../actions/savedGameActions';

const roundState = {
  start: false,
  count: 30
};

function roundReducer(state = roundState, action) {
  switch(action.type) {
    case START_GAME:
      return { ...state, start: true };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return {
        start: false,
        count: 30
      };
    case SAVE_GAME:
      return { ...state, count: 30 };
    case SET_STATE_TO_SAVED:
      return {
        start: action.payload.start,
        count: action.payload.count
      };
    default:
      return state;
  }
}

export default roundReducer;
