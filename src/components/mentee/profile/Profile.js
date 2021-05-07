import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

import './Profile.css';

const Profile = ({auth, userType, menteeId}) => {

    let [ menteeDetails, setMenteeDetails ] = useState({});

    let fetchmenteeDetails = async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/mentee/${menteeId}`,{
            method: 'get'
        });

        let res = await response.json();
        if(res.success){
            setMenteeDetails(res.info);
        }
        
    }

    useEffect(() => {
        fetchmenteeDetails();
    },[]);


    return (
        <div className="mentorProfile">
            <p className="mentorProfile-name">{menteeDetails.name}</p>
            <div className="mentorProfile-layout">
                <table className="mentorProfile-table">
                    <tr>
                        <td>
                           <b> Name:</b> 
                        </td>
                        <td>
                            {menteeDetails.name}
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b> CEO: </b>
                        </td>
                        <td>
                            {menteeDetails.ceo}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Location: </b>
                        </td>
                        <td>
                            {menteeDetails.location}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Domain:</b> 
                        </td>
                        <td>
                            {menteeDetails.domain}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Website:</b> 
                        </td>
                        <td>
                            <a className="mentorProfile-link" href={menteeDetails.website}>{menteeDetails.website}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Linkedin: </b>
                        </td>
                        <td>
                            <a className="mentorProfile-link" href={menteeDetails.linkedin}>{menteeDetails.linkedin}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Founders:</b> 
                        </td>
                        <td>
                            {menteeDetails.founders}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Email:</b> 
                        </td>
                        <td>
                            {menteeDetails.email}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Phone:</b> 
                        </td>
                        <td>
                            {menteeDetails.phone}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Funding($):</b> 
                        </td>
                        <td>
                            {menteeDetails.funding}
                        </td>
                    </tr>
                    <tr>
                        <td>
                           <b> Bio: </b>
                        </td>
                        <td>
                            {menteeDetails.bio}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)((Profile));