import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';
import StartButton from '../components/startButton';
import moodHelperFunc from './moodHelperFunc';


const Moods = ({ state, handleSelection, handleStart, handleTimeout }) => {

  const { controlActions, face } = moodHelperFunc(state);

  if(state.start) {
    setTimeout(()=> {
      handleTimeout();
    }, 20000);
  }

  if(!state.start) return <StartButton handleStart={handleStart} />;

  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection}/>
      <Face emoji={face} />
    </>
  );
};




Moods.propTypes = {
  state: PropTypes.shape({
    coffees: PropTypes.number.isRequired,
    snacks: PropTypes.number.isRequired,
    naps: PropTypes.number.isRequired,
    studies: PropTypes.number.isRequired,
    start: PropTypes.bool.isRequired
  }),
  handleSelection: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleTimeout: PropTypes.func.isRequired,
};

const mapStateToProps = ({ moodReducer, roundReducer }) => ({
  state: {
    coffees: moodReducer.coffees,
    snacks: moodReducer.snacks,
    naps: moodReducer.naps,
    studies: moodReducer.studies,
    start: roundReducer.start
  }
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({ type: name });
  },
  handleStart() {
    dispatch({ type: 'START_GAME' });
  },
  handleTimeout() {
    dispatch({ type: 'TIMEOUT' });
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
