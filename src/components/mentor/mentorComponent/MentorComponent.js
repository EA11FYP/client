import React, { useState } from 'react';

import ButtonSolid from '../../UI/button/solid/index';
import ButtonLight from '../../UI/button/light/index';

import './MentorComponent.css';

const MentorComponent = ({mentorName, mentorId, menteeId, menteeName, domain, experience, linkedin}) => {

    let [ disableBtn, setDisableBtn ] = useState(false);
    let [ btnMsg, setBtnMsg ] = useState('Request');

    let requestMessage = "request";
    let requestHandler = async() => {
        setDisableBtn(true);
        setBtnMsg('Requested')
        let body = JSON.stringify({
            mentorId,
            menteeId,
            requestMessage,
            menteeName,
            mentorName
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

    return (
        <div className="mentorComponent">
            <p className="mentorComponent-title">{mentorName}</p>
            <p><b>Domain</b>: {domain}</p>
            <p><b>Experience</b>: {experience} years</p>
            <p><b>LinkedIn: </b><a href={linkedin} className="mentorComponent-linkedin">{linkedin}</a></p>

            <ButtonSolid type="submit" 
            clicked={requestHandler}
            disabled={disableBtn}
            style={{background: "#289450",
            width:100, 
            height: 45, 
            fontSize: 18}} > 
                {btnMsg}
            </ButtonSolid>
           <a hef="#">
                <ButtonLight 
                style={{
                width:135, 
                height: 45, 
                fontSize: 18,
                marginLeft:10}}>
                    <a href={`/mentor/view-profile/${mentorId}`}>View Profile</a>
                </ButtonLight>
           </a>
        </div>
    );
};

export default MentorComponent;