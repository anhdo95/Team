import React, { PureComponent } from 'react'

import channel from 'assets/image/channel.png'
import './index.scss'

export default class HeadLine extends PureComponent {
	render() {
		return (
			<div className="post-detail-questions-headline">
				<div className="d-flex">
					<div className="post-detail-questions-headline__avatar mr-2">
						<img className="w-100 h-100" src={channel} alt="channel" />
					</div>
					<h1 className="h3">SASS Viet Nam Questions</h1>
				</div>
				<div>
					<a className="btn btn-primary py-2 px-3 fs-085" href="/">
						<i className="fa fa-key" aria-hidden="true" />
						&nbsp;Ask Private Question
					</a>
				</div>
			</div>
		)
	}
}
