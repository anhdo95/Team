import React, { Component } from 'react'

import HeadLine from './HeadLine'

import noneAvatar from 'assets/image/none-avatar.png'
import './index.scss'

export default class PostDetail extends Component {
	renderVoteCell() {
		return (
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
		)
	}

	renderPostDescription() {
		return (
			<div className="post-detail__postcell__description pb-3">
				<div className="post-detail__postcell__description__people">
					<label className="fs-08 font-weight-bold mb-2">People asked</label>
					<div className="post-detail__postcell__owner mr-2">
						<a href="/" className="bg-profile py-1 px-2 rounded">
							Thanh Tuyen Nguyen
						</a>
						<a href="/" className="fs-08">
							edit
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
					<div className="mt-2">
						<a href="/" className="fs-08">
							edit
						</a>
					</div>
				</div>
			</div>
		)
	}

	renderQuestionStats() {
		return (
			<div className="fs-09">
				<div className="row mb-2">
					<div className="col-3 text-muted">asked</div>
					<div className="col-9">7 days ago</div>
				</div>
				<div className="row mb-2">
					<div className="col-3 text-muted">viewed</div>
					<div className="col-9">16 times</div>
				</div>
				<div className="row mb-2">
					<div className="col-3 text-muted">active</div>
					<div className="col-9">7 days ago</div>
				</div>
			</div>
		)
	}

	renderComments() {
		return (
			<div className="post-detail__comments pb-2">
				<ul>
					{/* A comment */}
					<li className="fs-075 py-2 px-4">
						<span className="text-justify">
							Keep an open mind and try to see things through your host culture’s eyes Make an
							effort to learn the local language Push yourself to make local friends Try to achieve
							a sense of stability in your life Maintain a sense of humor Get involved in the local
							community
						</span>
						<a href="/"> &ndash; AnhDo</a>
						<a href="/" className="text-muted ml-2" title="2019-04-16 14:27:38Z">
							Apr 16 at 14:27
						</a>
						<a href="/" className="post-detail__comments__edit text-danger ml-2">
							edit
						</a>
						<a href="/" className="post-detail__comments__delete text-danger ml-2">
							delete
						</a>
					</li>
					{/* A comment */}
					<li className="fs-075 py-2 px-4">
						<span className="text-justify">
							First of all, they always have clear, actual objectives and believe in themselves -
							They take responsibility with their goals strictly, To be better doing these target.
							They definitely never complain about challenging and obstacles ahead. - In addtion,
							they should control their management time well - In relationships, they have to choose
							to make friends who are already sharing their experiences and opinions to all of the
							fields. - Last but not least, mistakes surely happen overwhelmingly. But they will be
							considerably nice lessons that they should comprehend from them
						</span>
						<a href="/"> &ndash; AnhDo</a>
						<a href="/" className="text-muted ml-2" title="2019-04-16 14:27:38Z">
							Apr 16 at 14:27
						</a>
						<a href="/" className="post-detail__comments__delete text-danger ml-2">
							edit
						</a>
						<a href="/" className="post-detail__comments__delete text-danger ml-2">
							delete
						</a>
					</li>
				</ul>
				<div className="mt-2">
					<a href="/" class="fs-08">
						add a comment
					</a>
				</div>
			</div>
		)
	}

	render() {
		return (
			<div className="post-detail">
				<HeadLine />
				<div className="row mt-3">
					<div className="post-detail__main col-9">
						<div className="post-detail__content d-flex">
							{this.renderVoteCell()}

							<div className="post-detail__postcell col-11">
								<p className="fs-085 mb-3">
									I agreed with that statement. Throughout human society, being successful is always
									desirable for everybody. But what's exactly the key to success? Some people
									believe that they had better be distinct from others, while other people believe
									that being like others is the best choice. However, in my opinion, we should be
									different from others while studying and working. But being like others in daily
									life.
								</p>
								{this.renderPostDescription()}
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
								{this.renderComments()}
							</div>
						</div>
						<section className="post-detail__answers mt-4">
							<header className="d-flex justify-content-between align-items-center">
								<h3 className="d-inline-block font-weight-bold">300 Answers</h3>
								<ul class="nav nav-tabs" id="myTab" role="tablist">
									<li class="nav-item">
										<a
											class="nav-link active"
											id="home-tab"
											data-toggle="tab"
											href="#home"
											role="tab"
											aria-controls="home"
											aria-selected="true"
										>
                      Home
										</a>
									</li>
									<li class="nav-item">
										<a
											class="nav-link"
											id="profile-tab"
											data-toggle="tab"
											href="#profile"
											role="tab"
											aria-controls="profile"
											aria-selected="false"
										>
											Profile
										</a>
									</li>
									<li class="nav-item">
										<a
											class="nav-link"
											id="contact-tab"
											data-toggle="tab"
											href="#contact"
											role="tab"
											aria-controls="contact"
											aria-selected="false"
										>
											Contact
										</a>
									</li>
								</ul>
							</header>
							<div class="tab-content" id="myTabContent">
								<div
									class="tab-pane fade show active"
									id="home"
									role="tabpanel"
									aria-labelledby="home-tab"
								>
									Home
								</div>
								<div
									class="tab-pane fade"
									id="profile"
									role="tabpanel"
									aria-labelledby="profile-tab"
								>
									Profile
								</div>
								<div
									class="tab-pane fade"
									id="contact"
									role="tabpanel"
									aria-labelledby="contact-tab"
								>
									Contact
								</div>
							</div>
						</section>
					</div>
					<div className="col-3">{this.renderQuestionStats()}</div>
				</div>
			</div>
		)
	}
}
