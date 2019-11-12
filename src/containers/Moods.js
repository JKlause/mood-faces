import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moodHelperFunc from './moodHelperFunc';
import { getCoffees, getSnacks, getNaps, getStudies } from '../selectors/moodSelectors';
import { sendSelection } from '../actions/moodActions';
import { startGame, decrementTimer, resetGame } from '../actions/roundActions';
import { getStart, getCount } from '../selectors/roundSelectors';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import StartButton from '../components/startButton';
import Counter from '../components/Counter/Counter';


const Moods = ({ state, handleSelection, handleStart, handleDecrement, handleTimeout, handleReset }) => {

  const { controlActions, face } = moodHelperFunc(state);

  if(state.count === 0) {
    handleTimeout();
  }

  if(!state.start) return <StartButton handleStart={handleStart} />;

  return (
    <>
      <Controls actions={controlActions} handleSelection={handleSelection} handleReset={handleReset}/>
      <Face emoji={face} />
      <Counter count={state.count} handleDecrement={handleDecrement}/>
    </>
  );
};


Moods.propTypes = {
  state: PropTypes.shape({
    coffees: PropTypes.number.isRequired,
    snacks: PropTypes.number.isRequired,
    naps: PropTypes.number.isRequired,
    studies: PropTypes.number.isRequired,
    start: PropTypes.bool.isRequired,
    count: PropTypes.number.isRequired
  }),
  handleSelection: PropTypes.func.isRequired,
  handleStart: PropTypes.func.isRequired,
  handleDecrement: PropTypes.func.isRequired,
  handleTimeout: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  state: {
    coffees: getCoffees(state),
    snacks: getSnacks(state),
    naps: getNaps(state),
    studies: getStudies(state),
    start: getStart(state),
    count: getCount(state)
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
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
