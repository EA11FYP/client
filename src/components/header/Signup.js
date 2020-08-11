import React, { Component } from 'react';
import {connect} from 'react-redux';

import * as actions from '../../redux/actions';

class Signup extends Component {

    state = {
        username: "",
        password: "",
        name: ""
    }

    inputChangeHandler = (event, type) => {
        switch(type){
            case 0:
                this.setState({username:event.target.value});
                break;
            case 1:
                this.setState({name:event.target.value});
                break;
            case 2:
                this.setState({password:event.target.value});
                break;
            default: return;
        }
    }

    signupHandler = async (event) => {
        event.preventDefault();

        let body = {
            username: this.state.username,
            password: this.state.password,
            name: this.state.name
        };

        
        const res = await fetch(`${process.env.REACT_APP_DOMAIN}/api/auth/mentee/login`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'post',
            body: JSON.stringify(body)
        });

        const data = await res.json();
        //console.log(data);
        if(data.success){
            this.props.LoginUser(data);
        } else {
            console.log(data.message);
        }
    }

    render() {
        //console.log(this.state);
        return (
            <div>
            <form onSubmit={(event)=>this.signupHandler(event)}>
                <input 
                    type="text" 
                    value={this.state.username} 
                    placeholder="username" 
                    onChange={(event)=>this.inputChangeHandler(event, 0)} />
               
                <input 
                    type="text" 
                    value={this.state.name} 
                    placeholder="name"
                    onChange={(event)=>this.inputChangeHandler(event, 1)} />
               
                <input 
                    type="password" 
                    value={this.state.password} 
                    placeholder="password"
                    onChange={(event)=>this.inputChangeHandler(event, 2)} />
               
                <button type="submit">Submit</button>
            </form>
            <div>
                <button type="submit">Logout</button>
            </div>
        </div>
        );
    }
}

export default connect(null,actions)(Signup);