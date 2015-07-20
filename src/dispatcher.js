
import ActorsStore from './stores/actors-store';
import { Flux } from 'delorean';

const Dispatcher = Flux.createDispatcher({
	setActor(index, actor) {
		this.dispatch('set-actor', { index, actor })
	},
	getStores() {
		return { actors: ActorsStore };
	}
});

export default Dispatcher;
