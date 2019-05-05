import React, { Component } from 'react'

import TabHeader from './TabHeader'
import TabContent from './TabContent'

export default class Answers extends Component {
	constructor(props) {
		super(props)

		this.tabHeaders = ['active', 'oldest', 'votes']

		this.state = {
			currentTabHeader: this.tabHeaders[0],
		}
	}

	handleTabHeaderChange = (tab) => {
		this.setState({
			currentTabHeader: tab,
		})
	}

	render() {
		return (
			<section className="post-detail-answers mt-4">
				<header className="d-flex justify-content-between align-items-center border-bottom">
					<h3 className="d-inline-block font-weight-bold">300 Answers</h3>
					<TabHeader
						tabs={this.tabHeaders}
						active={this.state.currentTabHeader}
						onTabChange={this.handleTabHeaderChange}
					/>
				</header>
				<TabContent />
			</section>
		)
	}
}
