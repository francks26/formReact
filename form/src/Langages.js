import './Form.css'

import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Langages extends Component {
	
	state = {
            countries : [
                {id : 1, name : "GB"},
                {id : 2, name : "FR"}, 
                {id : 3, name : "ISL"}
            ], 
            selected : 1,

        }
    
    
	render() {
		return (
			<select class="langages">
				{this.state.countries.map((country) => (
                    <option 
                        value={country.name} 
                        key={country.id}  
                    >
                        {country.name}
                    </option> 
                ))};
            </select>
		);
	}
}

export default Langages