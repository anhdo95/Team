import React, { PureComponent } from 'react'

import Comment from 'components/Comment'

import './index.scss'

class Comments extends PureComponent {
	render() {
		const comments = [
			{
				text: `First of all, they always have clear, actual objectives and believe in themselves -
      They take responsibility with their goals strictly, To be better doing these target.
      They definitely never complain about challenging and obstacles ahead. - In addtion,
      they should control their management time well - In relationships, they have to choose
      to make friends who are already sharing their experiences and opinions to all of the
      fields. - Last but not least, mistakes surely happen overwhelmingly. But they will be
      considerably nice lessons that they should comprehend from them`,
				commentator: 'AnhDo',
				date: 'Apr 16 at 14:27',
				actions: {
					edit: true,
					delete: true,
				},
			},
			{
				text: `Keep an open mind and try to see things through your host culture’s eyes Make an effort to learn the local language Push yourself to make local friends Try to achieve a sense of stability in your life Maintain a sense of humor Get involved in the local community`,
				commentator: 'AnhDo',
				date: 'Apr 16 at 14:27',
				actions: {
					edit: true,
					delete: false,
				},
			},
		]

		return (
			<div className="post-detail-demand-comments pb-2">
				<ul>
					{comments.map((cm) => (
						<Comment {...cm} />
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

Comments.defaultProps = {}

export default Comments
