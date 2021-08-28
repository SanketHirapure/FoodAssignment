import classes from './Mealitem.module.css';
import MealItemForm from './MealItemForm';
import { useContext } from 'react';
import CreateContext from '../../store/Cart-context';

const MealItem = (props) =>{
    const price = `₹ ${props.price}`;
    const Cartctx = useContext(CreateContext);

    const addtoCarthandeler = (amount) =>{
        Cartctx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        })
    };
    return(
        <li className={classes.meal}>
            <div>
            <img className={classes.imgs1} src="http://images.sasongsmat.nu/vegetarianmark/indian-vegetarian-mark-60.png"/>
                <h3>{props.name}</h3>
               
                <div className={classes.price}>{price}</div>
                <div className={classes.description}>{props.description}</div>
                
            </div>
            <div>
                <MealItemForm onAddtoCart ={addtoCarthandeler} id ={props.id}/>
            </div>
        </li>
    )
}

export default MealItem;