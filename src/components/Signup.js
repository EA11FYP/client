import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
            <form>
                <input type="text" placeholder="username"></input>
                <input type="text" placeholder="name"></input>
                <input type="password" placeholder="password"></input>
                <button type="submit">Submit</button>
            </form>
        </div>
        );
    }
}

export default Signup;