import React, { PureComponent } from 'react'
import classNames from 'classnames'

import './index.scss'

class VoteCell extends PureComponent {
	constructor(props) {
		super(props)
	}

	render() {
		const { extraClass, actives, viewCount, favoriteCount } = this.props

		const voteCellClass = classNames('votecell text-center', extraClass)

		const upClass = classNames('votecell__up ', {
			active: actives.up,
		})

		const downClass = classNames('votecell__down ', {
			active: actives.down,
		})

		const favoriteClass = classNames('votecell__favorite ', {
			active: actives.favorite,
		})

		return (
			<div className={voteCellClass}>
				<div className={upClass} />
				<div className="text-muted font-weight-light py-3">{viewCount}</div>
				<div className={downClass} />
				<div className={favoriteClass}>
					<div>
						<i className="fa fa-star" aria-hidden="true" />
					</div>
					<div className="mt-1 fs-08">{favoriteCount}</div>
				</div>
			</div>
		)
	}
}

VoteCell.defaultProps = {
	extraClass: '',
	actives: {
		up: false,
		down: false,
		favorite: false,
	},
	viewCount: 0,
	favoriteCount: 0,
}

export default VoteCell
