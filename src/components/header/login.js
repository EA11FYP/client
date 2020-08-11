import React, { Component } from 'react';

class login extends Component {
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="username"></input>
                    <input type="password" placeholder="password"></input>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default login;