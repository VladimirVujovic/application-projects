import React, {Component} from 'react';
import './App.css';
import usersData from './app/usersData';
import UserListItem from './app/UserListItem';
import UserFeed from '../src/app/UserFeed';
import Footer from '../src/app/footer';

class App extends Component {
  render () {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">React Users</h1>
        </header>
        <UserFeed />
        <Footer name="BIT" />
      </div>
    );
  }
}

export default App;
