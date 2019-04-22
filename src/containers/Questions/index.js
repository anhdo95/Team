import React, { Component } from 'react';
import channel from 'assets/image/channel.png';

export default class PostListing extends Component {
  render() {
    return (
      <>
        <div className="content__headline d-flex">
          <div className="content__headline__avatar">
            <img className="w-100 h-100" src={channel} alt="channel" />
          </div>
          <h1>SASS Viet Nam Questions</h1>
          <div>
            <a className="btn btn-primary" href="/">
              <i className="fa fa-key" aria-hidden="true" />
              &nbsp;Ask Private Question
            </a>
          </div>
        </div>
        <div className="content__inner__questions bg-warning" />
        <div className="content__inner__right-sidebar bg-info" />
      </>
    );
  }
}
