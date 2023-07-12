import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllLayouts } from '../services/actions/layoutAction';

const ShowLayouts = () => {
    // get state
    const {
        layout,
        loading,
        error
    } = useSelector((state) => state);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllLayouts());
    }, []);

    return (
        <section>
            <h2>All layouts are here:</h2>
            {
                loading && <p>Loading...</p>
            }
            {
                error && <p>{ error }</p>
            }
            {
                layout && layout.map( (item, i) => (
                    <div key={i}>
                        <img src={ item.banner } alt="baner" width="80px" height="auto" />
                        <h4>{ item.title }</h4>
                    </div>
                ) )
            }
        </section>
    )
}

export default ShowLayouts;