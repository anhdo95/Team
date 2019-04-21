import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.scss";

import Layout from "containers/Layout";
import Questions from "./containers/Questions";
import PostDetail from "./containers/PostDetail";

class App extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Questions} />
          <Route exact path="/questions" component={Questions} />
          <Route exact path="/questions/:questionId" component={PostDetail} />
        </Layout>
      </Router>
    );
  }
}

export default App;
