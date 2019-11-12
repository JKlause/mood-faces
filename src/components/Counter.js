import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const Counter = ({ count, handleDecrement }) => {
  
  useEffect(()=> {
    const unSubscribe = setTimeout(() => {
      handleDecrement();
    }, 1000);
    return () => clearTimeout(unSubscribe);
  }, [count]);

  return (
    <h2>{count}</h2>
  );
};

Counter.propTypes = {
  count: PropTypes.number.isRequired,
  handleDecrement: PropTypes.func.isRequired
};

export default Counter;
