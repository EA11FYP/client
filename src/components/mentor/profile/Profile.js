import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

import ButtonSolid from '../../UI/button/solid/index';

import './Profile.css';

const Profile = ({auth, userType, mentorId}) => {

    let [ mentorDetails, setMentorDetails ] = useState({});
    let [ disableBtn, setDisableBtn ] = useState(false);
    let [requestMessage, setRequestMessage ] = useState('');
    let [ btnMsg, setBtnMsg ] = useState('Send');

    // let requestMessage = "request";
    let requestHandler = async() => {
        setDisableBtn(true);
        setBtnMsg('Sent')
        let body = JSON.stringify({
            menteeId: auth._id,
            mentorId,
            requestMessage,
            menteeName: auth.name,
            mentorName: mentorDetails.name
        })
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/request`,{
            method:'post',
            body,
            headers:{
                'Content-Type':'application/json'
            }
        })

        let res = await response.json();
        console.log(res);
    }


    let fetchMentorDetails = async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/mentor/${mentorId}`,{
            method: 'get'
        });

        let res = await response.json();
        if(res.success){
            setMentorDetails(res.info);
        }
        
    }

    useEffect(() => {
        fetchMentorDetails();
    },[]);

    return (
        <div className="mentorProfile">
            <p className="mentorProfile-name">{mentorDetails.name}</p>
            <div className="mentorProfile-layout">
                <table className="mentorProfile-table">
                    <tr>
                        <td>
                           <b> Name:</b> 
                        </td>
                        <td>
                            {mentorDetails.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b> Age: </b>
                        </td>
                        <td>
                            {mentorDetails.age} years
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Email: </b>
                        </td>
                        <td>
                            {mentorDetails.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Domain:</b> 
                        </td>
                        <td>
                            {mentorDetails.domain}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Experience:</b> 
                        </td>
                        <td>
                            {mentorDetails.experience} years
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Linkedin: </b>
                        </td>
                        <td>
                            <a className="mentorProfile-link" href={mentorDetails.linkedin}>{mentorDetails.linkedin}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b> Bio: </b>
                        </td>
                        <td>
                            {mentorDetails.bio}
                        </td>
                    </tr>
                </table>
            </div>
         {auth && userType === 'mentee' &&
            <div style={{textAlign:"center",marginTop:15}}> 
                <textarea className="mentorProfile-textarea"
                rows={5}
                placeholder="Write a message"
                value={requestMessage}
                onChange={e => setRequestMessage(e.target.value)}>
                    {requestMessage}
                </textarea>

                <ButtonSolid type="submit" 
                clicked={requestHandler}
                disabled={disableBtn}
                style={{background: "#289450",
                width:100, 
                height: 45, 
                fontSize: 18}} > 
                    {btnMsg}
                </ButtonSolid>
            </div>
        }
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)((Profile));