import React,{ useState, useEffect } from 'react';

import MentorComponent from '../mentorComponent/MentorComponent';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

import './index.css';

const index = ({auth}) => {

    let [ mentorList, setMentorList ] = useState([]);

    let fetchMentors = async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/mentor/`,{
            method:'get'
        });

        let res = await response.json();
        if(res.success){
            setMentorList(res.info);
        }
    }

    useEffect(() => {
        fetchMentors();
    }, []);

    // console.log(mentorList)
    return (
        <div>
           <p>ALL Mentors</p>
            <div style={{textAlign:"center"}}>
                {
                    mentorList.map(mentor => (
                        <MentorComponent mentorName={mentor.name} mentorId={mentor._id} menteeId={auth._id} menteeName={auth.name} />
                    ))
                }
            </div>
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)((index));