import { Link } from 'react-router-dom'
import './Cart.css'


function Cart({cartItem}) {
    return (
      <div className='cart-wrapper-container'>
       {
        cartItem.map((p)=>{
          return(
            <>
            <Link className='cart-items' to={'/product/'+p.id+'/'+p.title}>
            <img src={p.image}/>
            <div className='cart-title'>
            <h1 className='text-dark'>{p.title}</h1>
            <p>{p.description}</p>
            <h2 className='text-dark'>₹{p.price}</h2>
            </div> 
            </Link>
              <hr/>
              </>
          )
        })
       }
      </div>
    )
  
}

export default Cart
