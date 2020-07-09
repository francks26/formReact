import './InputText.css'

import PropTypes from 'prop-types'
import React, { Component, useState } from 'react'
import Input from './InputText'

//si javais eu le temps jaurais voulu creer les input a partir de cet array avec map
 
const inputs = [
			{id : 1,	type : "text",	name : "firstName",	value : "First Name"},
			{id : 2, 	type : "text",	name : "lastName",	value : "Last Name"},
			{id : 3, 	type : "text",	name : "title",		value : 'Title'},
			{id : 4, 	type : "text", 	name : "country", 	value : 'Country'},
			{id : 5, 	type : "text",	name : "city", 		value : 'City'},
			{id : 6, 	type : "text",	name : "street", 	value : 'Street'},
			{id : 7, 	type : "email", name : "email", 	value : 'Email'},
			{id : 8, 	type : "tel",	name : "telephone",	value : 'Telephone'}
]

class FormPersonnal extends Component {

	constructor(props) {
		super(props);
		this.state = {
			firstName	: 'First Name',
			lastName	: 'Last Name',
			title		: 'Title',
			isShow1		: true,
			country		: 'Country',
			city		: 'City',
			street		: 'Street',
			isShow2		: false,
			email		: 'Email',
			tel			: 'Telephone',
			
		};
	}
	
	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		this.setState({[nam]: val});
	}
	
	myFocus = (event) =>{
		let name = event.target.name;
		this.setState({[name]: ''});
	}
	
		
	handleClickNext1 = (event) => {
		if(this.state.firstName === '' || this.state.firstName === 'First Name'  || this.state.lastName === '' || this.state.lastName === 'Last Name'){
			alert("il faut remplir le nom et le prenom SVP")
		}else{
			this.setState({['isShow1'] : false});
			this.setState({['isShow2'] : true});
		}
	}
	
	handleClickNext2  = (event) => {
		if(this.state.country === '' || this.state.country === 'Country' ){
			alert("il faut remplir le pays SVP")
		}else{
			this.setState({['isShow1'] : false});
			this.setState({['isShow2'] : false});
		}
	}
	
	handleClickBack1 = () => {
		this.setState({['isShow1'] : true});
		this.setState({['isShow2'] : false});
	}
	
	handleClickBack2 = () => {
		this.setState({['isShow1'] : false});
		this.setState({['isShow2'] : true});
	}
	
	handleSubmit = () => {
		if(this.state.email === '' || this.state.email === 'Email' ){
			alert("il faut remplir l'email SVP")
		}else{
		if (/^[-a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email) && /^0[1-9]{1}[0-9]{8}$/.test(this.state.tel)){
				alert("submit") ;
				this.setState({['isShow1'] : true});
				this.setState({['isShow2'] : false});
			}else{
				if (!/^[-a-zA-Z0-9_.]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(this.state.email)){
					alert("email incorrect !!!");
				}else{
					alert("telephone incorrect !!!");
				}
			}
		}
	}
	
	render() {
		
		var isShow1 = this.state.isShow1;
		var isShow2 = this.state.isShow2;
		
		
		return (
		
		
			isShow1 ? ( //debut if 1
			
			<div >
				
				<input 
						type	= "text" 
						name	= "firstName"
						value	= {this.state.firstName}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						className = "form1"
						
					/>
				<input 
						type	= "text" 
						name	= "lastName" 
						value	= {this.state.lastName}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						className = "form1"
					/>
				<input 
						type	= "text" 
						name	= "title"
						value	= {this.state.title}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						className = "form1"
					/>
				<br />	
				<button 
					type="button" 
					class="submit" 
					onClick={this.handleClickNext1}
					>
					Next
				</button>
				
				
			</div>	
				
			) : ( // fin else 1
				
			isShow2 ? (	// debut if 2
			<div>	
				<input 
						type	= "text" 
						name	= "country"
						value	= {this.state.country}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						
					/>
				<input 
						type	= "text" 
						name	= "city" 
						value	= {this.state.city}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						
					/>
				<input 
						type	= "text" 
						name	= "street"
						value	= {this.state.street}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						
					/>
				

				<br />	
				<button 
					type="button" 
					class="submit" 
					onClick={this.handleClickBack1}
					
					>
					Back
				</button>
				
				<button 
					type="button" 
					class="submit" 
					onClick={this.handleClickNext2}
					
					>
					Next
				</button>
				
			</div>
			) : ( //fin if 2
			
			<div>
				<input 
						type	= "email" 
						name	= "email" 
						value	= {this.state.email}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						
					/>
				
				<input 
						type	= "tel" 
						name	= "telephone"
						value	= {this.state.tel}
						onChange= {this.myChangeHandler}
						onFocus	= {this.myFocus}
						
					/>
				
				<br />
				
				<button 
					type="button" 
					class="submit" 
					onClick={this.handleClickBack2}
					
					>
					Back
				</button>
			
			
				<input type="submit" class="submit" value="Submit" onClick={this.handleSubmit} />
			</div>
			
			) )//fin else 2
			
			
			
			
		);
	}
}


export default FormPersonnal