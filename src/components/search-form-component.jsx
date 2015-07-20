
import ActorCardComponent from './actor-card-component.jsx';
import ChooseActorCardComponent from './choose-actor-card-component.jsx';
import SearchButtonComponent from './search-button-component.jsx';
import React, { Component } from 'react';

export default class SearchFormComponent extends Component {
	render() {
		return (
			<div className="mdl-grid">
				<div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--center">
					<ChooseActorCardComponent/>
				</div>
				<div className="mdl-cell mdl-cell--6-col mdl-cell--12-col-phone mdl-cell--center">
					<ActorCardComponent
						name="Tom Cruise"
						profileImageUrl="//image.tmdb.org/t/p/w396/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg"
						/>
				</div>
				<div className="mdl-cell mdl-cell--12-col mdl-cell--center">
					<SearchButtonComponent/>
				</div>
			</div>
		);
	}
}
