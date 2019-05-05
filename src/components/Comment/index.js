import React, { PureComponent } from 'react'

import './index.scss'

class Comment extends PureComponent {
	renderEditing() {
		if (!this.props.actions.edit) return null

		return (
			<a href="/" className="comment__edit text-danger ml-2">
				edit
			</a>
		)
	}

	renderDeletion() {
		if (!this.props.actions.delete) return null

		return (
			<a href="/" className="comment__delete text-danger ml-2">
				delete
			</a>
		)
	}

	render() {
		const { text, commentator, date } = this.props

		return (
			<li className="comment fs-075 py-2 px-4 border-bottom">
				<span className="text-justify">{text}</span>
				<a href="/"> &ndash; {commentator}</a>
				<a href="/" className="text-muted ml-2" title="2019-04-16 14:27:38Z">
					{date}
				</a>
				{this.renderEditing()}
				{this.renderDeletion()}
			</li>
		)
	}
}

Comment.defaultProps = {
	text: '',
	commentator: '',
	date: '',
	actions: {
		edit: false,
		delete: false,
	},
}

export default Comment
