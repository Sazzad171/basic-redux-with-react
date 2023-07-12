import React from 'react';

// react redux
import { useSelector } from 'react-redux';

const ShowResult = () => {

    // get state
    const count = useSelector((state) => state.counter.count);

  return (
    <div>
        <h1>Count value: { count.times }</h1>
        <h4>Clicked Event: { count.event }</h4>
    </div>
  )
}

export default ShowResult;