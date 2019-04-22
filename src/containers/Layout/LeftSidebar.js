import React, { Component } from 'react';
import channel from 'assets/image/channel.png';

export default class LeftSidebar extends Component {
  render() {
    return (
      <div className="left-sidebar position-fixed">
        <nav>
          <a className="left-sidebar__channel d-block" href="/">
            <div className="left-sidebar__channel__thumbnail mx-auto">
              <img className="img-thumbnail w-100 h-100" src={channel} alt="SassVietNam channel" />
            </div>
            <div className="left-sidebar__channel__name mt-3 text-center">
              <h3>SASS Viet Nam</h3>
            </div>
          </a>
          <div className="left-sidebar__private-team pb-3 text-center text-muted">
            <i className="fa fa-key" aria-hidden="true" />
            &nbsp;Private team
          </div>
          <ol className="left-sidebar__links">
            <li className="left-sidebar__links__item left-sidebar__links__item--active">
              <a href="/">Questions </a>
            </li>
            <li className="left-sidebar__links__item">
              <a href="/">Tags </a>
            </li>
            <li className="left-sidebar__links__item">
              <a href="/">Users </a>
            </li>
          </ol>
        </nav>
      </div>
    );
  }
}
