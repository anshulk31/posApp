import React from 'react';

import './ItemStack.css';

const itemStack = (props) => (
    <div className="ItemControls">
	    <div className="ItemControl">
	        <div className="Label">{props.name}</div>
	        <button 
	            className="More" 
	            onClick={props.addCart}>Add To Cart</button>
	        <button 
	            className="Less" 
	            onClick={props.removeCart}
	        >Delete Item</button>
	    </div>        
    </div>
);

export default itemStack;