import React, { Component } from 'react'

import HeadLine from './HeadLine'

import noneAvatar from 'assets/image/none-avatar.png'
import './index.scss'

export default class PostDetail extends Component {
	render() {
		return (
			<div className="post-detail">
				<HeadLine />

				<div className="post-detail__content d-flex">
					<div className="post-detail__votecell text-center">
						<div className="post-detail__votecell__up active" />
						<div className="text-muted font-weight-light py-3">2000</div>
						<div className="post-detail__votecell__down" />
						<div className="post-detail__votecell__favorite active">
							<div>
								<i class="fa fa-star" aria-hidden="true" />
							</div>
							<div className="mt-1 fs-08">100</div>
						</div>
					</div>

					<div className="post-detail__postcell col-8">
						<p className="fs-085 mb-3">
							I agreed with that statement. Throughout human society, being successful is always
							desirable for everybody. But what's exactly the key to success? Some people believe
							that they had better be distinct from others, while other people believe that being
							like others is the best choice. However, in my opinion, we should be different from
							others while studying and working. But being like others in daily life.
						</p>
						<div className="post-detail__postcell__description pb-3">
							<div className="post-detail__postcell__description__people">
								<label className="fs-08 font-weight-bold mb-2">People asked</label>
								<div className="post-detail__postcell__owner mr-2">
									<a href="/" className="bg-profile py-1 px-2 rounded">
										Thanh Tuyen Nguyen
									</a>
									<a href="/" className="fs-08">
										Edit
									</a>
								</div>
							</div>
							<div>
								<div className="fs-08 font-weight-bold mb-2">Tags</div>
								<div className="d-flex flex-wrap">
									<a href="/" className="tag mr-1">
										successful
									</a>
									<a href="/" className="tag mr-1">
										different
									</a>
									<a href="/" className="tag mr-1">
										to-be-dare
									</a>
									<a href="/" className="tag mr-1">
										to-be-dare
									</a>
									<a href="/" className="tag mr-1">
										to-be-dare
									</a>
								</div>
							</div>
						</div>
						<div className="py-4 fs-085 d-flex justify-content-between border-bottom">
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
							<div className="bg-profile p-2 pr-5 rounded">
								<a href="/" className="text-muted fs-075">
									asked <span title="2019-04-17 08:30:56Z">Apr 17 at 8:30</span>
								</a>
								<div className="d-flex">
									<a href="/" className="avatar-demension mr-2">
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

						{/* Continue to build (Break out the component) */}

						<div className="row pb-2">
							<a href="/">Add a comment</a>
						</div>
					</div>
					<div className="col-3 fs-08">
						<div className="row mb-2">
							<div className="col-md-4 text-muted">asked</div>
							<div className="col-md-8">7 days ago</div>
						</div>
						<div className="row mb-2">
							<div className="col-md-4 text-muted">viewed</div>
							<div className="col-md-8">16 times</div>
						</div>
						<div className="row mb-2">
							<div className="col-md-4 text-muted">active</div>
							<div className="col-md-8">7 days ago</div>
						</div>
					</div>
				</div>

				<div id="sidebar" />
			</div>
		)
	}
}
