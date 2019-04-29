import React, { Component } from 'react'
import BEMHelper from 'react-bem-helper'

import HeadLine from './HeadLine'
import Filter from './Filter'
import Posts from './Posts'

import './index.scss'

const bemHelper = (() => {
	const core = {
		none: '',
		postListing: 'post-listing',
		content: 'post-listing__content',
		rightSidebar: 'post-listing__right-sidebar',
		watchedTags: 'post-listing__right-sidebar__watched-tags',
		ignoredTags: 'post-listing__right-sidebar__ignored-tags',
	}

	return new Proxy(
		{
			...core,
			watchedTagsHeader: `${core.watchedTags}__header`,
			watchedTagsList: `${core.watchedTags}__list`,
			watchedTagsListItem: `${core.watchedTags}__list-item`,
			watchedTagsFrequency: `${core.watchedTags}__frequency`,
		},
		{
			get(target, key) {
				return new BEMHelper(target[key])
			},
		}
	)
})()

export default class PostListing extends Component {
	constructor(props) {
		super(props)

		this.state = {
			isWatchedTagsEditing: false,
		}
	}

	handleWatchedTagsEdit = () => {
		this.setState((prevState) => ({
			isWatchedTagsEditing: !prevState.isWatchedTagsEditing,
		}))
	}

	renderWatchedTags() {
		const { isWatchedTagsEditing } = this.state
		const tags = ['Redux', 'ReactJS', 'Flux', 'State']

		return (
			<div {...bemHelper.watchedTags({ extra: 'card' })}>
				<div {...bemHelper.watchedTagsHeader({ extra: 'card-header d-flex text-muted fs-09' })}>
					<div className="d-flex">
						<i className="fa fa-eye mr-1" aria-hidden="true" />
						<div className=""> Watched Tags on SASS Viet Nam</div>
					</div>
					<a
						href="javascript:void"
						className="ml-2 text-muted"
						onClick={this.handleWatchedTagsEdit}
					>
						{isWatchedTagsEditing ? 'cancel' : 'edit'}
					</a>
				</div>
				<div {...bemHelper.watchedTagsList({ extra: 'card-body' })}>
					<div
						{...bemHelper.none({
							extra: {
								'd-none': !isWatchedTagsEditing,
								'd-flex justify-content-between text-muted fs-075 mb-1': isWatchedTagsEditing,
							},
						})}
					>
						<div>TAG</div>
						<div>NOTIFICATIONS</div>
					</div>
					{tags.map((tag) => (
						<div
							{...bemHelper.watchedTagsListItem({
								extra: {
									'd-flex justify-content-between align-items-center mb-1 fs-075': isWatchedTagsEditing,
									'd-inline mr-1': !isWatchedTagsEditing,
								},
							})}
						>
							<a
								href="/"
								{...bemHelper.none({
									extra: {
										tag: true,
										'd-table mr-1': isWatchedTagsEditing,
										'mb-1': !isWatchedTagsEditing,
									},
								})}
							>
								{tag}
							</a>
							<div
								{...bemHelper.none({
									extra: {
										'd-none': !isWatchedTagsEditing,
									},
								})}
							>
								<button
									id="btn-notify"
									type="button"
									{...bemHelper.watchedTagsFrequency({
										extra: 'dropdown-toggle',
									})}
									data-toggle="dropdown"
								>
									Daily&nbsp;
								</button>
								<div
									{...bemHelper.filterOptionMore({
										extra: 'dropdown-menu dropdown-menu-right',
									})}
									aria-labelledby="btn-notify"
								>
									<a className="dropdown-item" href="/">
										None
									</a>
									<a className="dropdown-item" href="/">
										15 min
									</a>
									<a className="dropdown-item" href="/">
										Daily
									</a>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		)
	}

	renderIgnoredTags() {
		return (
			<div {...bemHelper.ignoredTags({ extra: 'card mt-3' })}>
				<div
					{...bemHelper.ignoredTags({
						extra: 'card-header d-flex justify-content-between text-muted fs-09',
					})}
				>
					<div className="d-flex">
						<i className="fa fa-ban mr-1" />
						<div className=""> Ignored Tags</div>
					</div>
					<a href="/" className="ml-2 text-muted">
						edit
					</a>
				</div>
				<div className="card-body">
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
			</div>
		)
	}

	renderRelatedTags() {
		return (
			<div className="mt-4">
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
			</div>
		)
	}

	renderRightSidebar() {
		return (
			<div {...bemHelper.rightSidebar()}>
				{this.renderWatchedTags()}
				{this.renderIgnoredTags()}
				{this.renderRelatedTags()}
			</div>
		)
	}

	render() {
		return (
			<div {...bemHelper.postListing({ extra: 'd-flex' })}>
				<div {...bemHelper.content()}>
					<HeadLine />
					<Filter />
					<Posts />
				</div>
				{this.renderRightSidebar()}
			</div>
		)
	}
}
