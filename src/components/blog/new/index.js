import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import { withRouter } from 'react-router-dom';

import ButtonSolid from '../../UI/button/solid/index';

import './index.css';

const index = ({auth, userType, LoginUser, history}) => {
    let [ title, setTitle ] = useState('');
    let [ domain, setDomain ] = useState('');
    let [ body, setBody ] = useState('');

    let blogPostHandler = async event => {
        event.preventDefault();
        let blogBody = JSON.stringify({
            authorId: auth._id,
            authorName: auth.name,
            userType:userType,
            title,
            body,
            domain
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/blog/new`,{
            method: 'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:blogBody
        });

        let res = await response.json();
        console.log(res)
        if(res.success){
            LoginUser(res.userInfo);
            setTitle('');
            setBody('');
            setDomain('');
            history.push(`/blog/view/${res.postInfo._id}`);
        }
    }

    return (
        <div className="blogNew">
            <p className="blogNew-title">NEW BLOG</p>
            <div className="blogNew-form">
                <form onSubmit={blogPostHandler}>
                    <label className="blogNew-form-label">Title:</label> <br/>
                    <input className="blogNew-form-input"
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required/>
                    
                    <br />

                    <label className="blogNew-form-label">Domain:</label> <br/>
                    <input className="blogNew-form-input"
                    type="text" 
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                    required/>
                    
                    <br />
    
                    <label className="blogNew-form-label">Body</label> <br/>
                    <textarea className="blogNew-form-input"
                    value={body}
                    required
                    rows={15}
                    onChange={e => setBody(e.target.value)}>
                        {body}
                    </textarea>

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

export default connect(mapStateToProps,actions)(withRouter(index));