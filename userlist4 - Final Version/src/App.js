import React from 'react';
import './App.css';
import DataService from '../src/services/DataService';
import UserFeed from './app/Users/UserFeed';
import Footer from '../src/app/footer';
import Header from '../src/app/Header';
import AboutPage from './app/About/AboutPage';

import {Switch, Route, Redirect} from 'react-router-dom';

class App extends React.Component {
  constructor (props) {
    super (props);
    this.state = {
      showButton: false,
      users: [],
    };
  }
  componentDidMount () {
    DataService.getUsers ().then (data => {
      this.setState ({users: data});
    }); //objekat je data,a result je niz. map se poziva nad nizom.
  }

  handlerHeader = () => {
    this.setState ((prevState, props) => {
      return {showButton: !prevState.showButton};
    });
  };
  handlerRefresh = () => {
    DataService.getUsers ().then (data => {
      this.setState ({users: data});
    });
  };

  render () {
    return (
      <div className="App">
        <Header
          handler={this.handlerHeader}
          change={this.state.showButton}
          refresh={this.handlerRefresh.bind (this)}
        />
        <Switch>
          <Route exact path="/" component={UserFeed} />
          <Route path="/about" component={AboutPage} />

        </Switch>

        {/* <UserFeed show={this.state.showButton} users={this.state.users} /> */}
        <Footer name="BIT" />
      </div>
    );
  }
}

export default App;
