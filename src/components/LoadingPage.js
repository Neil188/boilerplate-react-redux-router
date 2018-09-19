import React from 'react';
import Icon from '../images/loader.gif';

const LoadingPage = () => (
    <div className='loader'>
        <img
            src={Icon} alt="Loading..."
            className='loader__image'
        />
    </div>
)

export default LoadingPage;
