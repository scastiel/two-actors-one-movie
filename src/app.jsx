
import ActorCardComponent from './components/actor-card-component.jsx';
import MovieCardComponent from './components/movie-card-component.jsx';
import ChooseActorCardComponent from './components/choose-actor-card-component.jsx';
import React from 'react';

let actor1Component = <ChooseActorCardComponent/>;
React.render(actor1Component, document.getElementById('actor1'));

let actor2Component =
	<ActorCardComponent
		name="Tom Cruise"
		profileImageUrl="//image.tmdb.org/t/p/w396/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg"
		/>;
React.render(actor2Component, document.getElementById('actor2'));

let movie1Component =
	<MovieCardComponent
		name="Interview with a vampire"
		year="1994"
		posterImageUrl="//image.tmdb.org/t/p/original/hldXwwViSfHJS0kIJr07KBGmHJI.jpg"
		/>;
React.render(movie1Component, document.getElementById('movie1'));