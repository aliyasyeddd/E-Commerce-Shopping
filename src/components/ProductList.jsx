import React, { useEffect, useState } from "react";
import NavBar from "./NavBar";

function ProductList() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://fakestoreapi.com/products")
       const data = await response.json();
         setProducts(data)
    }
    fetchProducts();
  }, [])


  return (
    <>
      <NavBar />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>{product.title.length > 20 ? `${product.title.slice(0, 20)}...` : product.title}</h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
