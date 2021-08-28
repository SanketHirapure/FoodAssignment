import React from 'react';
import classes from './MealitemForm.module.css';
import Input from '../../UI/Input';
import { useRef } from 'react';

const MealItemForm = (props) =>{
    const amountInputRef = useRef();

    const submitHandeler = (event) =>{    
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountnumber = +enteredAmount;             //converts above stored value in string to number

        if(enteredAmount.trim().length ===0 ||
            enteredAmountnumber<0||
            enteredAmountnumber>5 ){
                return;
        }

        props.onAddtoCart(enteredAmountnumber);              //in this component we only have amount no id,name else
    }
    return (
        <form className={classes.form} onSubmit={submitHandeler}>
            
            <img className={classes.imgs} src="https://images.unsplash.com/photo-1550547660-d9450f859349?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnVyZ2Vyc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"/>
            <Input  label ="Amount" 
            ref={amountInputRef}
            input={{
            id:'amount_'+ props.id,
            type:'number',
            min:'1',
            max:'5',
            step:'1',
            defaultValue:'1'
            }}
            />
            <button>Add</button>

        </form>
    )
}

export default MealItemForm;
