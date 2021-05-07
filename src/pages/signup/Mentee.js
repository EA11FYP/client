import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ButtonSolid from '../../components/UI/button/solid';
import Loader from '../../components/UI/loader/Loader';
import * as actions from '../../redux/actions';

import './Styling.css';

class Mentee extends Component {

    state = {
        username: "",
        password: "",
        name: "",
        location: "",
        ceo: "",
        website: "",
        linkedin: "",
        domain: "",
        bio: "",
        funding: "",
        founders: "",
        email: "",
        phone: 0,
        isLoading: false,
        message: ""
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
            case 4:
                this.setState({location:event.target.value});
                break;
            case 5:
                this.setState({ceo:event.target.value});
                break;
            case 6:
                this.setState({website:event.target.value});
                break;
            case 7:
                this.setState({linkedin:event.target.value});
                break;
            case 8:
                this.setState({domain:event.target.value});
                break;
            case 9:
                this.setState({funding:event.target.value});
                break;
            case 10:
                this.setState({founders:event.target.value});
                break;
            case 11:
                this.setState({bio:event.target.value});
                break;
            case 12:
                this.setState({email:event.target.value});
                break;
            case 13:
                this.setState({phone:event.target.value});
                break;
            default: return;
        }
    }

    formSubmitHandler = async (event) => {
        event.preventDefault();
        this.setState({isLoading:true});
        let body = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name,
            location: this.state.location,
            ceo: this.state.ceo,
            website: this.state.website,
            linkedin: this.state.linkedin,
            domain: this.state.domain,
            bio: this.state.bio,
            founders: this.state.founders,
            funding: this.state.funding,
            email: this.state.email,
            phone: this.state.phone
        };

        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/api/auth/mentee/signup`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        });
        this.setState({isLoading:false});
        const data = await res.json();
        this.setState({message:data.message});
        if(data.success){
            this.props.LoginUser(data.info);
            this.props.UserType("mentee");
            this.props.history.push("/");
        }
        //console.log(data);
    }

    render() {
        let btnContent = this.state.isLoading? <Loader /> : "Sign Up";
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
                                value={this.state.username}
                                type="text" 
                                required 
                                autoFocus
                                onChange={(event)=>this.inputChangeHandler(event,1)} />
                            </div>
                            <div>
                                <label className="signup-form-label">Password: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.password}
                                type="password" 
                                required
                                onChange={(event)=>this.inputChangeHandler(event,2)} />
                            </div>
                            <div>
                                <label className="signup-form-label">Name: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.name}
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,3)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Location: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.location}
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,4)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">CEO: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.ceo}
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,5)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Website: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.website}
                                type="text"  
                                onChange={(event)=>this.inputChangeHandler(event,6)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Linkedin: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.linkedin}
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,7)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Domain: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.domain}
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,8)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Funding: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.funding}
                                type="number"  
                                onChange={(event)=>this.inputChangeHandler(event,9)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Founder(s): </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.founders}
                                type="text"  
                                onChange={(event)=>this.inputChangeHandler(event,10)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Email: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.email}
                                type="email" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,12)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Phone: </label><br />
                                <input 
                                className="signup-form-input" 
                                value={this.state.phone}
                                type="number" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,13)}/>
                            </div>
                            <div>
                                <label className="signup-form-label">Bio: </label><br />
                                <textarea
                                className="signup-form-textarea"
                                value={this.state.bio}
                                required
                                onChange={(event)=>this.inputChangeHandler(event,11)}
                                rows={10} >
                                    {this.state.bio}
                                </textarea>
                            </div>
                            <div style={{textAlign:"center", marginTop: 25}}>
                                <ButtonSolid type="submit" 
                                style={{background: "#289450",
                                width:100, 
                                height: 45, 
                                fontSize: 18}} > 
                                    {btnContent}
                                </ButtonSolid>
                            </div>
                            <p className="apiMessage">{this.state.message}</p>
                        </form>
                    </div>
                </div>
           </React.Fragment>
        );
    }
}
export default connect(null,actions)(withRouter(Mentee));
