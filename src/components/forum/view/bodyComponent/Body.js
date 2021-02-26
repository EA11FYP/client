import React from 'react';

import './Body.css';

const Body = ({title, description, domain, author}) => {

    let username = author ? author.username:null;

    return (
        <div className="forumView-body">
           <p className="forumView-body-title">{title}</p>
           <p className="forumView-body-description">{description}</p>
           <p className="forumView-body-author">{`created by ${username}`}</p>
        </div>
    );
};

export default Body;