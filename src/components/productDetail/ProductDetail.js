import { useEffect, useState } from "react";
import "./ProductDetail.css";
import { Link, useParams } from "react-router-dom";

function ProductDetail({addToCartHandler}) {
  const param = useParams();
  const prodId = param.productId;
  const [productById, setProductById] = useState("");

  async function getSingleProduct() {
    var resp = await fetch("https://fakestoreapi.com/products/" + prodId);
    var data = await resp.json();
    setProductById(data);
  }
  useEffect(() => {
    getSingleProduct();
  }, [prodId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="product-detail-container">
      <div className="product-container">
        <img
          src={productById.image}
          alt=""
          className="product-image w-md-100"
        />
        <div className="product-details">
          <h1>{productById.title}</h1>
          <div className="price">
            <span>₹{productById.price}</span> <strike>2799</strike>
          </div>
          <hr />
          <p className="product-desc">{productById.description}</p>
          <hr />
          <div className="buy-btn">
            <Link to={"/buy/:productId"} className="buy-btn-wrapper">
              <button className="buynow-btn">Buy Now</button>
            </Link>
            <Link className="cart-wrapper" >
              <button className="cart-btn" onClick={()=> addToCartHandler(productById)}>Add To Cart</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
