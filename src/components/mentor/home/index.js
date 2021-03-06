import React,{ useState, useEffect } from 'react';

import MentorComponent from '../mentorComponent/MentorComponent';
import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';
import {withRouter} from 'react-router-dom';

import './index.css';

const index = ({auth, userType, history}) => {

    let [ mentorList, setMentorList ] = useState([]);
    // let [ requestList, setRequestList ] = useState([]);
    // let [ filterDecline, setFilterDecline ] = useState([]);
    // let [ tempList, setTempList ] = useState([]);
    // let [ finalList, setFinalList ] = useState([]);

    let fetchMentors = async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/mentor/`,{
            method:'get'
        });

        let res = await response.json();
        if(res.success){
            setMentorList(res.info);
        }
    }

    useState(() => {
        if(userType === 'mentor'){
            history.push('/');
        }
    },[]);

    // let fetchRequests = async() => {
    //     let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/mentee/requests/all/${auth._id}`,{
    //         method: 'get'
    //     });

    //     let res = await response.json();
    //     if(res.success){
    //         setRequestList(res.info);
    //     }
    // }


    useEffect(() => {
        fetchMentors();
        // fetchRequests();
    }, []);

    // useEffect(() =>{
    //     setFilterDecline(requestList.filter(item => item.status !== "DECLINE"));
    // },[requestList]);

    // useEffect(() => {
    //     // mentorList.filter(mentor => (
    //         //     filterDecline.map(item => item.to !== mentor._id)
    //         // ))
    //     setTempList(
    //         filterDecline.map(item => (
    //             mentorList.filter(mentor => mentor._id !== item.to)
    //         ))
    //     )
        
    // },[filterDecline,mentorList]);

    // useEffect(() => {
    //     setFinalList(tempList[0])
    // }, [tempList]);

    // console.log(requestList, "req");
    // console.log(filterDecline,'decline')
    // console.log(tempList,"temp")
    console.log(mentorList,"final")
    return (
        <div className="mentorList">
           <p className="mentorList-title">ALL Mentors</p>
           {   
                <div className="row mentorList-row">
                {
                    mentorList.map(mentor => (
                        <div className="col-lg-6" style={{textAlign:"center"}}>
                            <MentorComponent 
                            key={mentor._id}
                            mentorName={mentor.name} 
                            mentorId={mentor._id} 
                            domain={mentor.domain}
                            experience={mentor.experience}
                            linkedin={mentor.linkedin} />
                        </div>
                    ))
                }
                </div>
           }
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)(withRouter(index));