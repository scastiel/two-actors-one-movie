
import { Flux } from 'delorean';

const ActorsStore = Flux.createStore({
	actors: { 0: null, 1: null },
	setActor({ index, actor }) {
		this.actors[index] = actor;
		this.emit('change');
	},
	actions: { 'set-actor': 'setActor' }
});

export default ActorsStore;
