import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse} from 'reactstrap';

import ButtonLight from '../UI/button/light';
import ButtonSolid from '../UI/button/solid';
import SignupModal from './modalContent/signup';
//import Modal from '../UI/modal/Modal';

import './index.css';

const index = (props) => {

    const [isOpen, setIsOpen] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const openModalhandler = () => setShowModal(true);
    const closeModalHandler = () => setShowModal(false);

    return (
        <div>
            <Navbar light expand="md" >
                <NavbarBrand>Lorem Ipsum</NavbarBrand>
                <NavbarToggler style={{color:"#4857B0"}} onClick={toggle} />
                <Collapse style={{textAlign:'center'}} isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                       <NavItem id="signup-btn">
                           <ButtonLight clicked={openModalhandler} style={{width:133, height:40}}>Sign up</ButtonLight>
                       </NavItem>
                       <NavItem id="signin-btn">
                           <ButtonSolid clicked={openModalhandler} style={{width:133, height:40}} >Sign in</ButtonSolid>
                       </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
            {/* <Modal show={showModal} title="signup" modalClosed={closeModalHandler} >
                
            </Modal> */}
            <SignupModal show={showModal} modalClosed={closeModalHandler}/>
        </div>
    );
};

export default index;