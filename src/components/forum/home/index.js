// api call, import single forum components and use loop to display multiple forum threads
import React from 'react';
import Component from './forumComponent/Component';

const index = () => {
    return (
        <div>
            <Component />
            <Component />
            <Component />
        </div>
    );
};

export default index;