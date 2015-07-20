
import ActorsStore from './stores/actors-store';
import MoviesStore from './stores/movies-store';
import { Flux } from 'delorean';

const Dispatcher = Flux.createDispatcher({
	setActor(index, actor) {
		this.dispatch('set-actor', { index, actor })
	},
	fetchMoviesFromActors(actors) {
		this.dispatch('fetch-movies-from-actors', actors);
	},
	getStores() {
		return {
			actors: ActorsStore,
			movies: MoviesStore
		};
	}
});

export default Dispatcher;
