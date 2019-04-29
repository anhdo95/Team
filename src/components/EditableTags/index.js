import React, { PureComponent } from 'react'
import classNames from 'classnames'

import { TAG_TYPE, TAG_NOTIFICAION_FREQUENCY } from 'constant'

import './index.scss'

class EditableTags extends PureComponent {
	constructor(props) {
		super(props)

		this.state = {
			editable: false,
		}
	}

	handleToggle = () => {
		this.setState({
			editable: !this.state.editable,
		})
	}

	renderHeader() {
		const { editable } = this.state
		const { heading, headingIconName } = this.props

		const iconClass = classNames('mr-1', headingIconName)

		return (
			<div className="card-header d-flex justify-content-between text-muted fs-09">
				<div className="d-flex">
					<i className={iconClass} aria-hidden="true" />
					<div> {heading}</div>
				</div>
				<a href="/#" className="ml-2 text-muted" onClick={this.handleToggle}>
					{editable ? 'close' : 'edit'}
				</a>
			</div>
		)
	}

	renderReadOnlyTags() {
		return (
			<div className="card-body">
				{this.props.tags.map((tag) => (
					<a href="/" className="tag mr-1" key={tag.name}>
						{tag.name}
					</a>
				))}
			</div>
		)
	}

	renderEditableTags() {
		return (
			<div className="card-body">
				<div className="d-flex justify-content-between text-muted fs-075 mb-1">
					<div>TAG</div>
					<div>NOTIFICATIONS</div>
				</div>
				{this.props.tags.map((tag) => (
					<div className="editable-tags__row mb-1 fs-075" key={tag.name}>
						<a href="/" className="tag d-table mr-1">
							{tag.name}
						</a>
						<div>
							<button
								id="btn-notify"
								type="button"
								className="editable-tags__frequency dropdown-toggle"
								data-toggle="dropdown"
							>
								{TAG_NOTIFICAION_FREQUENCY[tag.frequency]}&nbsp;
							</button>
							<div className="dropdown-menu dropdown-menu-right" aria-labelledby="btn-notify">
								{TAG_NOTIFICAION_FREQUENCY.map((value, key) => (
									<a className="dropdown-item fs-08" href="/" key={key}>
										{value}
									</a>
								))}
							</div>
						</div>
					</div>
				))}
			</div>
		)
	}

	renderTags() {
		if (!this.state.editable) {
			return this.renderReadOnlyTags()
		}

		switch (this.props.tagType) {
			case TAG_TYPE.WATCHED:
				return this.renderEditableTags()

			case TAG_TYPE.IGNORED:
				return this.renderEditableTags()

			default:
				return this.renderEditableTags()
		}
	}

	render() {
		return (
			<div className="editable-tags card">
				{this.renderHeader()}
				{this.renderTags()}
			</div>
		)
	}
}

EditableTags.defaultProps = {
	heading: '',
	headingIconName: '',
	tags: [],
}

export default EditableTags
