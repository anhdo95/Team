import React, { Component } from 'react'

import VoteCell from 'components/VoteCell'
import Profile from 'components/Profile'
import PostMenu from 'components/PostMenu'
import Comments from 'components/Comments'

import Description from './Description'

import './index.scss'

export default class Demand extends Component {
	renderVoteCell() {
		const props = {
			extraClass: 'mt-1',
			display: {
				favorite: true,
			},
			actives: {
				up: false,
				down: false,
				favorite: false,
			},
			viewCount: 2000,
			favoriteCount: 100,
		}

		return <VoteCell {...props} />
	}

	renderDescription() {
		const props = {
			owner: 'Thanh Tuyen Nguyen',
			tags: ['successful', 'respect', 'to-be-dare', 'asperation', 'encouraging'],
		}

		return <Description {...props} />
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
				id: 2,
				text: `Keep an open mind and try to see things through your host culture’s eyes Make an effort to learn the local language Push yourself to make local friends Try to achieve a sense of stability in your life Maintain a sense of humor Get involved in the local community`,
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
		const postText = `I agreed with that statement. Throughout human society, being successful is always
    desirable for everybody. But what's exactly the key to success? Some people
    believe that they had better be distinct from others, while other people believe
    that being like others is the best choice. However, in my opinion, we should be
    different from others while studying and working. But being like others in daily
    life.`

		return (
			<div className="post-detail-demand d-flex">
				{this.renderVoteCell()}

				<div className="col-11">
					<p className="fs-085 mb-3">{postText}</p>
					{this.renderDescription()}
					<div className="py-4 fs-085 d-flex justify-content-between border-bottom">
						<PostMenu />
						{this.renderProfile()}
					</div>

					{this.renderComments()}
				</div>
			</div>
		)
	}
}
