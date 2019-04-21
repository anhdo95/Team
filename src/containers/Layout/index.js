import React, { Component } from "react";
import channel from "assets/image/channel.png";
import noneAvatar from "assets/image/channel.png";

export default class Layout extends Component {
  render() {
    return (
      <div>
        <header class="top-bar position-fixed w-100">
          <div class="top-bar__container d-flex h-100 mx-auto">
            <div class="top-bar__logo">
              <a class="d-flex align-items-center h-100 px-2" href="/">
                <i
                  class="fa fa-stack-overflow display-4 text-white"
                  aria-hidden="true"
                />
                <span class="top-bar__logo__brand text-white">
                  &nbsp;Sass<b>VietNam</b>
                </span>
              </a>
            </div>
            <form
              action=""
              class="top-bar__search-bar d-flex align-items-center px-2"
            >
              <div class="input-group input-group-sm">
                <div class="input-group-prepend">
                  <select class="top-bar__search-bar__channel form-control input-group-text">
                    <option selected>All</option>
                    <option value="1">Public</option>
                    <option value="2">SASS Viet Nam</option>
                  </select>
                </div>
                <input
                  type="text"
                  class="top-bar__search-bar__textbox form-control"
                  placeholder="Search..."
                />
                <button
                  type="button"
                  class="top-bar__search-bar__submit btn btn-primary btn-sm position-absolute"
                >
                  <i class="fa fa-search" aria-hidden="true" />
                </button>
              </div>
            </form>
            <ul class="top-bar__links d-flex justify-content-end align-items-center">
              <li class="top-bar__links__item top-bar__links__item--profile h-100">
                <a class="d-flex align-items-center h-100" href="/">
                  <div class="avatar">
                    <img
                      class="w-100 h-100"
                      src={noneAvatar}
                      alt="None avatar"
                    />
                  </div>
                  <div class="repulation text-white font-weight-bold">
                    &nbsp;10
                  </div>
                  <div class="bronze text-danger font-weight-bold">
                    <span>&nbsp;●</span>
                    <span>5</span>
                  </div>
                </a>
              </li>
              <li class="top-bar__links__item h-100 dropdown">
                <a
                  href="/"
                  id="inbox-message"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  <i class="fa fa-inbox text-white" aria-hidden="true" />
                </a>

                <div
                  class="dropdown-menu dropdown-menu-right"
                  aria-labelledby="inbox-message"
                >
                  <div class="alert alert-primary" role="alert">
                    This is a primary alert—check it out!
                  </div>
                  <div class="dropdown-divider" />
                  <a class="dropdown-item" href="/">
                    Separated link
                  </a>
                </div>
              </li>
              <li class="top-bar__links__item h-100">
                <a href="/">
                  <i class="fa fa-trophy text-white" aria-hidden="true" />
                </a>
              </li>
              <li class="top-bar__links__item h-100">
                <a href="/">
                  <i
                    class="fa fa-question-circle text-white"
                    aria-hidden="true"
                  />
                </a>
              </li>
              <li class="top-bar__links__item h-100">
                <a href="/">
                  <i class="fa fa-list text-white" aria-hidden="true" />
                </a>
              </li>
            </ul>
          </div>
        </header>

        <main class="main mx-auto">
          <div class="left-sidebar position-fixed">
            <nav>
              <a class="left-sidebar__channel d-block" href="/">
                <div class="left-sidebar__channel__thumbnail mx-auto">
                  <img
                    class="img-thumbnail w-100 h-100"
                    src={channel}
                    alt="SassVietNam channel"
                  />
                </div>
                <div class="left-sidebar__channel__name mt-3 text-center">
                  <h3>SASS Viet Nam</h3>
                </div>
              </a>
              <div class="left-sidebar__private-team pb-3 text-center text-muted">
                <i class="fa fa-key" aria-hidden="true" />
                &nbsp;Private team
              </div>
              <ol class="left-sidebar__links">
                <li class="left-sidebar__links__item left-sidebar__links__item--active">
                  <a href="/">Questions </a>
                </li>
                <li class="left-sidebar__links__item">
                  <a href="/">Tags </a>
                </li>
                <li class="left-sidebar__links__item">
                  <a href="/">Users </a>
                </li>
              </ol>
            </nav>
          </div>

          <section class="content bg-light">
            <div class="content__inner">
              {/* <div class="content__headline d-flex">
                <div class="content__headline__avatar">
                  <img class="w-100 h-100" src={channel} alt="channel" />
                </div>
                <h1>SASS Viet Nam Questions</h1>
                <div>
                  <a class="btn btn-primary" href="/">
                    <i class="fa fa-key" aria-hidden="true" />
                    &nbsp;Ask Private Question
                  </a>
                </div>
              </div>
              <div class="content__inner__questions bg-warning" />
              <div class="content__inner__right-sidebar bg-info" /> */}
              {this.props.children}
            </div>
          </section>
        </main>

        <footer class="footer bg-dark">Footer</footer>
      </div>
    );
  }
}
