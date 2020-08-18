import React, {useState} from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, Collapse} from 'reactstrap';

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
                       <NavItem>
                           <button id="signup-btn">Sign up</button>
                       </NavItem>
                       <NavItem>
                           <button id="signin-btn">Sign in</button>
                       </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default index;