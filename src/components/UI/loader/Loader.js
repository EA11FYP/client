import React from 'react';

import './Loader.css';

const Loader = ({dark=true}) => {
    let darkName = dark ? `lds-dark` : null;
    return (
        <div className={`lds-ring ${darkName}`}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;