import React from 'react';

import './index.css';

const index = (props) => {
    return (
        <React.Fragment>
            <button id="light" onClick={props.clicked} style={{ ...props.style}}>{props.children} </button>
        </React.Fragment>
    );
};

export default index;