import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/moodActions';
import { RESET } from '../actions/roundActions';
import { SET_STATE_TO_SAVED, SAVE_GAME } from '../actions/savedGameActions';

const moodState = {
  coffees: 0,
  snacks: 0,
  naps: 0,
  studies: 0,
};

function moodReducer(state = moodState, action) {
  switch(action.type) {
    case DRINK_COFFEE:
      return { ...state, coffees: state.coffees + 1 };
    case EAT_SNACK:
      return { ...state, snacks: state.snacks + 1 };
    case TAKE_NAP:
      return { ...state, naps: state.naps + 1 };
    case STUDY:
      return { ...state, studies: state.studies + 1 };
    case RESET:
      return {        
        coffees: 0,
        snacks: 0,
        naps: 0,
        studies: 0
      };
    case SAVE_GAME:
      return {        
        coffees: 0,
        snacks: 0,
        naps: 0,
        studies: 0
      };
    case SET_STATE_TO_SAVED:
      return { 
        coffees: action.payload.coffees,
        snacks: action.payload.snacks,
        naps: action.payload.naps,
        studies: action.payload.studies
      };
    default:
      return state;
  }
}

export default moodReducer;
