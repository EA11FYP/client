import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions';

import ButtonSolid from '../../../UI/button/solid/index';

import './Comment.css';

const Comment = ({comments=[], id, auth, userType, fetchPost,LoginUser}) => {

    let [ comment, setComment ] = useState('');

    let cookieValue = document.cookie.replace(/(?:(?:^|.*;\s*)username\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    let commentSubmitHandler = async event => {
        event.preventDefault();
        console.log(userType, "hi")

        let data = JSON.stringify({
            body: comment,
            authorId: auth._id,
            authorName: auth.name,
            userType: userType
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/forum/${id}/comment/new`,{
                method: 'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body: data
            }
        );

        let res = await response.json();
        if(res.success){
            setComment('');
            LoginUser(res.userInfo);
            fetchPost();
        } else {
            console.error(res.message);
        }
    }

    let username;
    return (
        <div className="forumView-comments">
            <p className="forumView-comments-title">Comments</p>
            {/* for loop */}
            {
                comments.map(comment =>{
                    username = comment.author? comment.author.username : "";
                    return (
                        <React.Fragment key={comment._id}>
                            <div className="forumView-comments-layout" >
                                <p className="forumView-comments-layout-name">{username}</p>
                                <p className="forumView-comments-layout-body">{comment.body}</p>
                            </div>
                        </React.Fragment>
                    )
                })
            }
                
            {/* new com */}
            <div className="forumView-comments-layout">
                <form onSubmit={commentSubmitHandler}>
                    <textarea className="forumView-comments-input"
                    rows="4"
                    placeholder="New Comment"
                    onChange={e => setComment(e.target.value)}
                    required
                    value={comment}>
                        {comment}
                    </textarea> <br/>
    
                    <div style={{textAlign:"center", marginTop:15}}>
                        <ButtonSolid type="submit" 
                        style={{background: "#289450",
                        width:100, 
                        height: 45, 
                        fontSize: 18}} > 
                            Submit
                        </ButtonSolid>
                    </div>
                </form>
            </div>
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)(Comment);