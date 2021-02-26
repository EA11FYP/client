import React, { useEffect, useState } from 'react';

import Body from './bodyComponent/Body';
import CommentSection from './commentComponent/Comment';

import './index.css';

const index = ({id}) => {
    
    const [ postDetails, setPostDetails ] = useState({});

    useEffect(async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/forum/one/${id}`,{
            method: 'get'
        });
        let res = await response.json();
        if(response.status === 200 && res)
            setPostDetails(res);
    }, []);
    
    return (
        <div>
            <Body title={postDetails.title}
            description={postDetails.description}
            domain={postDetails.domain}
            author={postDetails.author} />

            <CommentSection comments={postDetails.comments} />
        </div>
    );
};

export default index;