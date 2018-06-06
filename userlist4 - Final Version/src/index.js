import React from 'react';
import {HashRouter} from 'react-router-dom';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render (
  <HashRouter><App /></HashRouter>,
  document.getElementById ('root')
);
registerServiceWorker ();
