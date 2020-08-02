import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  async componentDidMount(){
      const res = await fetch(`${process.env.REACT_APP_DOMAIN}`, {
        method: 'get'
      });

      const data = await res.json();
      console.log(data);
  }

  render() {
    return (
      <div>

      </div>
    );
  }
}

export default App;
