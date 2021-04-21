import React, { useEffect, useState } from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions/';
import { withRouter } from 'react-router-dom';

import Modal from '../../UI/modal/Modal';
import ButtonSolid from '../../UI/button/solid';

import './index.css';

const index = ({id,auth,history}) => {

    const [ blogDetails, setBlogDetails ] = useState({});
    let [ showBtn, setShowBtn ] = useState(false);
    let [ showModal, setShowModal ] = useState(false);
    let [ updatedTitle, setUpdatedTitle ] = useState(blogDetails.title);
    let [ updatedBody, setUpdatedBody ] = useState(blogDetails.description);
    let [ updatedDomain, setUpdatedDomain ] = useState(blogDetails.domain);

    useEffect( () => {
        fetchBlog();
    }, []);

    useEffect(() => {
        setUpdatedBody(blogDetails.body);
        setUpdatedDomain(blogDetails.domain);
        setUpdatedTitle(blogDetails.title);
    },[blogDetails.description,blogDetails.domain,blogDetails.title]);

    let fetchBlog = async () => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/blog/one/${id}`,{
            method: 'get'
        });
        let res = await response.json();
        if(response.status === 200 && res)
            setBlogDetails(res);
    }

    let username = blogDetails.author ? blogDetails.author.username:null;
    let ids = blogDetails.author? blogDetails.author.id:"123";

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
            domain: updatedDomain
        });

        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/blog/edit/${id}`,{
            method: "post",
            body,
            headers: {
                'Content-Type': 'application/json'
            }
        })

        let res = await response.json();
        if(res.success){
            fetchBlog();
            setShowModal(false);
        }
    }

    let deletePostHandler = async (event) => {
        event.preventDefault();
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/blog/delete/${id}`,{
            method:"delete"
        });

        let res = await response.json();
        if(res.success){
            history.push('/blog/home');
        }
    }

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
                            Submit
                    </ButtonSolid>
                </form>
            </div>
        </React.Fragment>
    )

    // console.log(blogDetails,"blogDetails")
    return (
        <div>
            <a href="/blog/home" style={{padding: 25}}><strong>Back</strong></a>
            <div className="blogView-body">
                <p className="blogView-body-title">{blogDetails.title}</p>
                <p className="blogView-body-domain">{blogDetails.domain}</p>
                <p className="blogView-body-description">{blogDetails.body}</p>
                <p className="blogView-body-author">{`created by ${username}`}</p>
                <p className="blogView-body-author"><strong>{blogDetails.date}</strong></p>
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