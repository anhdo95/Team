import React, { PureComponent } from 'react'

import Comment from 'components/Comment'

import './index.scss'

class Comments extends PureComponent {
	render() {
		return (
			<div className="pb-2">
				<ul>
					{this.props.list.map((cm) => (
						<Comment key={cm.id} {...cm} />
					))}
				</ul>
				<div className="mt-2">
					<a href="/" className="fs-08">
						add a comment
					</a>
				</div>
			</div>
		)
	}
}

Comments.defaultProps = {
	list: [],
}

export default Comments
