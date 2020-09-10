import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import SignupMentor from './pages/signup/Mentor';
import SignupMentee from './pages/signup/Mentee';
import Header from './components/header';

import './App.css';

class App extends Component {
   render() {
    return (
      <BrowserRouter>
        <div className="container-fluid">
          <Header />
          <Switch>
            <Route path="/" exact><Landing /></Route>
            <Route path="/signup/mentor" exact><SignupMentor /></Route>
            <Route path="/signup/mentee" exact><SignupMentee /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
