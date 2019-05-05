import React, { PureComponent } from 'react'

import './index.scss'

export default class QuestionStats extends PureComponent {
	render() {
		return (
			<div className="fs-09">
				<div className="row mb-2">
					<div className="col-3 text-muted">asked</div>
					<div className="col-9">7 days ago</div>
				</div>
				<div className="row mb-2">
					<div className="col-3 text-muted">viewed</div>
					<div className="col-9">16 times</div>
				</div>
				<div className="row mb-2">
					<div className="col-3 text-muted">active</div>
					<div className="col-9">7 days ago</div>
				</div>
			</div>
		)
	}
}
