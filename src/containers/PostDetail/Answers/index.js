import React, { Component } from 'react'

export default class Answers extends Component {
	render() {
		return (
			<section className="post-detail-answers mt-4">
				<header className="d-flex justify-content-between align-items-center">
					<h3 className="d-inline-block font-weight-bold">300 Answers</h3>
					<ul className="nav nav-tabs" id="myTab" role="tablist">
						<li className="nav-item">
							<a
								className="nav-link active"
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
						<li className="nav-item">
							<a
								className="nav-link"
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
						<li className="nav-item">
							<a
								className="nav-link"
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
				<div className="tab-content" id="myTabContent">
					<div
						className="tab-pane fade show active"
						id="home"
						role="tabpanel"
						aria-labelledby="home-tab"
					>
						Home
					</div>
					<div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
						Profile
					</div>
					<div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
						Contact
					</div>
				</div>
			</section>
		)
	}
}
