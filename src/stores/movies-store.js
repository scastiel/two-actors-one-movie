
import { Flux } from 'delorean';

const MoviesStore = Flux.createStore({
	movies: [],
	fetchMoviesFromActors(actors) {
		setTimeout(() => {
			this.movies = [
				{ name: "Mission: Impossible - Rogue Nation", year: 2015, posterImageUrl: "//image.tmdb.org/t/p/original/kLCz5nah0zOFINm5yzEbiAzlOpv.jpg" },
				{ name: "Mission : Impossible - Protocole Fantôme", year: 2011, posterImageUrl: "//image.tmdb.org/t/p/original/bjjuC8WlZ4c7OOxYF7bOHoF9HVr.jpg" },
				{ name: "Mission : Impossible 3", year: 2006, posterImageUrl: "//image.tmdb.org/t/p/original/7DLxZLZauXZJReCB5EAJZgFlzRZ.jpg" }
			];
			this.emit('change');
		}, 1000);
	},
	actions: { 'fetch-movies-from-actors': 'fetchMoviesFromActors' }
});

export default MoviesStore;
