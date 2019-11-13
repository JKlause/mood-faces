export const SAVE_GAME = 'SAVE_GAME';
export const SET_STATE_TO_SAVED = 'SET_STATE_TO_SAVED';

export const saveGame = savedObj => ({
  type: SAVE_GAME,
  payload: savedObj
});

export const setStateToSaved = savedState => ({
  type: SET_STATE_TO_SAVED,
  payload: savedState
});
