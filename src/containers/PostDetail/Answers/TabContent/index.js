import React, { PureComponent } from 'react'

import VoteCell from 'components/VoteCell'
import Profile from 'components/Profile'
import PostMenu from 'components/PostMenu'
import Comments from 'components/Comments'

import './index.scss'

class TabContent extends PureComponent {
	renderVoteCell() {
		const props = {
			extraClass: 'mt-1',
			display: {
				accept: true,
			},
			actives: {
				up: false,
				down: false,
				accept: true,
			},
			viewCount: 1000,
		}

		return <VoteCell {...props} />
	}

	renderProfile() {
		const props = {
			date: 'Apr 17 at 8:30',
			displayName: 'Anh Do Dinh',
		}

		return <Profile {...props} />
	}

	renderComments() {
		const list = [
			{
				id: 1,
				text: `Any suggestion to be different from the crowd`,
				commentator: 'AnhDo',
				date: 'Apr 16 at 14:27',
				actions: {
					edit: false,
					delete: false,
				},
			},
			{
				id: 2,
				text: `Comments are used to ask for clarification or to point out problems in the post. Outdated comments may get deleted`,
				commentator: 'AnhDo',
				date: 'Apr 16 at 14:27',
				actions: {
					edit: true,
					delete: false,
				},
			},
		]

		return <Comments list={list} />
	}

	render() {
		const answers = [
			{
				id: 1,
				postText: `Absolutely should. You are a unique column in a table. You have a indexer haha.`,
			},
			{
				id: 2,
				postText: `Exploit (v): use sth/sb that helps you or unfairly for your own aims + You can't absolutely exploit a such guaranteed system`,
			},
		]

		return answers.map((answer) => (
			<div className="d-flex mt-3 border-bottom" key={answer.id}>
				{this.renderVoteCell()}

				<div className="col-11">
					<p className="fs-085 mb-3">{answer.postText}</p>
					<div className="py-4 fs-085 d-flex justify-content-between border-bottom">
						<PostMenu />
						{this.renderProfile()}
					</div>

					{this.renderComments()}
				</div>
			</div>
		))
	}
}

TabContent.defaultProps = {}

export default TabContent
