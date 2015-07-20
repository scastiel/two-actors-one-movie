
import SearchFormComponent from './search-form-component.jsx';
import MovieListComponent from './movie-list-component.jsx';
import React, { Component } from 'react';

export default class AppComponent extends Component {
	render() {
		return (
			<div className="main-container mdl-grid">
				<div className="mdl-cell mdl-cell--12-col">
					<SearchFormComponent/>
				</div>
				<div className="mdl-cell mdl-cell--12-col">
					<MovieListComponent movies={[
						{ name: "Interview with a vampire", year: 1994, posterImageUrl: "//image.tmdb.org/t/p/original/hldXwwViSfHJS0kIJr07KBGmHJI.jpg" }
					]}/>
				</div>
			</div>
		);
	}
}
