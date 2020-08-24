import React from 'react';

import './index.css';

const index = (props) => {
    return (
        <div>
            <button id="light" onClick={props.clicked} style={{ ...props.style}}>{props.children} </button>
        </div>
    );
};

export default index;