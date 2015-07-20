
import ActorsStore from '../stores/actors-store';
import MoviesActions from '../actions/movies-actions';
import React, { Component } from 'react';

export default class SearchButtonComponent extends Component {
	search = () => {
		MoviesActions.fetchMoviesFromActors(ActorsStore.actors[0], ActorsStore.actors[1]);
	}
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={this.search}>
				OK
			</button>
		);
	}
}