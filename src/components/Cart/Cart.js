import React from 'react'
import classes from './Cart.module.css'
import Modal from '../UI/Modal'
import CartItem from './CartItem';

import { useContext } from 'react';
import CreateContext from '../store/Cart-context';

const Cart = (props) => {
    // UseContext=> alternative which helps to give nice look above consumer (context -api)
    const cartctx = useContext(CreateContext);

    const totalAmount = `₹${cartctx.totalAmount.toFixed(2)}`;
     
    const hasitems = cartctx.items.length >0;

    const cartItemRemoveHandeler = (id) =>{
        cartctx.removeItem(id);
    };

    const cartItemAddHandeler = (item) =>{
        cartctx.addItem({...item,amount:1});
    };

    const cartItems =   <ul className={classes['cart-items']}>
                        {cartctx.items.map(item => (
                            <CartItem 
                            key ={item.id} 
                            name={item.name} 
                            amount={item.amount} 
                            price={item.price} 
                            onRemove = {cartItemRemoveHandeler.bind(null,item.id)}
                            onAdd ={cartItemAddHandeler.bind(null,item)}/>
                        ))}
                        </ul>
    
    return (
        <Modal onClose={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Subtotal</span>
                
                <span>{totalAmount} </span>
            </div>

            <p>Extra charges may apply</p>

            <div className={classes.actions1}>
            <button className={classes['button--alt1']} onClick={props.onHideCart}>CHECKOUT</button>  
            <ul></ul>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']} onClick={props.onHideCart}>Close</button>
                {hasitems && <button className={classes.button}>Order</button>}
            </div>
        </Modal>
    );
};

export default Cart
