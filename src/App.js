import Header from "./components/Layout/Header";
import Meals from './components/Meals/Meals';
import Cart from "./components/Cart/Cart";
import CartProvider from './components/store/Cart-provider'
import {  useState } from "react";

function App() {
  
  // Show & Hide Button -> useState 
  const [cartIsShown,setcartIsShown]=useState(false);
  
  const showCartHandeler =()=>{
    setcartIsShown(true);
  } 

  const hideCartHandeler =()=>{
    setcartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onHideCart={hideCartHandeler}/>}
      <Header onShowCart={showCartHandeler} />
      <Meals />
    </CartProvider>
  );
}

export default App;
