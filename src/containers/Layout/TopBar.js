import React, { Component } from 'react';
import noneAvatar from 'assets/image/channel.png';

export default class TopBar extends Component {
  render() {
    return (
      <header className="top-bar position-fixed w-100">
        <div className="top-bar__container d-flex h-100 mx-auto">
          <div className="top-bar__logo">
            <a className="d-flex align-items-center h-100 px-2" href="/">
              <i className="fa fa-stack-overflow display-4 text-white" aria-hidden="true" />
              <span className="top-bar__logo__brand text-white">
                &nbsp;Sass<b>VietNam</b>
              </span>
            </a>
          </div>
          <form action="" className="top-bar__search-bar d-flex align-items-center px-2">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <select className="top-bar__search-bar__channel form-control input-group-text">
                  <option selected>All</option>
                  <option value="1">Public</option>
                  <option value="2">SASS Viet Nam</option>
                </select>
              </div>
              <input
                type="text"
                className="top-bar__search-bar__textbox form-control"
                placeholder="Search..."
              />
              <button
                type="button"
                className="top-bar__search-bar__submit btn btn-primary btn-sm position-absolute"
              >
                <i className="fa fa-search" aria-hidden="true" />
              </button>
            </div>
          </form>
          <ul className="top-bar__links d-flex justify-content-end align-items-center">
            <li className="top-bar__links__item top-bar__links__item--profile h-100">
              <a className="d-flex align-items-center h-100" href="/">
                <div className="avatar">
                  <img className="w-100 h-100" src={noneAvatar} alt="None avatar" />
                </div>
                <div className="repulation text-white font-weight-bold">&nbsp;10</div>
                <div className="bronze text-danger font-weight-bold">
                  <span>&nbsp;●</span>
                  <span>5</span>
                </div>
              </a>
            </li>
            <li className="top-bar__links__item h-100 dropdown">
              <a
                href="/"
                id="inbox-message"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <i className="fa fa-inbox text-white" aria-hidden="true" />
              </a>

              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="inbox-message">
                <div className="alert alert-primary" role="alert">
                  This is a primary alert—check it out!
                </div>
                <div className="dropdown-divider" />
                <a className="dropdown-item" href="/">
                  Separated link
                </a>
              </div>
            </li>
            <li className="top-bar__links__item h-100">
              <a href="/">
                <i className="fa fa-trophy text-white" aria-hidden="true" />
              </a>
            </li>
            <li className="top-bar__links__item h-100">
              <a href="/">
                <i className="fa fa-question-circle text-white" aria-hidden="true" />
              </a>
            </li>
            <li className="top-bar__links__item h-100">
              <a href="/">
                <i className="fa fa-list text-white" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}
