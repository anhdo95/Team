import React, { PureComponent } from 'react'

import './index.scss'

class PostMenu extends PureComponent {
	render() {
		return (
			<div>
				<a href="/" className="text-muted mr-2">
					share
				</a>
				<a href="/" className="text-muted mr-2">
					edit
				</a>
				<a href="/" className="text-muted mr-2">
					close
				</a>
				<a href="/" className="text-muted mr-2">
					delete
				</a>
			</div>
		)
	}
}

PostMenu.defaultProps = {}

export default PostMenu
