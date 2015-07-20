
import DefaultCardComponent from './default-card-component.jsx';
import React from 'react';
import Radium from 'radium'

@Radium
export default class ChooseActorCardComponent extends DefaultCardComponent {
	constructor(props) {
		super(props);
		this.styles.textField = {
			width: '100%',
			marginTop: '-20px'
		};
		this.styles.textFieldLabel = {
			color: 'rgba(255, 255, 255, 0.4)'
		};
	}
	render() {
		return (
			<div className="mdl-card mdl-shadow--2dp" style={this.styles.card}>
				<div className="mdl-card__title mdl-card--expand"></div>
				<div className="mdl-card__actions" style={this.styles.title}>
					<form>
						<div className="mdl-textfield mdl-js-textfield" style={this.styles.textField}>
							<input className="mdl-textfield__input" type="text" id="sample1" />
							<label className="mdl-textfield__label" htmlFor="sample1"
							       style={this.styles.textFieldLabel}>
								Type some actor name...
							</label>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
