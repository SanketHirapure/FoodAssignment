import React from 'react'
import classes from './Input.module.css';


const Input = React.forwardRef((props,ref)=> {
    return (
        <div>
<div className={classes.input}>
            <label htmlFor={props.input.id}>{props.label}</label>
            <input ref = {ref} {...props.input}/>
        </div>
        </div>
        
    )
});

export default Input
