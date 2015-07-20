
import MovieCardComponent from './movie-card-component.jsx';
import React, { Component } from 'react';

export default class MovieListComponent extends Component {
	render() {
		return (
			<div className="mdl-grid">
				{this.props.movies.map((movie, i) => (
					<div className="mdl-cell mdl-cell--12-col mdl-cell--center" key={i}>
						<MovieCardComponent {...movie}/>
					</div>
				))}
			</div>
		);
	}
}
