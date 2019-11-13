import { SAVE_GAME } from '../actions/savedGameActions';


function savedGamesReducer(state = [], action) {
  switch(action.type) {
    case SAVE_GAME:
      return [...state, action.payload];
    default:
      return state;
  }
}

export default savedGamesReducer;
