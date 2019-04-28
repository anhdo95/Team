import React, { Component } from 'react'
import BEMHelper from 'react-bem-helper'

import channel from 'assets/image/channel.png'
import noneAvatar from 'assets/image/none-avatar.png'

import 'scss/pages/_post-listing.scss'

const bemHelper = (() => {
	const core = {
		none: '',
		postListing: 'post-listing',
		content: 'post-listing__content',
		headline: 'post-listing__content__headline',
		filter: 'post-listing__content__filter',
		posts: 'post-listing__content__posts',
		postsQuestSummary: 'post-listing__content__posts__quest-summary',
		rightSidebar: 'post-listing__right-sidebar',
		watchedTags: 'post-listing__right-sidebar__watched-tags',
		ignoredTags: 'post-listing__right-sidebar__ignored-tags',
	}

	return new Proxy(
		{
			...core,
			headlineAvatar: `${core.headline}__avatar`,
			headlineTitle: `${core.headline}__title`,
			headlineAskPrivate: `${core.headline}__ask-private`,
			filterAnswered: `${core.filter}__answered`,
			filterOption: `${core.filter}__option`,
			filterOptionMore: `${core.filter}__option__more`,
			postsQuestSummaryStats: `${core.postsQuestSummary}__stats`,
			postsQuestSummaryStatsCount: `${core.postsQuestSummary}__stats--count`,
			postsQuestSummaryStatsVote: `${core.postsQuestSummary}__stats--vote`,
			postsQuestSummaryStatsAnswer: `${core.postsQuestSummary}__stats--answer`,
			postsQuestSummaryStatsViewCount: `${core.postsQuestSummary}__stats--viewcount`,
			postsQuestSummaryBrief: `${core.postsQuestSummary}__brief`,
			postsQuestSummaryBriefTitle: `${core.postsQuestSummary}__brief__title`,
			postsQuestSummaryBriefExcerpt: `${core.postsQuestSummary}__brief__excerpt`,
			postsQuestSummaryBriefUserInfo: `${core.postsQuestSummary}__brief__user-info`,
			postsQuestSummaryBriefUserInfoAvatar: `${core.postsQuestSummary}__brief__user-info__avatar`,
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

	renderHeadLine() {
		return (
			<div {...bemHelper.headline({ extra: 'd-flex align-items-center justify-content-between' })}>
				<div className="d-flex">
					<div {...bemHelper.headlineAvatar({ extra: 'mr-2' })}>
						<img className="w-100 h-100" src={channel} alt="channel" />
					</div>
					<h1 {...bemHelper.headlineTitle()}>SASS Viet Nam Questions</h1>
				</div>
				<div {...bemHelper.headlineAskPrivate()}>
					<a className="btn btn-primary" href="/">
						<i className="fa fa-key" aria-hidden="true" />
						&nbsp;Ask Private Question
					</a>
				</div>
			</div>
		)
	}

	renderFilter() {
		return (
			<div
				{...bemHelper.filter({ extra: 'd-flex align-items-center justify-content-between py-4' })}
			>
				<div>100 questions</div>
				<div>
					<a href="/" {...bemHelper.filterAnswered({ extra: 'mr-3' })}>
						Answer questions
					</a>
					<div className="btn-group" role="group">
						<button
							type="button"
							{...bemHelper.filterOption({
								modifiers: 'active',
								extra: 'btn btn-outline-secondary',
							})}
							title="The most recently asked questions"
						>
							Newest
						</button>
						<button
							type="button"
							{...bemHelper.filterOption({ extra: 'btn btn-outline-secondary' })}
						>
							Active
						</button>

						<div className="btn-group" role="group">
							<button
								id="btn-filter-more"
								type="button"
								{...bemHelper.filterOption({ extra: 'btn btn-outline-secondary dropdown-toggle' })}
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							>
								More&nbsp;
							</button>
							<div
								{...bemHelper.filterOptionMore({ extra: 'dropdown-menu dropdown-menu-right' })}
								aria-labelledby="btn-filter-more"
							>
								<a className="dropdown-item" href="/">
									Bounties
								</a>
								<a className="dropdown-item" href="/">
									Votes
								</a>
								<a className="dropdown-item" href="/">
									Frequent
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

	renderPosts() {
		const data = new Array(10).fill(null)
		return (
			<div {...bemHelper.posts()}>
				{data.map((item) => (
					<div {...bemHelper.postsQuestSummary({ extra: 'd-flex' })}>
						<div {...bemHelper.postsQuestSummaryStats({ extra: 'text-muted' })}>
							<div {...bemHelper.postsQuestSummaryStatsVote({ extra: 'text-center' })}>
								<div {...bemHelper.postsQuestSummaryStatsCount()}>1000</div>
								<span>votes</span>
							</div>
							<div {...bemHelper.postsQuestSummaryStatsAnswer({ extra: 'text-center' })}>
								<div {...bemHelper.postsQuestSummaryStatsCount()}>40</div>
								<span>answers</span>
							</div>
							<div {...bemHelper.postsQuestSummaryStatsViewCount({ extra: 'text-center' })}>
								<span>9292 views</span>
							</div>
						</div>
						<div {...bemHelper.postsQuestSummaryBrief()}>
							<h3>
								<a
									href="/"
									{...bemHelper.postsQuestSummaryBriefTitle({ extra: 'font-weight-light' })}
								>
									What's food customs in your country's traditional meals that may shock foreigners?
								</a>
							</h3>
							<div {...bemHelper.postsQuestSummaryBriefExcerpt({ extra: 'mb-3' })}>
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
							<div {...bemHelper.postsQuestSummaryBriefUserInfo({ extra: 'float-right' })}>
								<div>
									<a href="/" className="text-muted">
										asked <span title="2019-04-17 08:30:56Z">Apr 17 at 8:30</span>
									</a>
								</div>
								<div className="d-flex">
									<a
										href="/"
										{...bemHelper.postsQuestSummaryBriefUserInfoAvatar({ extra: 'mr-2' })}
									>
										<img src={noneAvatar} className="w-100 h-100" alt="" />
									</a>
									<div className="">
										<div>
											<a href="/">Anh Do Dinh</a>
										</div>
										<span className="repulation font-weight-bold">10</span>
										<span className="bronze text-danger font-weight-bold">
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

	renderWatchedTags() {
		const { isWatchedTagsEditing } = this.state
		const tags = ['Redux', 'ReactJS', 'Flux', 'State']

		console.log('isWatchedTagsEditing', isWatchedTagsEditing)

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
					{this.renderHeadLine()}
					{this.renderFilter()}
					{this.renderPosts()}
				</div>
				{this.renderRightSidebar()}
			</div>
		)
	}
}
