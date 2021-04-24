import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/index';

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


    console.log(holdRequest, "hold");
    console.log(acceptedRequest, "accept");
    console.log(declinedRequest,"decline");
    return (
        <div>
            
        </div>
    );
};


function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)((Request));