import React, { Component } from 'react';

import TopBar from './TopBar';
import LeftSidebar from './LeftSidebar';
import Footer from './Footer';

export default class Layout extends Component {
  render() {
    return (
      <>
        <TopBar />
        <main className="main mx-auto">
          <LeftSidebar />
          <section className="content bg-light">
            <div className="content__inner">{this.props.children}</div>
          </section>
        </main>
        <Footer />
      </>
    );
  }
}
