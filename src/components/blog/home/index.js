import React,{useState, useEffect} from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import downArrow from '../../../assets/forum/downArrow.svg';
import ButtonSolid from '../../UI/button/solid/index';

import './index.css';

const index = ({auth, userType}) => {

    let [ blogArray, setBlogArray ] = useState([]);

    useEffect(() => {
        fetchAllBlog();   
    },[])

    let fetchAllBlog = async() => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/blog/`,{
            method:'get'
        });
        
        let res = await response.json();
        if(res.success){
            setBlogArray(res.info);
        }
    }

    let username;

    return (
        <div style={{marginBottom:50}}>
            {
               userType==='mentor' && <div style={{textAlign:"center"}}>
                <a href="/blog/new">
                    <ButtonSolid style={{width:133, height:40, marginTop:15}}>
                        New Blog
                    </ButtonSolid>
                </a>
                </div>
            }
           
            {
                blogArray.map(arr => {
                username = arr.author? arr.author.username:null;
                return (
                    <React.Fragment>
                        <div className="blogHome-layout">
                            <p className="blogHome-layout-title">{arr.title}</p>
                            <p className="blogHome-layout-domain">{arr.domain}</p>
                            <div>
                                {/* <img src={commentSVG} alt="comments" /> <span>{arr.comments.length}</span> */}
                                <div className="blogHome-layout-author">Created By {username}</div>
                                <div className="blogHome-layout-author"><strong>{arr.date}</strong></div>
                            </div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <a href={`/blog/view/${arr._id}`}><img  src={downArrow} alt="down-arrow" /></a>
                        </div>
                    </React.Fragment>
                ) 
            })
        }
            
        </div>
    );
};


function mapStateToProps({auth, userType}) {
    return {auth, userType};
}

export default connect(mapStateToProps,actions)(index);