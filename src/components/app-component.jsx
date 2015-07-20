
import SearchFormComponent from './search-form-component.jsx';
import MovieListComponent from './movie-list-component.jsx';
import React, { Component } from 'react';

export default class AppComponent extends Component {
	render() {
		return (
			<div className="main-container mdl-grid">
				<div className="mdl-cell mdl-cell--12-col">
					<SearchFormComponent actor1={this.props.actors[0]} actor2={this.props.actors[1]}/>
				</div>
				<div className="mdl-cell mdl-cell--12-col">
					<MovieListComponent movies={this.props.movies}/>
				</div>
			</div>
		);
	}
}
