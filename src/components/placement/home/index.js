import React,{useState, useEffect} from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../redux/actions';

import downArrow from '../../../assets/forum/downArrow.svg';
import ButtonSolid from '../../UI/button/solid/index';

import './index.css';

const index = ({auth, userType}) => {

    let [ placementArray, setPlacementArray ] = useState([]);

    useEffect(() => {
        fetchAllPlacements();   
    },[])

    let fetchAllPlacements = async() => {
        let response = await fetch(`${process.env.REACT_APP_DOMAIN}/api/placement/`,{
            method:'get'
        });
        
        let res = await response.json();
        if(res.success){
            setPlacementArray(res.info);
        }
    }

    let username;

    return (
        <div style={{marginBottom:50}}>
            {
               userType==='mentee' && <div style={{textAlign:"center"}}>
                <a href="/placement/new">
                    <ButtonSolid style={{width:133, height:40, marginTop:15}}>
                        Create Opening
                    </ButtonSolid>
                </a>
                </div>
            }
           
            {
                placementArray.map(arr => {
                username = arr.author? arr.author.username:null;
                return (
                    <React.Fragment>
                        <div className="placementHome-layout">
                            <p className="placementHome-layout-title">{arr.title}</p>
                            <p className="placementHome-layout-domain">{arr.domain}</p>
                            <p className="placementHome-layout-domain">{arr.type}</p>
                            <p className="placementHome-layout-domain">{arr.location}</p>
                            <div>
                                {/* <img src={commentSVG} alt="comments" /> <span>{arr.comments.length}</span> */}
                                <div className="placementHome-layout-author">Created By {username}</div>
                                <div className="placementHome-layout-author"><strong>{arr.date}</strong></div>
                            </div>
                        </div>
                        <div style={{textAlign:"center"}}>
                            <a href={`/placement/view/${arr._id}`}><img  src={downArrow} alt="down-arrow" /></a>
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