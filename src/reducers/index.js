import { combineReducers } from 'redux';
import moodReducer from './moodReducer';
import roundReducer from './roundReducer';
import savedGamesReducer from './savedGameReducer';

const reducer = combineReducers({
  moodReducer,
  roundReducer,
  savedGamesReducer
});

export default reducer;
