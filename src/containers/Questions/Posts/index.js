import React, { PureComponent } from 'react'
import classNames from 'classnames'

import noneAvatar from 'assets/image/none-avatar.png'
import './index.scss'

export default class Posts extends PureComponent {
	render() {
		const data = new Array(10).fill(null)
		const answered = true

		const answerStatsClass = classNames('text-center fs-07 p-1 mb-2', {
			'rounded border border-success text-success': answered,
		})

		return (
			<div className="post-detail-questions-posts">
				{data.map((item, index) => (
					<div className="post-detail-questions-posts__container" key={index}>
						<div className="text-muted mr-3">
							<div className="text-center fs-07 p-1 mb-2">
								<div className="fs-09">1000</div>
								<span>votes</span>
							</div>
							<div className={answerStatsClass}>
								<div className="fs-09">40</div>
								<span>answers</span>
							</div>
							<div className="text-center fs-07 p-1 mb-2">
								<div>9292 views</div>
							</div>
						</div>
						<div className="post-detail-questions-posts__brief">
							<h3 className="mb-2">
								<a href="/" className="post-detail-questions-posts__brief__title">
									What's food customs in your country's traditional meals that may shock foreigners?
								</a>
							</h3>
							<div className="fs-085 mb-3">
								Tags are vital for organizing questions so that they can be found later. They also
								make it possible for you to follow and search particular topics. What tags are
								available to use and where are they ...
							</div>
							<div>
								<a href="/" className="tag mr-1">
									Redux
								</a>
								<a href="/" className="tag mr-1">
									ReactJS
								</a>
								<a href="/" className="tag mr-1">
									Flux
								</a>
								<a href="/" className="tag mr-1">
									State
								</a>
								<a href="/" className="tag mr-1">
									Best-Practice
								</a>
							</div>
							<div className="post-detail-questions-posts__brief__userinfo float-right">
								<div>
									<a href="/" className="text-muted fs-075">
										asked <span title="2019-04-17 08:30:56Z">Apr 17 at 8:30</span>
									</a>
								</div>
								<div className="d-flex">
									<a href="/" className="post-detail-questions-posts__brief__userinfo__avatar mr-2">
										<img src={noneAvatar} className="w-100 h-100" alt="" />
									</a>
									<div className="fs-075">
										<div className="mb-1">
											<a href="/" className="fs-075">
												Anh Do Dinh
											</a>
										</div>
										<span className="font-weight-bold">10</span>
										<span className="text-danger font-weight-bold">
											<span>&nbsp;●</span>
											<span>5</span>
										</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		)
	}
}
