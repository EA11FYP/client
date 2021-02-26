import React from 'react';

import './Comment.css';

const Comment = ({comments=[]}) => {
    let username;
    return (
        <div className="forumView-comments">
            <p className="forumView-comments-title">Comments</p>
            {/* for loop */}
            {
                comments.map(comment =>{
                    username = comment.author? comment.author.username : "";
                    return (
                        <React.Fragment>
                            <div className="forumView-comments-layout" key={comment._id}>
                                <p className="forumView-comments-layout-name">{username}</p>
                                <p className="forumView-comments-layout-body">{comment.body}</p>
                            </div>
                        </React.Fragment>
                    )
                })
            }
                
            {/* new com */}
        </div>
    );
};

export default Comment;