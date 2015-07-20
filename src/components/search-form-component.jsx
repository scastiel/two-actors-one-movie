
import ActorCardComponent from './actor-card-component.jsx';
import ChooseActorCardComponent from './choose-actor-card-component.jsx';
import SearchButtonComponent from './search-button-component.jsx';
import React, { Component } from 'react';

export default class SearchFormComponent extends Component {
	render() {
		return (
			<div className="mdl-grid">
				<div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--center">
					{ this.props.actor1 ? <ActorCardComponent {...this.props.actor1}/> : <ChooseActorCardComponent/> }
				</div>
				<div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--center">
					{ this.props.actor2 ? <ActorCardComponent {...this.props.actor2}/> : <ChooseActorCardComponent/> }
				</div>
				<div className="mdl-cell mdl-cell--12-col mdl-cell--center">
					<SearchButtonComponent/>
				</div>
			</div>
		);
	}
}
