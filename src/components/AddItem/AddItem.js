import React, { Component } from 'react';

import './AddItem.css';

class addItem extends Component {
	state = {
		name: ''
	}

	itemName = (event) => {
		this.setState({ name: event.target.value })
	}

	addItem = () => {
		this.props.itemAdded(this.state.name)
		this.setState({ name: ''})
	}


	render(){
		return (
		    <div className="AddItem">
		    	<input type='text' placeholder='Add Item Name' value={this.state.name} onChange={(event) => this.itemName(event)} />
		        <button onClick={() => this.addItem()}>Add Item</button>
		    </div>
		)
	}
}

export default addItem;