import React from 'react';

import './index.css';

const index = (props) => {
    return (
        <div>
            <button id="light" style={{ ...props.style}}>{props.children} </button>
        </div>
    );
};

export default index;