import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ButtonSolid from '../../components/UI/button/solid';
import * as actions from '../../redux/actions';

import './Styling.css';

class Mentee extends Component {

    state = {
        username: "",
        password: "",
        name: ""
    };

    inputChangeHandler = (event, type) => {
        switch(type){
            case 1:
                this.setState({username:event.target.value});
                break;
            case 2:
                this.setState({password:event.target.value});
                break;
            case 3:
                this.setState({name:event.target.value});
                break;
            default: return;
        }
    }

    formSubmitHandler = async (event) => {
        event.preventDefault();
        let body = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name
        };

        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/api/auth/mentee/signup`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        });

        const data = await res.json();
        if(data.success){
            this.props.LoginUser(data.info);
            this.props.UserType("mentee");
            this.props.history.push("/");
        }
        //console.log(data);
    }

    render() {
        //console.log(this.state);
        return (
           <React.Fragment>
                <div className="signup-form-layout">
                    <p className="signup-form-title">MENTEE SIGNUP</p>
                    <div className="signup-form-inner-layout">
                        <form onSubmit={(event)=>this.formSubmitHandler(event)}>
                            <div>
                                <label className="signup-form-label">Username: </label><br/>
                                <input 
                                className="signup-form-input" 
                                type="text" 
                                required 
                                autoFocus
                                onChange={(event)=>this.inputChangeHandler(event,1)} />
                            </div>
                            <div>
                                <label className="signup-form-label">Password: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="password" 
                                required
                                onChange={(event)=>this.inputChangeHandler(event,2)} />
                            </div>
                            <div>
                                <label className="signup-form-label">Name: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,3)}/>
                            </div>

                            <div style={{textAlign:"center", marginTop: 25}}>
                                <ButtonSolid type="submit" 
                                style={{background: "#289450",
                                width:100, 
                                height: 45, 
                                fontSize: 18}} > 
                                    Sign Up 
                                </ButtonSolid>
                            </div>
                        </form>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}
export default connect(null,actions)(withRouter(Mentee));
