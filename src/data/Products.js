import React from "react";
import Product from "./Product";
import "./Products.css";

function Products({ data, addedCart }) {
  return (
    <div className="Products">
      {data.map((item) => {
        return <Product key={item.id} name={item.name} price={item.price} img={item.img} description={item.description} item={item} addedCart={addedCart} />;
      })}
    </div>
  );
}

export default Products;
