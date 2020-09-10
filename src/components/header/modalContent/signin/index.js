import React, { Component } from 'react';

import Modal from '../../../UI/modal/Modal';
import mentorImg from '../../../../assets/auth/modal/mentor.svg';
import menteeImg from '../../../../assets/auth/modal/mentee.svg';
import ButtonSolid from '../../../UI/button/solid';
import ButtonLight from '../../../UI/button/light';

import './index.css';

class index extends Component {

    state = {
        userType: "mentor",
        mentorBorder: "",
        menteeBorder: "none",
        showUserTypeWindow: true,
        showCredentialsWindow: false
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
                break;
            default:
                return;
        }
    }

    render() {
        let modalContent = null;
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
                    <ButtonSolid style={{width:133, height:40}} onClick={()=>this.clickHandler(2)}> Next </ButtonSolid>
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

export default index;