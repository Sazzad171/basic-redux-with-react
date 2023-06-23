import React from 'react';
import { useDispatch } from 'react-redux';
import { resetCounter } from '../services/actions/counterAction';

const ResetButton = () => {
    const dispatch = useDispatch();

    const handleReset = () => {
        dispatch(resetCounter());
    }
  return (
    <div>
        <button onClick={handleReset}>Reset</button>
    </div>
  )
}

export default ResetButton;