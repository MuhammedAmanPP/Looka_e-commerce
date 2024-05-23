
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/Nav/NavBar';
import HomePage from './components/homePage/HomePage';
import { useEffect, useState } from "react";
import ProductDetail from './components/productDetail/ProductDetail';
import ProductList from './components/ProductList/ProductList';
import Footer from './components/footer/Footer';
import Cart from './components/cart/Cart';
// import ProductDetail from './components/detailPage/ProductDetail';


function App() {
  const [cartItem,setCartItem]=useState([])
  const [cartItemLength,setCartItemLength]=useState(-1)


 function addToCartHandler(getCartItem){
  setCartItem(
    [...cartItem, getCartItem])
    setCartItemLength(cartItem.length)
 }



 console.log(cartItemLength);
 
  return (

    <div className="App">
      
<NavBar cartItemLength={cartItemLength} />

<Routes>
  <Route path='/product/:productId/:productTitle' element={<ProductDetail addToCartHandler={addToCartHandler}/>}/>
  <Route path='/' element={<HomePage/>}/>
  {/* <Route path='/' element={<ProductList/>}/> */}
  <Route path='/cart' element={<Cart cartItem={cartItem}/>}/>
</Routes>
<Footer/>
 </div>
  );
}

export default App;
