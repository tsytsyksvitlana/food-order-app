import { useReducer } from "react";

import CartContex from "./cart-context";

const defaultCartState={
    items: [],
    totalAmount: 0,
};

const cartReducer=(state, action)=>{
    if(action.type==='ADD'){
        const updatedItems=state.items.concat(action.item);
        const updatedTotalAmount=state.items.totalAmount+action.items.price*action.items.amount;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }
    return defaultCartState;
};

const CartProvider=(props)=>{
    const [cartState, dispatchCartAction]=useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler=(item)=>{
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemToCartHandler=(id)=>{
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const cartContex={
        items: cartState.items,
        totalAmount: cartState.totalAmount, 
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return <CartContex.Provider value={cartContex}>
        {props.children}
    </CartContex.Provider>
};

export default CartProvider;