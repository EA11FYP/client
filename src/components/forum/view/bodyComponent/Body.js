import React, {useState,useEffect} from 'react';

import { connect } from 'react-redux';
import * as actions from '../../../../redux/actions';

import ButtonSolid from '../../../UI/button/solid/index';

import './Body.css';

const Body = ({title, description, domain, author, date, auth}) => {

    let [ showBtn, setShowBtn ] = useState(false);

    let username = author ? author.username:null;
    let ids = author? author.id:"123";


    useEffect(() => {
        if(ids === auth._id) 
        setShowBtn(true)
    else
        setShowBtn(false);
     console.log(ids,auth._id)
    },[ids]);
    

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
                        fontSize: 14}} > 
                            Edit
                    </ButtonSolid>
                    <ButtonSolid style={{background: "#cc0606",
                        width:65, 
                        height: 35, 
                        fontSize: 14,
                        marginLeft:10}} > 
                            Delete
                    </ButtonSolid>
                </div>
               )
           }
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)(Body);