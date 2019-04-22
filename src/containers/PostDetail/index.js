import React, { Component } from 'react';
import Avatar from 'components/Avatar';
import './index.scss';

export default class PostDetail extends Component {
  render() {
    return (
      <div>
        <header className="d-flex align-items-center mb-3">
          <Avatar text="S" size="small" />
          <h1 className="heading">Do you think people should be different from others?</h1>
          <button className="btn btn-primary ml-auto">Ask question</button>
        </header>

      </div>
    );
  }
}
