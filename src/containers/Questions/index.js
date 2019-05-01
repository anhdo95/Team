import React, { Component } from 'react'

import EditableTags from 'components/EditableTags'
import HeadLine from './HeadLine'
import Filter from './Filter'
import Posts from './Posts'

import { TAG_TYPE } from 'constant'

import './index.scss'

export default class PostListing extends Component {
	renderWatchedTags() {
		const tags = [
			{ name: 'Redux', frequency: 0 },
			{ name: 'ReactJS', frequency: 1 },
			{ name: 'Flux', frequency: 1 },
			{ name: 'State', frequency: 2 },
		]

		return (
			<EditableTags
				tagType={TAG_TYPE.WATCHED}
				heading="Watched Tags on SASS Viet Nam"
				headingIconName="fa fa-eye"
				tags={tags}
			/>
		)
	}

	renderIgnoredTags() {
		const tags = [{ name: 'Redux', frequency: 1 }, { name: 'State', frequency: 0 }]

		return (
			<EditableTags
				tagType={TAG_TYPE.IGNORED}
				heading="Ignored Tags"
				headingIconName="fa fa-ban"
				tags={tags}
			/>
		)
	}

	renderRelatedTags() {
		return (
			<>
				<h4 className="h5 font-weight-light">Related Tags</h4>
				<a href="/" className="d-table tag mt-1">
					Stackoverflow-for-teams
				</a>
				<a href="/" className="d-table tag mt-1">
					Customs
				</a>
				<a href="/" className="d-table tag mt-1">
					Programming
				</a>
				<a href="/" className="d-table tag mt-1">
					Best-Practive
				</a>
				<a href="/" className="d-table fs-09 mt-2">
					more related tags
				</a>
			</>
		)
	}

	renderRightSidebar() {
		return (
			<div className="post-listing__right-sidebar">
				<div>{this.renderWatchedTags()}</div>
				<div className="mt-3">{this.renderIgnoredTags()}</div>
				<div className="mt-4">{this.renderRelatedTags()}</div>
			</div>
		)
	}

	render() {
		return (
			<div className="questions d-flex">
				<div className="questions__content">
					<HeadLine />
					<Filter />
					<Posts />
				</div>
				{this.renderRightSidebar()}
			</div>
		)
	}
}
