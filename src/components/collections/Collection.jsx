import React from "react";
import "./Collection.css";
import { productList } from "../../services/productList";

const Collection = (props) => {
  let productData = props.productData;
  

  return (
    <div className="collection-container">
      <div className="left-container-collection">
        <h3>CATEGORIES</h3>
        <ul className="categories-list">
          <li>
            <input type="checkbox" />
            Clothes
          </li>
          <li>
            <input type="checkbox" />
            Electronics
          </li>
          <li>
            <input type="checkbox" />
            Furniture
          </li>
        </ul>
      </div>
      <div className="right-container-collection">
        <div className="product-list">
       {
        productData.map((product)=>(
          <div className="product">
            <img src={product.images[1]} alt="" className="product-img"/>
            <span>{product.title}</span>
            <span>${product.price}</span>
            <button>Add to Cart</button>
          </div>
        ))
       }
       </div>
      </div>
    </div>
  );
};

export default Collection;
