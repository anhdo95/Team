import React, { Component } from 'react';
import './index.scss';

export default class Avatar extends Component {
  render() {
    const sizeClass = this.props.size === 'small' ? 'avatar-sm' : 'avatar-md';
    const classes = `d-flex align-items-center ${sizeClass} justify-content-center`;
    return (
      <div className={classes}>
        <div>{this.props.text}</div>
      </div>
    );
  }
}
