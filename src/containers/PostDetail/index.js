import React, { Component } from 'react'

import HeadLine from './HeadLine'
import Demand from './Demand'
import Answers from './Answers'
import QuestionStats from './QuestionStats'

import './index.scss'

export default class PostDetail extends Component {
	render() {
		return (
			<div className="post-detail">
				<HeadLine />
				<div className="row mt-3">
					<div className="col-9">
						<Demand />
						<Answers />
					</div>
					<div className="col-3">
						<QuestionStats />
					</div>
				</div>
			</div>
		)
	}
}
