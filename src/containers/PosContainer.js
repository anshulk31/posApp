import React, { Component } from 'react';
import { connect } from 'react-redux'

import ItemStack from '../components/ItemStack/ItemStack';
import AddItem from '../components/AddItem/AddItem';
import Cart from '../components/Cart/Cart'
import { addItem, deleteItem, addToCart } from '../redux/actions/itemAction'
import './posContainer.css'

class PosContainer extends Component {

    addItemHandler = (name) => {
        this.props.dispatch(addItem(name))
    }

    deleteItemHandler = (itemId) => {
        this.props.dispatch(deleteItem(itemId))
    }

    addToCartHandler = (itemId) => {
        this.props.dispatch(addToCart(itemId))
    }

    render () {
        return (
            <div className="Content">
                <Cart cartItems={this.props.cart}/>
                <p style={{ textAlign: 'center', width: '100%', backgroundColor: '#94b8b8', padding: '10px 0'}}>Items Available</p>
                {this.props.items.map(item => (
                    <ItemStack
                        key={item.id}
                        name={item.name}
                        addCart={() => this.addToCartHandler(item.id)}
                        removeCart={() => this.deleteItemHandler(item.id)}
                    />
                ))}
                <AddItem itemAdded={(name) => this.addItemHandler(name)} />
            </div>
        );
    }
}

const mapStateToProps = state => {
    debugger
    return {
        items : state.items,
        cart: state.cart
    }
}

export default connect(mapStateToProps)(PosContainer);