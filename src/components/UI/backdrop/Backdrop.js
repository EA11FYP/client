import React from 'react';

import './Backdrop.css';

const Backdrop = (props) => {
    return (
        props.show ? <div id="backdrop" onClick={props.clicked}></div> : null
    );
};

export default Backdrop;