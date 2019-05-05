import React, { PureComponent } from 'react'
import classNames from 'classnames'

import './index.scss'

class TabHeader extends PureComponent {
	handleClick = (tab) => {
		return () => {
			this.props.onTabChange(tab)
		}
	}

	render() {
		const { active, tabs } = this.props

		return (
			<ul className="nav nav-tabs border-bottom-0" role="tablist">
				{tabs.map((tab) => {
					const navLinkClass = classNames('nav-link', {
						active: active === tab,
					})

					return (
						<li className="nav-item" key={tab}>
							<a
								className={navLinkClass}
								id={tab}
								data-toggle="tab"
								href={`#${tab}`}
								role="tab"
								aria-controls={tab}
								aria-selected="true"
								onClick={this.handleClick(tab)}
							>
								{tab}
							</a>
						</li>
					)
				})}
			</ul>
		)
	}
}

TabHeader.defaultProps = {
	active: '',
	tabs: [],
	onTabChange: () => {},
}

export default TabHeader
