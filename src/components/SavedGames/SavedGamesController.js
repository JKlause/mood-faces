import React from 'react';
import PropTypes from 'prop-types';
import styles from '../controls/Controls.css';

export default function SavedGamesControl({ handleSave }) {
  return (
    <div className={styles.Controls}>
      <button onClick={handleSave}>Save Game</button>
    </div>
  );
}

SavedGamesControl.propTypes = {
  handleSave: PropTypes.func.isRequired
};
