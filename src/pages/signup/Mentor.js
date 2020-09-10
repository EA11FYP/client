import React, { Component } from 'react';

import './Styling.css';

class Mentor extends Component {
    render() {
        return (
           <React.Fragment>
                <div className="signup-form-layout">
                    <p className="signup-form-title">MENTOR SIGNUP</p>
                    <div className="signup-form-inner-layout">
                        <div>
                            <label className="signup-form-label">Username: </label><br/>
                            <input className="signup-form-input" type="text" required autoFocus />
                        </div>
                        <div>
                            <label className="signup-form-label">password: </label><br />
                            <input className="signup-form-input" type="password" />
                        </div>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}

export default Mentor;