import React from 'react';
import PropTypes from 'prop-types';
import styles from './controls/Controls.css';

const StartButton = ({ handleStart }) => {
  return (
    <section className={styles.Controls}>
      <button onClick={handleStart}>Click To Start</button>
    </section>
  );
};

StartButton.propTypes = {
  handleStart: PropTypes.func.isRequired
};

export default StartButton;
