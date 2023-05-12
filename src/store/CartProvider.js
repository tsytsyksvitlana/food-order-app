import CartContex from "./cart-context";

const CartProvider=(props)=>{
    const addItemToCartHandler=(item)=>{};

    const removeItemToCartHandler=(id)=>{};

    const cartContex={
        items: [],
        totalAmount: 0, 
        addItem: addItemToCartHandler,
        removeItem: removeItemToCartHandler,
    };

    return <CartContex.Provider value={cartContex}>
        {props.children}
    </CartContex.Provider>
};

export default CartProvider;