import { DRINK_COFFEE, EAT_SNACK, TAKE_NAP, STUDY } from '../actions/moodActions';

function moodHelperFunc(state) {
  const actions = [
    { name: DRINK_COFFEE, text: 'Drink Coffee', stateName: 'coffees' },
    { name: EAT_SNACK, text: 'Snack', stateName: 'snacks' },
    { name: TAKE_NAP, text: 'Nap', stateName: 'naps' },
    { name: STUDY, text: 'Study', stateName: 'studies' },
  ];
  const isTired = state => state.coffees < 1 && state.naps < 1;
  const isHyper = state => state.coffees > 3;
  const isEducated = state => state.studies > 2;
  const isHungry = state => state.snacks < 1;
  const getFace = state => {
    if(isTired(state) && isHungry(state))
      return '🤬';
    if(isHyper(state) && isHungry(state))
      return '🤮';
    if(isTired(state))
      return '😴';
    if(isHyper(state))
      return '🙀';
    if(isEducated(state))
      return '🤯';
    if(isHungry(state))
      return '😡';
    return '😀';
  };
  const face = getFace(state);
  const controlActions = actions.map(action => ({
    ...action,
    count: state[action.stateName]
  }));
  return { controlActions, face };
}


export default moodHelperFunc;
