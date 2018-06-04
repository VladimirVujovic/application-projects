import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
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
        <Footer />
      </div>
    );
  }
}

export default App;
