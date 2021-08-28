import classes from './HeaderCartbutton.module.css'
import React from 'react'
import CartIcon from '../Cart/Carticon'
import { useContext } from 'react'
import CreateContext from '../store/Cart-context'

const HeaderCartbutton = (props) => {
    const Cartctx = useContext(CreateContext);

    const noofcartitem = Cartctx.items.reduce((curNumber, item) =>{
        return curNumber+item.amount;
    }, 0)
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>
                {noofcartitem}
            </span>
        </button>
    )
}

export default HeaderCartbutton;
