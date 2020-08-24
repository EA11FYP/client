import React, { Component } from 'react';

import Backdrop from '../backdrop/Backdrop';

import './Modal.css';

class Modal extends Component {

    
    shouldComponentUpdate ( nextProps, nextState ) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }


    render() {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    id="modal"
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    <div id="modal-title">
                        <span id="modal-title-txt">{this.props.title}</span>
                    </div>
                    {this.props.children}
                </div>
            </React.Fragment>
        );
    }
}

export default Modal;