import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import config from 'config';

import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'App.scss';

import Layout from 'containers/Layout';

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          {config.router.map(route => (
            <Route exact path={route.path} component={route.component} />
          ))}
        </Layout>
      </Router>
    );
  }
}

export default App;
