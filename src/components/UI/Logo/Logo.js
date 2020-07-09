import React from 'react'

import './Logo.css'
import original from '../../../assets/cart.png'

const logo = (props) => (
	<div className="Logo" style={{height: props.height}}>
		<img src={original} alt='logo'/>
	</div>
);

export default logo