import React, {Component} from 'react';
import './App.css';
import Header from './app/partials/Header';
import Footer from './app/partials/Footer';
import HomePages from './app/Home/HomePages';
import SinglePostTitle from './app/HomeSinglePost/SinglePostTitle';
import {Switch, Route} from 'react-router-dom';
import Authors from './app/Authors/Authors';
// import Users from './app/entities/Users';
class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePages} />
          <Route path="/post/:id" component={SinglePostTitle} />
          <Route path="/Authors" component={Authors} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
