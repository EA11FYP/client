import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import { withRouter } from 'react-router-dom';

import ButtonSolid from '../../UI/button/solid/index';

import './index.css';

const index = ({auth, userType, LoginUser, history}) => {
    let [ title, setTitle ] = useState('');
    let [ domain, setDomain ] = useState('');
    let [ ctc, setCtc ] = useState();
    let [ type, setType ] = useState('');
    let [ location, setLocation ] = useState('');
    let [ body, setBody ] = useState('');

    useEffect(() => {
        if(userType !== 'mentee'){
            history.push('/');
        }
    },[]);

    let placementPostHandler = async event => {
        event.preventDefault();
        let placementPostBody = JSON.stringify({
            authorId: auth._id,
            authorName: auth.name,
            userType:userType,
            title,
            body,
            domain,
            ctc,
            location,
            type
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/placement/new`,{
            method: 'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:placementPostBody
        });

        let res = await response.json();
        console.log(res)
        if(res.success){
            LoginUser(res.userInfo);
            setTitle('');
            setBody('');
            setDomain('');
            setCtc();
            setLocation('');
            setType('');
            history.push(`/placement/view/${res.postInfo._id}`);
        }
    }

    return (
        <div className="placementNew">
            <p className="placementNew-title">NEW JOB OPENING</p>
            <div className="placementNew-form">
                <form onSubmit={placementPostHandler}>
                    <label className="placementNew-form-label">Title:</label> <br/>
                    <input className="placementNew-form-input"
                    type="text" 
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    required/>
                    
                    <br />

                    <label className="placementNew-form-label">Domain:</label> <br/>
                    <input className="placementNew-form-input"
                    type="text" 
                    value={domain}
                    onChange={e => setDomain(e.target.value)}
                    required/>
                    
                    <br />
                    
                    <label className="placementNew-form-label">CTC:</label> <br/>
                    <input className="placementNew-form-input"
                    type="number" 
                    value={ctc}
                    onChange={e => setCtc(e.target.value)}
                    required/>
                    
                    <br />

                    <label className="placementNew-form-label">Mode:</label> <br/>
                    <input className="placementNew-form-input"
                    type="text" 
                    value={type}
                    placeholder="Full-time/Internship"
                    onChange={e => setType(e.target.value)}
                    required/>
                    
                    <br />

                    <label className="placementNew-form-label">Location:</label> <br/>
                    <input className="placementNew-form-input"
                    type="text" 
                    value={location}
                    onChange={e => setLocation(e.target.value)}
                    required/>
                    
                    <br />
    
                    <label className="placementNew-form-label">Body</label> <br/>
                    <textarea className="placementNew-form-input"
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