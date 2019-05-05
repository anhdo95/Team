import React, { PureComponent } from 'react'
import classNames from 'classnames'

import './index.scss'

class VoteCell extends PureComponent {
	constructor(props) {
		super(props)
	}

	renderFavorite() {
		const { display, actives, favoriteCount } = this.props

		if (!display.favorite) return null

		const favoriteClass = classNames('votecell__icon mt-3', {
			'votecell__icon--favorited': actives.favorite,
		})

		return (
			<div className={favoriteClass}>
				<div>
					<i className="fa fa-star" aria-hidden="true" />
				</div>
				<div className="mt-1 fs-08">{favoriteCount}</div>
			</div>
		)
	}

	renderAccept() {
		const { display, actives } = this.props

		if (!display.accept) return null

		const acceptClass = classNames('votecell__icon mt-3', {
			'votecell__icon--accepted': actives.accept,
		})

		return (
			<div className={acceptClass}>
				<i class="fa fa-check" aria-hidden="true" />
			</div>
		)
	}

	render() {
		const { extraClass, actives, viewCount } = this.props

		const voteCellClass = classNames('votecell text-center', extraClass)

		const upClass = classNames('votecell__up ', {
			active: actives.up,
		})

		const downClass = classNames('votecell__down ', {
			active: actives.down,
		})

		return (
			<div className={voteCellClass}>
				<div className={upClass} />
				<div className="text-muted font-weight-light py-3">{viewCount}</div>
				<div className={downClass} />
				{this.renderFavorite()}
				{this.renderAccept()}
			</div>
		)
	}
}

VoteCell.defaultProps = {
	extraClass: '',
	display: {
		favorite: false,
		accept: false,
	},
	actives: {
		up: false,
		down: false,
		favorite: false,
	},
	viewCount: 0,
	favoriteCount: 0,
}

export default VoteCell
