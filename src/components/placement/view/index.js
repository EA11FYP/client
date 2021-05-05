import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/';
import { withRouter } from 'react-router-dom';

import Modal from '../../UI/modal/Modal';
import ButtonSolid from '../../UI/button/solid';
import Loader from '../../UI/loader/Loader';

import './index.css';

const index = ({id,auth,history}) => {

    let [ placementDetails, setPlacementDetails ] = useState({});
    let [ showBtn, setShowBtn ] = useState(false);
    let [ showModal, setShowModal ] = useState(false);
    let [ updatedTitle, setUpdatedTitle ] = useState(placementDetails.title);
    let [ updatedBody, setUpdatedBody ] = useState(placementDetails.description);
    let [ updatedDomain, setUpdatedDomain ] = useState(placementDetails.domain);
    let [ updatedCtc, setUpdatedCtc ] = useState(placementDetails.ctc);
    let [ isLoading, setIsLoading ] = useState(false);
    let [ message, setMessage ] = useState();
    // let [ updatedType, setUpdatedType ] = useState(placementDetails.type);
    // let [ updatedLocation, setUpdatedLocation ] = useState(placementDetails.location);

    useEffect( () => {
        fetchPlacement();
    }, []);

    useEffect(() => {
        setUpdatedBody(placementDetails.body);
        setUpdatedDomain(placementDetails.domain);
        setUpdatedTitle(placementDetails.title);
        setUpdatedCtc(placementDetails.ctc);
        // setUpdatedType(placementDetails.type);
        // setUpdatedLocation(placementDetails.location);
    },[placementDetails.description,placementDetails.domain,placementDetails.title,placementDetails.ctc]);

    let fetchPlacement = async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/placement/one/${id}`,{
            method: 'get'
        });
        let res = await response.json();
        if(response.status === 200 && res)
            setPlacementDetails(res);
    }

    let username = placementDetails.author ? placementDetails.author.username:null;
    let ids = placementDetails.author? placementDetails.author.id:"123";

    useEffect(() => {
        if(ids === auth._id) 
        setShowBtn(true)
    else
        setShowBtn(false);
     console.log(ids,auth._id)
    },[ids]);

    let editPostHandler = async event =>{
        event.preventDefault();

        let body = JSON.stringify({
            title: updatedTitle,
            description: updatedBody,
            domain: updatedDomain,
            ctc:updatedCtc
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/placement/edit/${id}`,{
            method: "post",
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let res = await response.json();
        if(res.success){
            fetchPlacement();
            setShowModal(false);
        }
    }

    let deletePostHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/placement/delete/${id}`,{
            method:"delete"
        });

        let res = await response.json();
        setIsLoading(false);
        setMessage(res.message);
        if(res.success){
            history.push('/placement/home');
        }
    }

    let btnContent = isLoading? <Loader />: "Delete";

    let modalContent = (
        <React.Fragment>
            <div className="forumView-edit">
                <form onSubmit={editPostHandler}>
                    <label className="forumView-edit-label">Title</label> <br/>
                    <input className="forumView-edit-input"
                    required
                    value={updatedTitle}
                    onChange={(e) => setUpdatedTitle(e.target.value)} /> <br/>

                    <label className="forumView-edit-label">Domain</label> <br/>
                    <input className="forumView-edit-input"
                    required
                    value={updatedDomain}
                    onChange={(e) => setUpdatedDomain(e.target.value)} /> <br/>

                    <label className="forumView-edit-label">CTC</label> <br/>
                    <input className="forumView-edit-input"
                    required
                    type="number"
                    value={updatedCtc}
                    onChange={(e) => setUpdatedCtc(e.target.value)} /> <br/>
{/* 
                    <label className="forumView-edit-label">Type</label> <br/>
                    <input className="forumView-edit-input"
                    required
                    value={updatedType}
                    onChange={(e) => setUpdatedType(e.target.value)} /> <br/>

                    <label className="forumView-edit-label">Location</label> <br/>
                    <input className="forumView-edit-input"
                    required
                    value={updatedLocation}
                    onChange={(e) => setUpdatedLocation(e.target.value)} /> <br/> */}

                    <label className="forumView-edit-label">Description</label> <br/>
                    <textarea className="forumView-edit-textarea"
                    required
                    value={updatedBody}
                    cols="15"
                    onChange={(e) => setUpdatedBody(e.target.value)}>
                        {updatedBody}
                    </textarea> <br/>

                    <ButtonSolid type="submit" 
                        style={{background: "#289450",
                        width:100, 
                        height: 45, 
                        fontSize: 18}} > 
                            {btnContent}
                    </ButtonSolid>
                    <p className="apiMessage">{message}</p>
                </form>
            </div>
        </React.Fragment>
    )

    // console.log(placementDetails,"placementDetails")
    return (
        <div>
            <a href="/placement/home" style={{padding: 25}}><strong>Back</strong></a>
            <div className="placementView-body">
                <p className="placementView-body-title">{placementDetails.title}</p>
                <p className="placementView-body-domain">{placementDetails.domain}</p>
                <p className="placementView-body-domain"><b>CTC</b>: INR {placementDetails.ctc}</p>
                <p className="placementView-body-domain">{placementDetails.type}</p>
                <p className="placementView-body-domain">{placementDetails.location}</p>
                <p className="placementView-body-description">{placementDetails.body}</p>
                <p className="placementView-body-author">{`created by ${username}`}</p>
                <p className="placementView-body-author"><strong>{placementDetails.date}</strong></p>
            </div>
            {
               showBtn && (
                <div style={{textAlign:"center"}}>
                    <ButtonSolid style={{background: "#4857B0",
                        width:65, 
                        height: 35, 
                        fontSize: 14}}
                        clicked={() => setShowModal(true)}>  
                            Edit
                    </ButtonSolid>
                    <ButtonSolid style={{background: "#cc0606",
                        width:65, 
                        height: 35, 
                        fontSize: 14,
                        marginLeft:10}}
                        clicked={deletePostHandler} > 
                            Delete
                    </ButtonSolid>
                </div>
               )
           }
            <Modal title="Edit Blog"
            show={showModal}
            modalClosed={() => setShowModal(false) } >
               {modalContent}
           </Modal>
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)(withRouter(index));