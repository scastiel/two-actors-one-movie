
import AppComponent from './components/app-component.jsx';
import ActorsStore from './stores/actors-store';
import ActorsActions from './actions/actors-actions';
import MoviesStore from './stores/movies-store';
import MoviesActions from './actions/movies-actions';

import React from 'react';

require("../styles/app.less");

function render() {
	React.render(<AppComponent actors={ActorsStore.actors} movies={MoviesStore.movies}/>, document.getElementById('app'));
}
render();

ActorsStore.onChange(render);
MoviesStore.onChange(render);

// setTimeout(function() {
	ActorsActions.setActor(0, { name: "Tom Cruise", profileImageUrl: "//image.tmdb.org/t/p/w396/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg" });
// }, 1000);

// setTimeout(function() {
	ActorsActions.setActor(1, { name: "Simon Pegg", profileImageUrl: "//image.tmdb.org/t/p/original/onE8N8YciZtSO8hv8TBA6fRpB5b.jpg" });
// }, 2000);
