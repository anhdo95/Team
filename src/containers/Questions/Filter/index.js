import React, { PureComponent } from 'react'

import './index.scss'

export default class Filter extends PureComponent {
	render() {
		return (
			<div className="post-listing-questions-filter py-4">
				<div>100 questions</div>
				<div>
					<a href="/" className="fs-08 mr-3">
						Answer questions
					</a>
					<div className="btn-group" role="group">
						<button
							type="button"
							className="post-listing-questions-filter__option post-listing-questions-filter__option--active btn"
							title="The most recently asked questions"
						>
							Newest
						</button>
						<button type="button" className="post-listing-questions-filter__option btn">
							Active
						</button>

						<div className="btn-group" role="group">
							<button
								id="btn-filter-more"
								type="button"
								className="post-listing-questions-filter__option btn dropdown-toggle"
								data-toggle="dropdown"
							>
								More&nbsp;
							</button>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="btn-filter-more">
								<a className="dropdown-item fs-08" href="/">
									Bounties
								</a>
								<a className="dropdown-item fs-08" href="/">
									Votes
								</a>
								<a className="dropdown-item fs-08" href="/">
									Frequent
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
