import React, { Component } from 'react';

import Header from '../src/components/header';

import './App.css';

class App extends Component {
   render() {
    return (
      <div className="container-fluid">
        <Header />
      </div>
    );
  }
}

export default App;
