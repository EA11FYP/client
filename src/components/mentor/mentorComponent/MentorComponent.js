import React, { useState } from 'react';

import ButtonSolid from '../../UI/button/solid/index';

import './MentorComponent.css';

const MentorComponent = ({mentorName, mentorId, menteeId, menteeName}) => {
    let requestMessage = "request";
    let requestHandler = async() => {
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
            <ButtonSolid type="submit" 
            clicked={requestHandler}
            style={{background: "#289450",
            width:100, 
            height: 45, 
            fontSize: 18}} > 
                Request  
            </ButtonSolid>
        </div>
    );
};

export default MentorComponent;