import React,{useState, useEffect} from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import commentSVG from '../../../assets/forum/comment.svg';
import downArrow from '../../../assets/forum/downArrow.svg';
import ButtonSolid from '../../UI/button/solid/index';

import './index.css';

const index = ({auth}) => {

    let [ forumArray, setForumArray ] = useState([]);

    useEffect(() => {
        fetchAllForum();   
    },[])

    let fetchAllForum = async() => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/forum/`,{
            method:'get'
        });
        
        let res = await response.json();
        if(res.success){
            setForumArray(res.info);
        }
    }

    let username

    return (
        <div style={{marginBottom:50}}>
            {
               auth && <div style={{textAlign:"center"}}>
                <a href="/forum/new">
                    <ButtonSolid style={{width:133, height:40, marginTop:15}}>
                        New Post
                    </ButtonSolid>
                </a>
                </div>
            }
           
            {
                forumArray.map(arr => {
                username = arr.author? arr.author.username:null;
                return (
                    <React.Fragment>
                        <div className="forumHome-layout">
                            <p className="forumHome-layout-title">{arr.title}</p>
                            <p className="forumHome-layout-domain">{arr.domain}</p>
                            <div>
                                <img src={commentSVG} alt="comments" /> <span>{arr.comments.length}</span>
                                <div className="forumHome-layout-author">Created By {username}</div>
                                <div className="forumHome-layout-author"><strong>{arr.date}</strong></div>
                            </div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <a href={`/forum/view/${arr._id}`}><img  src={downArrow} alt="down-arrow" /></a>
                        </div>
                    </React.Fragment>
                ) 
            })
        }
            
        </div>
    );
};


function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps,actions)(index);