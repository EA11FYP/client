import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

import ButtonSolid from '../../UI/button/solid';

import './Request.css';

const Request = ({auth}) => {
    let [ requestList, setRequestList ] = useState([]);
    let [ holdRequest, setHoldRequest ] = useState([]);
    let [ acceptedRequest, setAcceptedRequest ] = useState([]);
    let [ declinedRequest, setDeclinedRequest] = useState([]);


    let fetchRequests = async() => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/mentor/requests/all/${auth._id}`,{
            method: 'get'
        });

        let res = await response.json();
        if(res.success){
            setRequestList(res.info);
        }
    }

    useEffect(() => {
        setHoldRequest(requestList.filter(item => item.status==='HOLD'))
        setAcceptedRequest(requestList.filter(item => item.status==='ACCEPT'))
        setDeclinedRequest(requestList.filter(item => item.status==='DECLINE'))
    }, [requestList])

    useEffect(() => {
        fetchRequests();
    }, []);

    let acceptRequestHandler = async (requestId, menteeId) => {
        let body = JSON.stringify({
            requestId,
            menteeId,
            mentorId:auth._id,
            status: 'ACCEPT'
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/request/action`,{
            method:'post',
            body,
            headers:{
                'Content-Type':'application/json'
            }
        })

        let res = await response.json();
        if(res.success){
            fetchRequests();
        }
    }

    let declineRequestHandler = async(requestId, menteeId) => {
        let body = JSON.stringify({
            requestId,
            menteeId,
            mentorId:auth._id,
            status: 'DECLINE'
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/request/action`,{
            method:'post',
            body,
            headers:{
                'Content-Type':'application/json'
            }
        })

        let res = await response.json();
        if(res.success){
            fetchRequests();
        }
    }

    // console.log(holdRequest, "hold");
    // console.log(acceptedRequest, "accept");
    // console.log(declinedRequest,"decline");
    return (
        <div className="request">
            <div className="request-layout">
                <p className="request-title">Requests Pending</p>
                {
                    holdRequest.map(item => (
                        <React.Fragment>
                            <p>You have a mentorship request from {item.menteeName}</p>
                            <ButtonSolid clicked={() => acceptRequestHandler(item._id,item.from)}
                            style={{height: 35,width:80}}>
                                Accept
                            </ButtonSolid>
                            <ButtonSolid clicked={() => declineRequestHandler(item._id,item.from)}
                            style={{height: 35,width:80, backgroundColor:"#e62020", marginLeft:10}}>
                                Decline
                            </ButtonSolid>
                            <p></p>
                            <p className="request-message">
                                {item.requestMessage}<br/>
                                <a href={`/mentee/view-profile/${item.from}`}>View Profile</a>
                            </p>
                            <hr/>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className="request-layout">
                <p className="request-title">Confirmed Mentorship Requests</p>
                {
                    acceptedRequest.map(item => (
                        <React.Fragment>
                            <p>You have accepted mentorship request from {item.menteeName} on {item.date}</p>
                        </React.Fragment>
                    ))
                }
            </div>
            <div className="request-layout">
                <p className="request-title">Declined Mentorship Requests</p>
                {
                    declinedRequest.map(item => (
                        <React.Fragment>
                            <p>You have declined mentorship request from {item.menteeName} on {item.date}</p>
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
};


function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)((Request));