import React, { Fragment } from 'react'
import reactDom from 'react-dom';
import classes from './Modal.module.css'

const Backdrop = (props)=>{
    return <div className={classes.backdrop} onClick={props.onClick}/>;
}

const Modaloverlay = (props)=>{
    return (
        <div>
            <div className={classes.modal}>{props.children}</div>
        </div>
    )
}
const Modal =(props)=> {
    const modalelement= document.getElementById('modalelement');
    return (
        <Fragment>
           {reactDom.createPortal(<Backdrop onClick={props.onClose}/>,modalelement)}
           {reactDom.createPortal(<Modaloverlay>{props.children}</Modaloverlay>,modalelement)} 
        </Fragment>
    )
}

export default Modal
