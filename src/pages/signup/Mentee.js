import React, { Component } from 'react';

import ButtonSolid from '../../components/UI/button/solid';

import './Styling.css';

class Mentee extends Component {
    render() {
        return (
           <React.Fragment>
                <div className="signup-form-layout">
                    <p className="signup-form-title">MENTEE SIGNUP</p>
                    <div className="signup-form-inner-layout">
                        <form>
                            <div>
                                <label className="signup-form-label">Username: </label><br/>
                                <input className="signup-form-input" type="text" required autoFocus />
                            </div>
                            <div>
                                <label className="signup-form-label">Password: </label><br />
                                <input className="signup-form-input" type="password" />
                            </div>
                            <div>
                                <label className="signup-form-label">Name: </label><br />
                                <input className="signup-form-input" type="text" />
                            </div>

                            <div style={{textAlign:"center", marginTop: 25}}>
                                <ButtonSolid type="submit" 
                                style={{background: "#289450",
                                width:100, 
                                height: 45, 
                                fontSize: 18}} > 
                                    Sign In 
                                </ButtonSolid>
                            </div>
                        </form>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}

export default Mentee;