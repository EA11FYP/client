import React, { Component } from 'react';

import Modal from '../../../UI/modal/Modal';
import mentorImg from '../../../../assets/auth/modal/mentor.svg';
import menteeImg from '../../../../assets/auth/modal/mentee.svg';
import ButtonSolid from '../../../UI/button/solid';
import ButtonLight from '../../../UI/button/light';

import './index.css';

class index extends Component {
    render() {
        let modalContent = null;
        if(window.innerWidth>481){
            modalContent = (
            <React.Fragment>
                <img className="modal-mentor" src={mentorImg} alt="MENTOR" />
                <img className="modal-mentee" src={menteeImg} alt="MENTEE" />
                <div className="modal-next-btn">
                    <ButtonSolid style={{width:133, height:40}}> Next </ButtonSolid>
                </div>
            </React.Fragment>);
        } else if(window.innerWidth<=481){
            modalContent = (
                <React.Fragment>
                    <ButtonLight style={{width:110, height:40, marginTop:"20%", marginLeft:5}}>MENTOR</ButtonLight>
                    <ButtonLight style={{width:110, height:40, float:"right", marginTop:"20%", marginRight:5}}>MENTEE</ButtonLight>
                    <div className="modal-next-btn">
                        <ButtonSolid style={{width:65, height:35, marginTop:"15%"}}> Next </ButtonSolid>
                    </div>
                </React.Fragment>
            )
        }
        return (
            <div>
                <Modal show={this.props.show} title="signup" modalClosed={this.props.modalClosed}>
                    {modalContent}
                    
                </Modal>
            </div>
        );
    }
}

export default index;