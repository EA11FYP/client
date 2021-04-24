import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Landing from './pages/Landing';
import SignupMentor from './pages/signup/Mentor';
import SignupMentee from './pages/signup/Mentee';

import Header from './components/header';

import ForumHome from './pages/forum/homepage';
import ForumView from './pages/forum/view';
import NewForum from './pages/forum/new';

import BlogHome from './pages/blog/homepage';
import BlogView from './pages/blog/view';
import NewBlog from './pages/blog/new';

import MentorHome from './pages/mentor/home';
import RequestComponent from './pages/mentor/request';

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
            <Route path="/forum/new" exact><NewForum /></Route>
            <Route path="/blog/home" exact><BlogHome /></Route>
            <Route path="/blog/view/:id" exact><BlogView /></Route>
            <Route path="/blog/new" exact><NewBlog /></Route>
            <Route path="/mentor/home" exact><MentorHome /></Route>
            <Route path="/mentor/requests" exact><RequestComponent  /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
