import { combineReducers } from 'redux';
import moodReducer from './moodReducer';
import roundReducer from './roundReducer';

const reducer = combineReducers({
  moodReducer,
  roundReducer
});

export default reducer;
