
import DefaultCardComponent from './default-card-component.jsx';
import React from 'react';
import Radium from 'radium'

@Radium
export default class ActorCardComponent extends DefaultCardComponent {
	constructor(props) {
		super(props);
	}
	render() {
		this.styles.card.background = "url('" + this.props.profileImageUrl + "') center / cover";
		return (
			<div className="mdl-card mdl-shadow--2dp" style={this.styles.card}>
				<div className="mdl-card__title mdl-card--expand"></div>
				<div className="mdl-card__actions" style={this.styles.title}>
					{this.props.name}
				</div>
			</div>
		);
	}
}