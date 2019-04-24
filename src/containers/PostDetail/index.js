import React, { Component } from 'react';
import Avatar from 'components/Avatar';
import './index.scss';

export default class PostDetail extends Component {
  render() {
    return (
      <div>
        <div id="question-header" className="d-flex align-items-center mb-3">
          <Avatar text="S" size="small" color="#fff" backgroundColor="gray" />
          <h1 className="post-heading">Do you think people should be different from others?</h1>
          <button className="btn btn-primary ml-auto">Ask question</button>
        </div>

        <div id="mainbar" className="d-flex">
          <div className="column1 col-1" />
          <div className="column2 col-8">
            <p className="normal mb-3">
              I agreed with that statement. Throughout human society, being successful is always
              desirable for everybody. But what's exactly the key to success? Some people believe
              that they had better be distinct from others, while other people believe that being
              like others is the best choice. However, in my opinion, we should be different from
              others while studying and working. But being like others in daily life.
            </p>
            <div className="row border-bottom pb-3">
              <div className="d-flex flex-column col-6">
                <label className="label-bold p-1 mb-2">People asked</label>
                <div>
                  <a href="/" className="owner mr-2">
                    Thanh Tuyen Nguyen
                  </a>
                  <a href="/" className="inline-action">
                    Edit
                  </a>
                </div>
              </div>
              <div className="d-flex flex-column col-6">
                <label className="label-bold p-1 mb-2">Tags</label>
                <span className="">
                  <a href="/" className="post-tag m-1 p-1">
                    successful
                  </a>
                  <a href="/" className="post-tag m-1 p-1">
                    different
                  </a>
                  <a href="/" className="post-tag m-1 p-1">
                    to-be-dare
                  </a>
                  <a href="/" className="post-tag m-1 p-1">
                    to-be-dare
                  </a>
                  <a href="/" className="post-tag m-1 p-1">
                    to-be-dare
                  </a>
                </span>
              </div>
            </div>
            <div className="row mt-4 action">
              <div className="col-6">
                <span>
                  <a href="/" className="action-item">
                    share
                  </a>
                  <a href="/" className="action-item">
                    edit
                  </a>
                  <a href="/" className="action-item">
                    close
                  </a>
                  <a href="/" className="action-item">
                    delete
                  </a>
                </span>
              </div>
              <div className="col-6">
                <p className="mb-1">asked Apr 16 at 13:53</p>
                <div className="d-flex align-content-center">
                  <Avatar text="A" size="small" textColer="#fff" backgroundColor="#C2185B" />
                  <div className="d-flex flex-column justify-content-center">Anh Do</div>
                </div>
              </div>
            </div>
            <div className="row border-bottom pb-2">
              <a href="/">Add a comment</a>
            </div>
          </div>
          <div className="column3 col-3 question-stats">
            <div className="row">
              <div className="col-md-4 label-key">asked</div>
              <div className="col-md-8">7 days ago</div>
            </div>
            <div className="row">
              <div className="col-md-4 label-key">viewed</div>
              <div className="col-md-8">16 times</div>
            </div>
            <div className="row">
              <div className="col-md-4 label-key">active</div>
              <div className="col-md-8">7 days ago</div>
            </div>
          </div>
        </div>

        <div id="sidebar" />
      </div>
    );
  }
}
