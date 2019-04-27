import React, { Component } from 'react';
import channel from 'assets/image/channel.png';

import 'scss/pages/_post-listing.scss';

export default class PostListing extends Component {
  renderHeadLine() {
    return (
      <div className="post-listing__headline d-flex align-items-center justify-content-between">
        <div className="d-flex">
          <div className="post-listing__headline__avatar mr-2">
            <img className="w-100 h-100" src={channel} alt="channel" />
          </div>
          <h1 className="post-listing__headline__title">SASS Viet Nam Questions</h1>
        </div>
        <div className="post-listing__headline__ask-private">
          <a className="btn btn-primary" href="/">
            <i className="fa fa-key" aria-hidden="true" />
            &nbsp;Ask Private Question
          </a>
        </div>
      </div>
    );
  }

  renderFilter() {
    return (
      <div className="post-listing__filter d-flex align-items-center justify-content-between py-4">
        <div>100 questions</div>
        <div>
          <a href="/" className="post-listing__filter__answered mr-3">
            Answer questions
          </a>
          <div className="btn-group" role="group">
            <button
              type="button"
              className="post-listing__filter__option post-listing__filter__option--active btn btn-outline-secondary"
              title="The most recently asked questions"
            >
              Newest
            </button>
            <button type="button" className="post-listing__filter__option btn btn-outline-secondary">
              Active
            </button>

            <div className="btn-group" role="group">
              <button
                id="btn-filter-more"
                type="button"
                className="post-listing__filter__option btn btn-outline-secondary dropdown-toggle"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                More&nbsp;
              </button>
              <div className="post-listing__filter__option__more dropdown-menu dropdown-menu-right" aria-labelledby="btn-filter-more">
                <a className="dropdown-item" href="/">Bounties</a>
                <a className="dropdown-item" href="/">Votes</a>
                <a className="dropdown-item" href="/">Frequent</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  renderPosts() {
    return (
      <div className="post-listing__posts bg-warning">
        <p>You Might Not Need Redux</p>
      </div>
    );
  }

  renderRightSidebar() {
    return (
      <div className="post-listing__right-sidebar bg-info" />
    )
  }

  render() {
    return (
      <div className="post-listing d-flex">
        <div className="post-listing__quest">
          {this.renderHeadLine()}
          {this.renderFilter()}
          {/* {this.renderPosts()} */}
        </div>
        {this.renderRightSidebar()}
      </div>
    );
  }
}
