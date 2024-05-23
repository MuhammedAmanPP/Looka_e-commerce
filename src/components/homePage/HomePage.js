import ProductList from '../ProductList/ProductList'
import './HomePage.css'



function HomePage() {
  // const [id,setId]=useState()
  
  return (
    <>
    <div className='home-page-container d-flex' >
     <div className='container'>
       <h1>Welcome To </h1>
       <h1>Looka</h1>
       <div className='login-btn-container'>
        <a href='#' className='login-btn text-white'>Login</a>
        <a href='#' className='shop-btn text-white'>Shop</a>
       </div>
     </div>
    </div>
    <ProductList/>
    </>
  )
}

export default HomePage
