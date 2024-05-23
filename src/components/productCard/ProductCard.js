import "./ProductCard.css";
import { useState } from "react";
import {Link} from 'react-router-dom'
function ProductCard({apiData}) {
 
  return (
    <div className="product-container d-flex bg-light">
      {apiData.map((p) => {
        return (
          <Link to={'/product/'+p.id+'/'+p.title} className="text-dark product-wrapper">
          <div className="card-container flex-column">
            <img src={p.image} alt="" />
            <div className="title-container">
            <h3>{p.title}</h3>
            <p>{p.price}</p>
            </div>
          </div>
          </Link>
        );
      })}
    </div>
  );
}

export default ProductCard;
