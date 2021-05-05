import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import ButtonSolid from '../../components/UI/button/solid';
import Loader from '../../components/UI/loader/Loader';
import * as actions from '../../redux/actions';

import './Styling.css';

class Mentor extends Component {
    
    state = {
        username: "",
        password: "",
        name: "",
        age: null,
        phone: null,
        linkedin: "",
        experience: null,
        domain: "",
        bio: "",
        email: "",
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
                this.setState({age:event.target.value});
                break;
            case 5:
                this.setState({phone:event.target.value});
                break;
            case 6:
                this.setState({domain:event.target.value});
                break;
            case 7:
                this.setState({experience:event.target.value});
                break;
            case 8:
                this.setState({linkedin:event.target.value});
                break;
            case 9:
                this.setState({bio:event.target.value});
                break;
            case 10:
                this.setState({email:event.target.value});
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
            age:this.state.age,
            phone: this.state.phone,
            email: this.state.email,
            linkedin: this.state.linkedin,
            bio: this.state.bio,
            domain: this.state.domain,
            experience: this.state.experience
        };

        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/api/auth/mentor/signup`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        });
        this.setState({isLoading:false});
        const data = await res.json();
        // console.log(data);
        this.setState({message:data.message});
        if(data.success){
            this.props.LoginUser(data.info);
            this.props.UserType("mentor");
            this.props.history.push("/");
        }
        //console.log(data);
    }

    render() {
        let btnContent = this.state.isLoading? <Loader />: "Sign Up";
        return (
           <React.Fragment>
                <div className="signup-form-layout">
                    <p className="signup-form-title">MENTOR SIGNUP</p>
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

                            <div>
                                <label className="signup-form-label">Age: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="number" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,4)}/>
                            </div>

                            <div>
                                <label className="signup-form-label">Phone: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="number" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,5)}/>
                            </div>

                            <div>
                                <label className="signup-form-label">Domain: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,6)}/>
                            </div>

                            <div>
                                <label className="signup-form-label">Email: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,10)}/>
                            </div>

                            <div>
                                <label className="signup-form-label">Experience: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="number" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,7)}/>
                            </div>

                            
                            <div>
                                <label className="signup-form-label">Linkedin: </label><br />
                                <input 
                                className="signup-form-input" 
                                type="text" 
                                required 
                                onChange={(event)=>this.inputChangeHandler(event,8)}/>
                            </div>

                            <div>
                                <label className="signup-form-label">Bio: </label><br />
                                <textarea className="signup-form-textarea"
                                required
                                value={this.state.bio}
                                rows={10}
                                style={{whiteSpace:"pre-wrap"}}
                                onChange={(event)=>this.inputChangeHandler(event,9)}  >
                                    {this.state.bio}
                                </textarea>
                            </div>

                            <div style={{textAlign:"center", marginTop: 25, marginBottom:10}}>
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

export default connect(null,actions)(withRouter(Mentor));