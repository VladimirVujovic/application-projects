import React, {Component} from 'react';
import './App.css';
import Header from './app/partials/Header';
import Footer from './app/partials/Footer';
// import Footer from './partials/Footer';

class App extends Component {
  render () {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}

export default App;
