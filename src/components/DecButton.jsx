import React from 'react';
import { useDispatch } from 'react-redux';
import { decCounter } from '../services/actions/counterAction';

const DecButton = () => {
    const dispatch = useDispatch();

    const handleDec = () => {
        dispatch(decCounter());
    }
  return (
    <div>
        <button onClick={ handleDec }>Decrement</button>
    </div>
  )
}

export default DecButton;