
import { Component } from 'react';
import React from 'react';
import Radium from 'radium'

@Radium
export default class DefaultCardComponent extends Component {
	constructor(props) {
		super(props);
		this.styles = {
			card: { width: '100%' },
			title: {
				height: '52px',
				padding: '16px',
				backgroundColor: 'rgba(0, 0, 0, 0.5)',
				color: '#fff',
				textAlign: 'center'
			}
		};
	}
}
