import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

import './Profile.css';

const Profile = ({auth, userType, menteeId}) => {

    let [ menteeDetails, setMenteeDetails ] = useState({});
    let [ mentorList, setMentorList ] = useState([]);

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

    useEffect(() => {
        setMentorList(menteeDetails.mentors);
    },[menteeDetails]);

    console.log(menteeDetails.mentors)

    return (
        <div className="menteeProfile">
            <p className="menteeProfile-name">{menteeDetails.name}</p>
            <div className="menteeProfile-layout">
                <table className="menteeProfile-table">
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
                            <a className="menteeProfile-link" href={menteeDetails.website}>{menteeDetails.website}</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <b>Linkedin: </b>
                        </td>
                        <td>
                            <a className="menteeProfile-link" href={menteeDetails.linkedin}>{menteeDetails.linkedin}</a>
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
            <p className="menteeProfile-mentorList-title">Mentors</p>
            <div className="menteeProfile-mentorList">
                <div className="row">
                    {   mentorList &&
                        mentorList.map(item => (
                            <React.Fragment>
                                <div className="menteeProfile-mentorList-layout col-lg-3">
                                    <p><b>Name: </b>{item.name}</p>
                                    <p><b>Domain: </b>{item.domain}</p>
                                  { 
                                    <React.Fragment>
                                       <a href={`tel:${item.phone}`}>Call</a>
                                       <a href={`mailto:${item.email}`} style={{marginLeft:5}}>Email</a> <br/>
                                    </React.Fragment> 
                                  }
                                    <a href={`/mentor/view-profile/${item._id}`}>View Profile</a>
                                </div>
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)((Profile));