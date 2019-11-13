import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import style from './Moods.css';

import moodHelperFunc from './moodHelperFunc';
import { sendSelection } from '../actions/moodActions';
import { startGame, decrementTimer, resetGame } from '../actions/roundActions';
import { saveGame, setStateToSaved } from '../actions/savedGameActions';
import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/moodSelectors';
import { getStart, getCount } from '../selectors/roundSelectors';
import { getSavedGamesArray } from '../selectors/SavedGamesSelectors';

import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import StartButton from '../components/startButton';
import Counter from '../components/Counter/Counter';
import SavedGamesList from '../components/SavedGames/SavedGamesList';


const Moods = ({ state, handleSelection, handleStart, handleDecrement, handleTimeout, handleReset, setToSavedState, handleSave }) => {

  const { controlActions, face, saveObj } = moodHelperFunc(state);
  if(state.count === 0) {
    handleTimeout();
  }

  if(!state.start) return <StartButton handleStart={handleStart} />;

  return (
    <div className={style.Moods}>
      <div>
        <SavedGamesList savedGames={state.savedGamesArray} setToSavedState={setToSavedState} handleSave={()=>handleSave(saveObj)}/>
      </div>
      <div>
        <Controls actions={controlActions} handleSelection={handleSelection} handleReset={handleReset}/>
        <Face emoji={face} />
        <Counter count={state.count} handleDecrement={handleDecrement}/>
      </div>
    </div>
  );
};


Moods.propTypes = {
  state: PropTypes.shape({
    coffees: PropTypes.number.isRequired,
    snacks: PropTypes.number.isRequired,
    naps: PropTypes.number.isRequired,
    studies: PropTypes.number.isRequired,
    start: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired,
    savedGamesArray: PropTypes.array.isRequired
  }),
  handleSelection: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleTimeout: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  setToSavedState: PropTypes.func.isRequired,
  handleSave: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  state: {
    coffees: getCoffees(state),
    snacks: getSnacks(state),
    naps: getNaps(state),
    studies: getStudies(state),
    start: getStart(state),
    count: getCount(state),
    savedGamesArray: getSavedGamesArray(state)
  }
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch(sendSelection(name));
  },
  handleStart() {
    dispatch(startGame());
  },
  handleDecrement() {
    dispatch(decrementTimer());
  },
  handleTimeout() {
    dispatch(resetGame());
  },
  handleReset() {
    dispatch(resetGame());
  },
  handleSave(savedObj) {
    dispatch(saveGame(savedObj));
  },
  setToSavedState(savedState) {
    dispatch(setStateToSaved(savedState));
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
