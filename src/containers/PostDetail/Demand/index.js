import React, { Component } from 'react'

import VoteCell from 'components/VoteCell'
import Profile from 'components/Profile'

import Description from './Description'
import Menu from './Menu'
import Comments from './Comments'

import './index.scss'

export default class Demand extends Component {
	renderVoteCell() {
		const props = {
			extraClass: 'mt-1',
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
						<Menu />
						{this.renderProfile()}
					</div>

					<Comments />
				</div>
			</div>
		)
	}
}
