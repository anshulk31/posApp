import * as type from '../types.js'


export const addItem = (name) => {
	return {
		type: type.ADD_ITEM,
		name: name,
	}
}

export const deleteItem = (id) => {
	return {
		type: type.DELETE_ITEM,
		id: id
	}
}

export const addToCart = (id) => {
	return {
		type: type.ADD_TO_CART,
		id: id,
	}
}

export const removeItemFromCart = (id) => {
	return {
		type: type.REMOVE_FROM_CART,
		id: id
	}
}