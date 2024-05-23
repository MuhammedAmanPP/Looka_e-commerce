import React from 'react'
import { useState,useEffect } from 'react';
import ProductCard from '../productCard/ProductCard';

function ProductList({getSingleProductId}) {
    const [apiData, setApiData] = useState([]);


    useEffect(() => {
      async function apiCall() {
        var resp = await fetch("https://fakestoreapi.com/products");
        var data = await resp.json();
        setApiData(data);
        console.log(apiData);
      }
      apiCall();
    }, []);
  return (
    <>
      <ProductCard  apiData={apiData} getSingleProductId={getSingleProductId}/>
    </>
  )
}

export default ProductList
