import React from 'react';
import { connect } from 'react-redux';
import Controls from '../components/controls/Controls';
import Face from '../components/face/Face';
import PropTypes from 'prop-types';
import StartButton from '../components/startButton';


const Moods = ({ state, handleSelection, handleStart }) => {
console.log(state)
  const actions = [
    { name: 'DRINK_COFFEE', text: 'Drink Coffee', stateName: 'coffees' },
    { name: 'EAT_SNACK', text: 'Snack', stateName: 'snacks' },
    { name: 'TAKE_NAP', text: 'Nap', stateName: 'naps' },
    { name: 'STUDY', text: 'Study', stateName: 'studies' },
  ];

  const isTired = state => state.coffees < 1 && state.naps < 1;
  const isHyper = state => state.coffees > 3;
  const isEducated = state => state.studies > 2;
  const isHungry = state => state.snacks < 1;

  const getFace = state => {
    if(isTired(state) && isHungry(state)) return '🤬';
    if(isHyper(state) && isHungry(state)) return '🤮';
    if(isTired(state)) return '😴';
    if(isHyper(state)) return '🙀';
    if(isEducated(state)) return '🤯';
    if(isHungry(state)) return '😡';

    return '😀';
  };

  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));

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
  handleStart: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  state: {
    coffees: state.coffees,
    snacks: state.snacks,
    naps: state.naps,
    studies: state.studies,
    start: state.start
  }
});

const mapDispatchToProps = dispatch => ({
  handleSelection(name) {
    dispatch({ type: name });
  },
  handleStart() {
    dispatch({ type: 'START_GAME' });
  }
});

const MoodsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Moods);

export default MoodsContainer;
