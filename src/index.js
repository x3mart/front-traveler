import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';


const customHistory = createBrowserHistory();

// import registerServiceWorker from '../public/registerServiceWorker';

ReactDOM.render(
  <Router history={customHistory}>
    <App />
  </Router>,
  document.getElementById('root'));

// registerServiceWorker();