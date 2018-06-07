import React, {Component} from 'react';
import './App.css';
import Header from './app/partials/Header';
import Footer from './app/partials/Footer';
import HomePages from './app/Home/HomePages';
import PostTitle from './app/HomeSinglePost/PostTitle';
import MorePosts from './app/HomeSinglePost/MorePosts';
import {Switch, Route} from 'react-router-dom';
class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>

          <Route exact path="/" component={HomePages} />

          <Route path="/post" component={PostTitle} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
