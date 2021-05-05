import React, {useState,useEffect} from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions';
import { withRouter } from 'react-router-dom';

import Modal from '../../../UI/modal/Modal';
import ButtonSolid from '../../../UI/button/solid/index';
import Loader from '../../../UI/loader/Loader';

import './Body.css';

const Body = ({title, description, domain, author, date, auth, postId, history, fetchPost}) => {

    let [ showBtn, setShowBtn ] = useState(false);
    let [ showModal, setShowModal ] = useState(false);
    let [ updatedTitle, setUpdatedTitle ] = useState(title);
    let [ updatedDescription, setUpdatedDescription ] = useState(description);
    let [ updatedDomain, setUpdatedDomain ] = useState(domain);
    let [ isLoading, setIsLoading ] = useState(false);
    let [ message, setMessage ] = useState();

    let username = author ? author.username:null;
    let ids = author? author.id:"123";


    useEffect(() => {
        if(auth && ids === auth._id) 
            setShowBtn(true)
        else
        setShowBtn(false);
    //  console.log(ids,auth._id)
    },[ids]);

    useEffect(() => {
        setUpdatedDescription(description);
        setUpdatedDomain(domain);
        setUpdatedTitle(title);
    },[description,domain,title]);
    
    let deletePostHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/forum/delete/${postId}`,{
            method:"delete"
        });

        let res = await response.json();
        setIsLoading(false);
        setMessage(res.message);
        if(res.success){
            history.push('/forum/home');
        }
    }

    let editPostHandler = async event =>{
        event.preventDefault();

        let body = JSON.stringify({
            title: updatedTitle,
            description: updatedDescription,
            domain: updatedDomain
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/forum/edit/${postId}`,{
            method: "post",
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let res = await response.json();
        if(res.success){
            fetchPost();
            setShowModal(false);
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

                    <label className="forumView-edit-label">Description</label> <br/>
                    <textarea className="forumView-edit-textarea"
                    required
                    value={updatedDescription}
                    cols="15"
                    onChange={(e) => setUpdatedDescription(e.target.value)}>
                        {updatedDescription}
                    </textarea> <br/>

                    <ButtonSolid type="submit" 
                        style={{background: "#289450",
                        width:100, 
                        height: 45, 
                        fontSize: 18}} > 
                            Submit
                    </ButtonSolid>
                </form>
            </div>
        </React.Fragment>
    )

    return (
        <div className="forumView-body">
           <p className="forumView-body-title">{title}</p>
           <p className="forumView-body-domain">{domain}</p>
           <p className="forumView-body-description">{description}</p>
           <p className="forumView-body-author">{`created by ${username}`}</p>
           <p className="forumView-body-author"><strong>{date}</strong></p>
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
                            {btnContent}
                    </ButtonSolid>
                    <p className="apiMessage">{message}</p>
                </div>
                
               )
               
           }

           <Modal title="Edit Post"
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

export default connect(mapStateToProps,actions)(withRouter(Body));