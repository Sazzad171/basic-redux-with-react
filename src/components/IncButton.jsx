import React from 'react';
import { useDispatch } from 'react-redux';
import { incCounter } from '../services/actions/counterAction';

const IncButton = () => {
    const dispatch = useDispatch();

    const handleInc = () => {
        dispatch(incCounter());
    }
  return (
    <div>
        <button onClick={ handleInc }>Increment</button>
    </div>
  )
}

export default IncButton;