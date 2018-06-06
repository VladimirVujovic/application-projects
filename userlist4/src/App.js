import React from 'react';
import './App.css';
// import UserListItem from './app/UserListItem';
import UserFeed from '../src/app/UserFeed';
import Footer from '../src/app/footer';
import Header from '../src/app/Header';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showButton: false,
    };
  }
  handlerHeader = () => {
    this.setState ((prevState, props) => {
      return {showButton: !prevState.showButton};
    });
  };

  render () {
    return (
      <div className="App">
        <Header handler={this.handlerHeader} />
        <UserFeed show={this.state.showButton} />
        <Footer name="BIT" />
      </div>
    );
  }
}

export default App;
