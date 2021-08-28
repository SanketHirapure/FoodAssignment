import React from 'react';
import classes from './Header.module.css'
import HeaderCartbutton from './HeaderCartbutton';
import { ImCheckboxUnchecked } from "react-icons/im";
import { MdFavoriteBorder,MdStarBorder } from "react-icons/md";
import { FiHeart} from "react-icons/fi";
function Header(props) {
    return (
        <>
        <header className={classes.header}>
            <div className={classes.heading}>
            <h1>McDonald's</h1>
            <h5> <MdStarBorder/> 4.3 | 35 mins | ₹ 400 for two</h5>
            
           < input className={classes.btn} type="text"  placeholder="Search for dishes" />  <button className={classes.btn}> <ImCheckboxUnchecked/>  <b> Veg Only</b></button>  <button className={classes.btn}> <FiHeart/> <b>Favourite</b></button> 
            </div>
            <div>
            <HeaderCartbutton onClick={props.onShowCart}/>
            </div>
        
                
        </header> 
           
        </>
    )
}

export default Header

 {/* <HeaderCartbutton onClick={props.onShowCart}/>   */} 