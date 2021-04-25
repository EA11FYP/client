import React, { useState } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse, NavLink} from 'reactstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ButtonLight from '../UI/button/light';
import ButtonSolid from '../UI/button/solid';
import SignupModal from './modalContent/signup';
import SigninModal from './modalContent/signin';
import * as actions from '../../redux/actions';
//import Modal from '../UI/modal/Modal';

import './index.css';

const index = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [showSignupModal, setShowSignupModal] = useState(false);
    const [showSigninModal, setShowSigninModal] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const openSignupModalhandler = () => setShowSignupModal(true);
    const closeSignupModalHandler = () => setShowSignupModal(false);

    const openSigninModalhandler = () => setShowSigninModal(true);
    const closeSigninModalHandler = () => setShowSigninModal(false);

    const logoutHandler = async () => {
        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/api/auth/logout`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'get'
        });

        const data = await res.json();
        if(data){
            props.LogoutUser();
            props.history.push("/");
            localStorage.clear();
        }
        
    }

    let conditionalContent;
    if(!props.auth){
        conditionalContent = (
            <React.Fragment>
                <NavItem id="signup-btn">
                    <ButtonLight clicked={openSignupModalhandler} style={{width:133, height:40}}>Sign up</ButtonLight>
                </NavItem>
                <NavItem id="signin-btn">
                    <ButtonSolid clicked={openSigninModalhandler} style={{width:133, height:40}} >Sign in</ButtonSolid>
                </NavItem>
            </React.Fragment>
        )
    } else {
        conditionalContent = (
            <React.Fragment>
                <NavItem >
                    <NavbarBrand className="header-welcome-text" >{`Welcome, ${props.auth.name}`}</NavbarBrand>
                </NavItem>
                 <NavItem className="header-logout-btn">
                    <ButtonSolid clicked={logoutHandler} style={{width:133, height:40}}>Logout</ButtonSolid>
                </NavItem>
            </React.Fragment>
        )
    }

    return (
        <div>
            <Navbar light expand="md" >
                <NavbarBrand><a href="/">Lorem Ipsum</a></NavbarBrand>
                
                <NavbarToggler style={{color:"#4857B0"}} onClick={toggle} />
                <Collapse style={{textAlign:'center'}} isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="header-welcome-text"><a href="/forum/home">Forum</a></NavLink>
                         </NavItem>
                         <NavItem>
                            <NavLink className="header-welcome-text"><a href="/blog/home">Blogs</a></NavLink>
                         </NavItem>
                         { props.userType==='mentee' && 
                            <React.Fragment>
                                <NavItem>
                                    <NavLink className="header-welcome-text"><a href="/mentor/home">Mentors</a></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="header-welcome-text"><a href="/mentee/notification">Notifications</a></NavLink>
                                </NavItem>
                            </React.Fragment>
                        } 
                        {
                            props.userType!=='mentee' &&
                            <NavItem>
                                <NavLink className="header-welcome-text"><a href="/mentor/requests">Requests</a></NavLink>
                            </NavItem>
                        }
                        {conditionalContent}
                    </Nav>
                </Collapse>
            </Navbar>
            {/* <Modal show={showModal} title="signup" modalClosed={closeModalHandler} >
                
            </Modal> */}
            <SignupModal show={showSignupModal} modalClosed={closeSignupModalHandler}/>
            <SigninModal show={showSigninModal} modalClosed={closeSigninModalHandler} />
        </div>
    );
};

function mapStateToProps({auth, userType}) {
    return {auth,userType};
}

export default connect(mapStateToProps,actions)(withRouter(index));