import React, { Component } from 'react';

import './AddItem.css';

class addItem extends Component {
	state = {
		name: ''
	}

	itemName = (event) => {
		this.setState({ name: event.target.value })
	}


	render(){
		return (
		    <div className="AddItem">
		    	<input type='text' placeholder='Add Item Name' value={this.state.name} onChange={(event) => this.itemName(event)} />
		        <button onClick={() => this.props.personAdded(this.state.name)}>Add Item</button>
		    </div>
		)
	}
}

export default addItem;