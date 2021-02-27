import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';

import Modal from '../../../UI/modal/Modal';
import mentorImg from '../../../../assets/auth/modal/mentor.svg';
import menteeImg from '../../../../assets/auth/modal/mentee.svg';
import ButtonSolid from '../../../UI/button/solid';
import ButtonLight from '../../../UI/button/light';
import * as actions from '../../../../redux/actions';

import './index.css';

class index extends Component {

    state = {
        userType: "mentor",
        mentorBorder: "",
        menteeBorder: "none",
        showUserTypeWindow: true,
        showCredentialsWindow: false,
        username: "",
        password: ""
    }

    clickHandler = (type) => {
        switch(type){
            case 0:
                this.setState({userType:"mentor",mentorBorder:"", menteeBorder:"none"});
                break;
            case 1:
                this.setState({userType:"mentee",mentorBorder:"none",menteeBorder:""});
                break;
            case 2:
                this.setState({showCredentialsWindow: true, showUserTypeWindow: false});
                break;
            case 3:
                this.setState({showCredentialsWindow: false, showUserTypeWindow: true});
                break;
            default:
                return;
        }
    }

    inputHandler = (event,type) => {
        switch(type){
            case 0:
                this.setState({username:event.target.value});
                break;
            case 1:
                this.setState({password:event.target.value});
                break;
            default: return;
        }
    }

    formSubmitHandler = async event => {
        event.preventDefault();

        let body = {
            username: this.state.username,
            password: this.state.password
        };

        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/api/auth/${this.state.userType}/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        });
        let user = this.state.userType;

        const data = await res.json();
        if(data.success){
            this.props.LoginUser(data.info);
            this.props.UserType(user);
            this.props.history.push("/");
            //window.location.reload(true);
            this.props.modalClosed();
        }
        //console.log(data);

    }

    render() {
        console.log(this.state);
        let modalContent = null;
        let formBtn = window.innerWidth>480 ? 
            ( <ButtonSolid type="submit" 
            style={{background: "#289450",
            width:100, 
            height: 45, 
            fontSize: 18}} > 
                Sign In 
        </ButtonSolid>) : 
        (
            <ButtonSolid type="submit" 
            style={{background: "#289450",
            width:80, 
            height: 30, 
            fontSize: 12,
            marginTop: 10}} > 
                Sign In 
            </ButtonSolid> 
        );

        if(window.innerWidth>800 && this.state.showUserTypeWindow){
            modalContent = (
            <React.Fragment>
                <img className="modal-mentor" 
                src={mentorImg} 
                alt="MENTOR"
                style={{border:`${this.state.mentorBorder}`}}
                onClick={()=>this.clickHandler(0)} />

                <img 
                className="modal-mentee" 
                src={menteeImg} 
                alt="MENTEE"
                style={{border:`${this.state.menteeBorder}`}}
                onClick={()=>this.clickHandler(1)} />

                <div className="modal-next-btn">
                    <ButtonSolid 
                    style={{width:133, height:40}} 
                    clicked={()=>this.clickHandler(2)}> 
                        Next 
                    </ButtonSolid>
                </div>
            </React.Fragment>);
        } else if(window.innerWidth<=799 && this.state.showUserTypeWindow){
            //let x = "";
            modalContent = (
                <React.Fragment>
                    <ButtonLight style={{width:"45%", 
                    height:40, 
                    marginTop:"20%", 
                    marginLeft:5, 
                    border:`${this.state.mentorBorder}`}}
                    clicked={()=>this.clickHandler(0)}>
                        MENTOR
                    </ButtonLight>

                    <ButtonLight style={{width:"45%", 
                    height:40, 
                    float:"right", 
                    marginTop:"20%", 
                    marginRight:5, 
                    border:`${this.state.menteeBorder}`}}
                    clicked={()=>this.clickHandler(1)}>
                        MENTEE
                    </ButtonLight>

                    <div className="modal-next-btn">
                        <ButtonSolid 
                        style={{width:65, height:35, marginTop:"15%"}} 
                        clicked={()=>this.clickHandler(2)}>
                            Next 
                        </ButtonSolid>
                    </div>
                </React.Fragment>
            )
        } else if(this.state.showCredentialsWindow){
            modalContent = (
                <React.Fragment>
                    <div className="signin-form-innerlayout">
                        <p className="signin-form-title">Enter Credentials</p>
                        <form onSubmit={(event)=>this.formSubmitHandler(event)}>
                            <div>
                                <label className="signin-form-label">Username:</label><br />
                                <input 
                                className="signin-form-input" 
                                type="text" 
                                autoFocus 
                                required
                                onChange={(event)=>this.inputHandler(event,0)} />
                            </div>

                           <div>
                                <label className="signin-form-label">Password:</label><br />
                                <input 
                                className="signin-form-input" 
                                type="password" 
                                required
                                onChange={(event)=>this.inputHandler(event,1)} />
                           </div>

                            {formBtn}

                           <div style={{marginTop: 10}}> 
                            <button 
                            style={{backgroundColor: "white", border:"none", cursor: "pointer"}} 
                            onClick={()=>this.clickHandler(3)}>
                                Back
                            </button>
                            </div>
                        </form>
                    </div>
                </React.Fragment>
            );
        }
        return (
            <div>
                <Modal show={this.props.show} title="sign-in" modalClosed={this.props.modalClosed}>
                    {modalContent}
                </Modal>
            </div>
        );
    }
}


export default connect(null,actions)(withRouter(index));