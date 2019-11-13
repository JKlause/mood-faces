import React from 'react';
import PropTypes from 'prop-types';

export default function SavedGameListItem({ displayFace, savedState, setToSavedState }) {
  return (
    <div onClick={() => setToSavedState(savedState)}>
      <p>{displayFace}</p>
    </div>
  );
}

SavedGameListItem.propTypes = {
  savedState: PropTypes.object.isRequired,
  displayFace: PropTypes.string.isRequired,
  setToSavedState: PropTypes.func.isRequired
};
