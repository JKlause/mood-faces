import { createStore, combineReducers } from 'redux';
import moodReducer from './reducers/moodReducer';
import roundReducer from './reducers/roundReducer';


const reducer = combineReducers({
  moodReducer,
  roundReducer
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
