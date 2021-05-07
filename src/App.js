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
import MentorRequests from './pages/mentor/request';
import MentorProfile from './pages/mentor/profile';

import MenteeNotification from './pages/mentee/notifications';
import MenteeProfile from './pages/mentee/profile';

import PlacementHome from './pages/placement/homepage';
import PlacementView from './pages/placement/view';
import NewPlacement from './pages/placement/new';

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
            <Route path="/mentor/requests" exact><MentorRequests  /></Route>
            <Route path="/mentor/view-profile/:id" exact><MentorProfile /></Route>
            <Route path="/mentee/notification" exact><MenteeNotification  /></Route>
            <Route path="/mentee/view-profile/:id" exact><MenteeProfile /></Route>
            <Route path="/placement/home" exact><PlacementHome /></Route>
            <Route path="/placement/view/:id" exact><PlacementView /></Route>
            <Route path="/placement/new" exact><NewPlacement /></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
