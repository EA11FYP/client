import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse} from 'reactstrap';
import {connect} from 'react-redux';

import ButtonLight from '../UI/button/light';
import ButtonSolid from '../UI/button/solid';
import SignupModal from './modalContent/signup';
import SigninModal from './modalContent/signin';
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
                <NavItem>
                    <span>{`Welcome, ${props.auth.name}`}</span>
                </NavItem>
                 <NavItem>
                    <span id="header-avatar"></span>
                </NavItem>
            </React.Fragment>
        )
    }

    return (
        <div>
            <Navbar light expand="md" >
                <NavbarBrand>Lorem Ipsum</NavbarBrand>
                <NavbarToggler style={{color:"#4857B0"}} onClick={toggle} />
                <Collapse style={{textAlign:'center'}} isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
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

function mapStateToProps({auth}) {
    return {auth};
}

export default connect(mapStateToProps)(index);