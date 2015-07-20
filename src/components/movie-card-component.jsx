
import DefaultCardComponent from './default-card-component.jsx';
import React from 'react';
import Radium from 'radium';
import _ from 'lodash';

@Radium
export default class MovieCardComponent extends DefaultCardComponent {
	constructor(props) {
		super(props);
		this.styles = _.merge(this.styles, {
			card: {
				margin: '8px',
				width: 'calc(568px / 3 - 16px)',
				height: 'calc(25/16*(568px / 3 - 16px))',
				'@media (max-width: 479px)': {
					width: '194px',
					height: '303px',
				}
			}
		});
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
