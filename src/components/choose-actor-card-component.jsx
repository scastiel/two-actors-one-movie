
import ActorsActions from '../actions/actors-actions';
import DefaultCardComponent from './default-card-component.jsx';
import React from 'react';
import Radium from 'radium';
import { Typeahead } from 'react-typeahead';

@Radium
export default class ChooseActorCardComponent extends DefaultCardComponent {
	constructor(props) {
		super(props);
		this.styles.textField = {
			width: '100%',
			marginTop: '-20px',
			marginBottom: '-20px'
		};
		this.styles.textFieldLabel = {
			//color: 'rgba(255, 255, 255, 0.4)'
		};
	}
	getActorsOptions() {
		return [
			{ name: "Tom Cruise", profileImageUrl: "//image.tmdb.org/t/p/w396/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg" },
			{ name: "Simon Pegg", profileImageUrl: "//image.tmdb.org/t/p/original/onE8N8YciZtSO8hv8TBA6fRpB5b.jpg" }
		]
	}
	onActorSelected(actor) {
		ActorsActions.setActor(this.props.actorIndex, actor);
	}
	render() {
		return (
			<div className="mdl-textfield mdl-js-textfield" style={this.styles.textField}>
				{/* <input className="mdl-textfield__input" type="text" id="sample1"/> */}
				<Typeahead
					options={this.getActorsOptions()}
					maxVisible={3}
					customClasses={{
							input: "mdl-textfield__input",
							results: "mdl-menu autocomplete-results",
							listItem: "mdl-menu__item"
						}}
					inputProps={{ id: "actorField", tabOrder: this.props.actorIndex + 1 }}
					filterOption="name"
					displayOption="name"
					onOptionSelected={(actor) => this.onActorSelected(actor)}
					/>
				<label className="mdl-textfield__label" htmlFor="actorField"
				       style={this.styles.textFieldLabel}>
					Actor #{this.props.actorIndex + 1}
				</label>
			</div>
		);
	}
}
