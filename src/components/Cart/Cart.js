import React, {Component} from 'react'
import { connect } from 'react-redux'

import './cart.css'
import { removeItemFromCart } from '../../redux/actions/itemAction.js'

class cart extends Component {

    render() {
        const cartItems = this.props.cartItems.length > 0 ? this.props.cartItems.map(cartItem => {
            return (
                <div className="Items">
                    <div className="CartControl">
                        <div className="Name">{cartItem.name}</div>
                        <button 
                            className="Less" 
                            onClick={() => this.props.removeCartItem(cartItem.id)}
                        >Remove from cart</button>
                    </div>    
                </div>
            )
        }) : <p>Your Cart is Empty</p>

        return (
            <div className="Cart">
                <h1>Your Cart</h1>
                {cartItems}
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        removeCartItem: (id) => dispatch(removeItemFromCart(id)),
    }
} 

export default connect(null, mapDispatchToProps)(cart);