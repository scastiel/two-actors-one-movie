
import AppComponent from './components/app-component.jsx';
import ActorsStore from './stores/actors-store';
import ActorsActions from './actions/actors-actions';

import React from 'react';

require("../styles/app.less");

function render() {
	React.render(<AppComponent actors={ActorsStore.actors}/>, document.getElementById('app'));
}
render();

ActorsStore.onChange(render);

setTimeout(function() {
	ActorsActions.setActor(0, { name: "Tom Cruise", profileImageUrl: "//image.tmdb.org/t/p/w396/3oWEuo0e8Nx8JvkqYCDec2iMY6K.jpg" });
}, 1000);

setTimeout(function() {
	ActorsActions.setActor(1, { name: "Brad Pitt", profileImageUrl: "//image.tmdb.org/t/p/original/ejYIW1enUcGJ9GS3Bs34mtONwWS.jpg" });
}, 2000);
