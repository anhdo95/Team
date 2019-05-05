import React, { PureComponent } from 'react'

import './index.scss'

class Description extends PureComponent {
	render() {
		const { owner, tags } = this.props

		return (
			<div className="post-detail-description pb-3 border-bottom">
				<div className="post-detail-description__people">
					<label className="fs-08 font-weight-bold mb-2">People asked</label>
					<div className="post-detail-description__owner mr-2">
						<a href="/" className="bg-profile py-1 px-2 rounded">
							{owner}
						</a>
						<a href="/" className="fs-08">
							edit
						</a>
					</div>
				</div>
				<div>
					<div className="fs-08 font-weight-bold mb-2">Tags</div>
					<div className="d-flex flex-wrap">
						{tags.map((tag) => (
							<a href="/" className="tag mr-1" key={tag}>
								{tag}
							</a>
						))}
					</div>
					<div className="mt-2">
						<a href="/" className="fs-08">
							edit
						</a>
					</div>
				</div>
			</div>
		)
	}
}

Description.defaultProps = {
	owner: '',
	tags: [],
}

export default Description
