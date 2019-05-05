import React, { PureComponent } from 'react'

import noneAvatar from 'assets/image/none-avatar.png'
import './index.scss'

class Profile extends PureComponent {
	render() {
    const { date, displayName } = this.props

		return (
			<div className="bg-profile p-2 pr-5 rounded">
				<a href="/" className="text-muted fs-075">
					asked <span title={date}>{date}</span>
				</a>
				<div className="d-flex">
					<a href="/" className="avatar-demension mr-2">
						<img src={noneAvatar} className="w-100 h-100" alt="" />
					</a>
					<div className="fs-075">
						<div className="mb-1">
							<a href="/" className="fs-075">
								{displayName}
							</a>
						</div>
						<span className="font-weight-bold">10</span>
						<span className="text-danger font-weight-bold">
							<span>&nbsp;●</span>
							<span>5</span>
						</span>
					</div>
				</div>
			</div>
		)
	}
}

Profile.defaultProps = {
  date: '',
  displayName: ''
}

export default Profile
