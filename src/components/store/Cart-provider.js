import CartContext from "./Cart-context";
import { useReducer } from "react";

// initial state
const defaultCartState = {
    items:[],
    totalAmount:0
}


const cartReducer = (state,action) =>{
    if(action.type==='ADD'){

        const updatedtotalamount = state.totalAmount + action.item.price * action.item.amount;
        const existingcartitemindex = state.items.findIndex(item => item.id === action.item.id);
        const existingcartitem = state.items[existingcartitemindex];
        
        let updateditems;      // used both in if nd else

        if(existingcartitem){
            const updateditem ={
                ...existingcartitem,
                amount:existingcartitem.amount+action.item.amount
            };
            updateditems = [...state.items];                          //getting all the old items
            updateditems[existingcartitemindex] = updateditem;        //editing the item at that index
        } else{
            updateditems = state.items.concat(action.item);
        }
           
        return {
            items:updateditems,
            totalAmount:updatedtotalamount
        }
    }
    if(action.type === "REMOVE"){
        const existingcartitemindex = state.items.findIndex(item => item.id === action.id);
        const existingitem = state.items[existingcartitemindex];
        const updatedtotalamount = state.totalAmount-existingitem.price;

        let updateditems;

        if(existingitem.amount === 1){
            updateditems = state.items.filter(item => item.id !== action.id)  // all the items whose action id is not equal are kept 
        } else{
            const updateditem ={...existingitem, amount:existingitem.amount - 1 }  //if >1 just decrease the amount,dont remove it
            updateditems =[...state.items];
            updateditems[existingcartitemindex] = updateditem;
        }

        return {
            items: updateditems,
            totalAmount:updatedtotalamount
        }
    }
    return defaultCartState;
};

const Cartprovider = (props) =>{
// useReducer HOOK -> contains 4 parmas

    //  obj destructuring params
        // 1. Currentstate
        // 2. dispatch (fx)=> trigger action method like which operation 
   
    // Hook  params
        // 3. reducer (fx)
        // 4. initial state

    const[CartState,dispatchfn]=useReducer(cartReducer,defaultCartState);

// Dispatch(fx) operations ex=> add & remove
    const additemtocarthandeler = (item) => {
        dispatchfn(
            { type:'ADD', item:item }
        );
    };

    const removeitemfromcarthandeler = (id) =>{
        dispatchfn(
            {type:'REMOVE', id:id}
        );
    };

// State Object
    const cartContext ={
        items:CartState.items,
        totalAmount:CartState.totalAmount,
        addItem: additemtocarthandeler,
        removeItem:removeitemfromcarthandeler
    }
    console.log(cartContext.totalAmount);

    return(
    <CartContext.Provider value ={cartContext}>
        {props.children}
    </CartContext.Provider>
    );
}

export default Cartprovider;