import {Component} from 'react';
import React from 'react';
//import DataBaseHandler from '../utils/database'
import router       from 'next/router';

class BaseComponent extends Component{
	static alertField = new React.createRef();
	constructor(props){
		super(props);

		//this.db = new DataBaseHandler();
		this.redirectTo = this.redirectTo.bind(this);
	}

	redirectTo(to, alias){
		router.push(to, alias);
	}
}

export default BaseComponent;
