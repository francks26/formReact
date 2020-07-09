import './InputText.css'

import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Form extends Component {

	constructor(props) {
		super(props);
		this.state = {name: ''};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(event) {
		this.setState({name :  event.target.value});
	}
	
	inputs = [
		{id : 1, 	type : "text", 		name : "firstName", 	value : "First Name"},
		{id : 2, 	type : "text",		name : "lastName", 		value : "Last Name"},
		{id : 3, 	type : "email", 	name : "email", 		value : "Email"},
		{id : 4, 	type : "tel",		name : "telephone", 	value : "Telephone"},
	]
	
	render() {
		return (
			<div className="form">

				{this.inputs.map(input => (
					<input 
						onChange = {this.handleChange}
						type	= {input.type} 
						name	= {input.name} 
						key		= {input.id}
						value	= {input.value}
					/>
				))}
			</div>
		);
	}
}


export default Form