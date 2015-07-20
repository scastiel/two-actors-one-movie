
import DefaultCardComponent from './default-card-component.jsx';
import React from 'react';

export default class MovieCardComponent extends DefaultCardComponent {
	constructor(props) {
		super(props);
	}
	render() {
		this.styles.card.background = "url('" + this.props.posterImageUrl + "') center / cover";
		return (
			<div className="mdl-card mdl-shadow--2dp" style={this.styles.card}>
				<div className="mdl-card__title mdl-card--expand"></div>
				<div className="mdl-card__actions" style={this.styles.title}>
					{this.props.name} ({this.props.year})
				</div>
			</div>
		);
	}
}
