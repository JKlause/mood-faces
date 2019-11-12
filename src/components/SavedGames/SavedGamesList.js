import React from 'react';
import PropTypes from 'prop-types';
import SavedGameListItem from './SavedGamesListItem';
import SavedGamesControl from './SavedGamesController';

export default function SavedGamesList({ savedGames, setToSavedState, handleSave }) {
  const savedGamesElements = savedGames.map((savedGame, index) => (
    <li key={`${savedGame.displayFace}-${index}`}>
      <SavedGameListItem savedState={savedGame.savedState} displayFace={savedGame.displayFace} setToSavedState={setToSavedState}/>
    </li>
  ));

  return (
    <>
      <SavedGamesControl handleSave={handleSave} />
      <ul>
        {savedGamesElements}
      </ul>
    </>
  );
}
SavedGamesList.propTypes = {
  handleSave: PropTypes.func.isRequired,
  setToSavedState: PropTypes.func.isRequired,
  savedGames: PropTypes.arrayOf(PropTypes.shape({
    displayFace: PropTypes.string.isRequired,
    savedState: PropTypes.object.isRequired,
  })).isRequired
};
