import React from 'react';

import ButtonLight from '../../UI/button/light/index';

import './MentorComponent.css';

const MentorComponent = ({mentorName, mentorId, domain, experience, linkedin}) => {


    return (
        <div className="mentorComponent">
            <p className="mentorComponent-title">{mentorName}</p>
            <p><b>Domain</b>: {domain}</p>
            <p><b>Experience</b>: {experience} years</p>
            <p><b>LinkedIn: </b><a href={linkedin} className="mentorComponent-linkedin">{linkedin}</a></p>

           <a hef="#">
                <ButtonLight 
                style={{
                width:135, 
                height: 45, 
                fontSize: 18,
               }}>
                    <a href={`/mentor/view-profile/${mentorId}`}>View Profile</a>
                </ButtonLight>
           </a>
        </div>
    );
};

export default MentorComponent;