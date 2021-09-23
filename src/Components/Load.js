import React from 'react';
import spinner from '../Gif/spn.gif'



const Load = () => {
    return (
        <div>
            <h1>Loading</h1>
            <img src={spinner} alt='Loader' />
        </div>
    );
}

export default Load;