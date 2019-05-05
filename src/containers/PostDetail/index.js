import React, { Component } from 'react'

import HeadLine from './HeadLine'
import Demand from './Demand'
import Answers from './Answers'
import QuestionStats from './QuestionStats'

import './index.scss'

export default class PostDetail extends Component {
	renderAddAnswer() {
		return (
			<div className="mt-3">
				<a className="btn btn-primary py-2 px-3 fs-085" href="/">
					<i className="fa fa-key" aria-hidden="true" />
					&nbsp;Add Another Answer in SASS Viet Nam
				</a>
			</div>
		)
	}

	render() {
		return (
			<div className="post-detail">
				<HeadLine />
				<div className="row mt-3">
					<div className="col-9">
						<Demand />
						<Answers />
						{this.renderAddAnswer()}
					</div>
					<div className="col-3">
						<QuestionStats />
					</div>
				</div>
			</div>
		)
	}
}
