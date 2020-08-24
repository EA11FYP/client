import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse} from 'reactstrap';

import ButtonLight from '../UI/button/light';
import ButtonSolid from '../UI/button/solid';

import './index.css';

const index = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar light expand="md" >
                <NavbarBrand>Lorem Ipsum</NavbarBrand>
                <NavbarToggler style={{color:"#4857B0"}} onClick={toggle} />
                <Collapse style={{textAlign:'center'}} isOpen={isOpen} navbar>
                    <Nav className="ml-auto" navbar>
                       <NavItem id="signup-btn">
                           <ButtonLight style={{width:133, height:40}}>Sign up</ButtonLight>
                       </NavItem>
                       <NavItem id="signin-btn">
                           <ButtonSolid style={{width:133, height:40}} >Sign in</ButtonSolid>
                       </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default index;