import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import { withRouter } from 'react-router-dom';

import ButtonSolid from '../../UI/button/solid/index';

import './New.css';

const New = ({auth, userType, LoginUser, history}) => {

    let [ title, setTitle ] = useState('');
    let [ domain, setDomain ] = useState('');
    let [ description, setDescription ] = useState('');

    let forumPostHandler = async event => {
        event.preventDefault();
        let body = JSON.stringify({
            authorId: auth._id,
            authorName: auth.name,
            userType:userType,
            title,
            description,
            domain
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/forum/new`,{
            method: 'post',
            headers:{
                'Content-Type':'application/json'
            },
            body
        });

        let res = await response.json();
        if(res.success){
            LoginUser(res.userInfo);
            setTitle('');
            setDescription('');
            setDomain('');
            history.push('/forum/home');
        }
    }

    return (
        <div className="forumNew">
            <p className="forumNew-title">NEW DISCUSSION</p>
            <div className="forumNew-form">
                <form onSubmit={forumPostHandler}>
                    <label className="forumNew-form-label">Title:</label> <br/>
                    <input className="forumNew-form-input"
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required/>
                    
                    <br />

                    <label className="forumNew-form-label">Domain:</label> <br/>
                    <input className="forumNew-form-input"
                    type="text" 
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                    required/>
                    
                    <br />
    
                    <label className="forumNew-form-label">Description</label> <br/>
                    <textarea className="forumNew-form-input"
                    value={description}
                    required
                    rows={15}
                    onChange={e => setDescription(e.target.value)}>
                        {description}
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

export default connect(mapStateToProps,actions)(withRouter(New));