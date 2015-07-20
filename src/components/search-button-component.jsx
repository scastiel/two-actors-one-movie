
import React, { Component } from 'react';

export default class SearchButtonComponent extends Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
				OK
			</button>
		);
	}
}