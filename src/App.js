import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import SignupMentor from './pages/signup/Mentor';
import SignupMentee from './pages/signup/Mentee';
import Header from './components/header';
import ForumHome from './pages/forum/homepage';
import ForumView from './pages/forum/view';

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
            <Route path="/forum/home" exact><ForumHome /></Route>
            <Route path="/forum/view/:id"><ForumView /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
