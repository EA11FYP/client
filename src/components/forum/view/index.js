import React, { useEffect, useState } from 'react';

import Body from './bodyComponent/Body';
import CommentSection from './commentComponent/Comment';

import './index.css';

const index = ({id}) => {
    
    const [ postDetails, setPostDetails ] = useState({});

    useEffect( () => {
        fetchPost();
    }, []);

    let fetchPost = async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/forum/one/${id}`,{
            method: 'get'
        });
        let res = await response.json();
        if(response.status === 200 && res)
            setPostDetails(res);
    }
    
    return (
        <div>
            <a href="/forum/home" style={{padding: 25}}><strong>Back</strong></a>
            <Body title={postDetails.title}
            description={postDetails.description}
            domain={postDetails.domain}
            author={postDetails.author}
            date={postDetails.date} />

            <CommentSection comments={postDetails.comments} id={id} fetchPost={fetchPost} />
        </div>
    );
};

export default index;