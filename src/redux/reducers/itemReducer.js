const initialState = {
	items : [],
	cart: []
}

const itemReducer = (state = initialState, action) => {
	switch(action.type){
		case('ADD_ITEM') :
			return {
				...state,
				items: state.items.concat({ id: new Date(), name: action.name })
			}
		case('DELETE_ITEM') :
			return {
				...state,
				items: state.items.filter(item => (item.id !== action.id))
			}
		case('ADD_TO_CART') :
			const addItem = state.items.find(item => (item.id === action.id))
			return {
				...state,
				cart: state.cart.concat(addItem),
				items: state.items
			}	
		case('REMOVE_FROM_CART') :
			return {
				...state,
				cart: state.cart.filter(cart => (cart.id !== action.id)),
				items: state.items
			}	
		default : 
			return state
	}
}

export default itemReducer