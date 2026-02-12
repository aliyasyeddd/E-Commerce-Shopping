import React, { useEffect } from "react";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/ShopCart/productSlice";

function ProductList() {
  const { items: products, status } = useSelector((state) => state.products);
  const dispatch = useDispatch();


  
  //once the value of status is changed re run this effect - that is the reason passing this status in dependency array
  //if data succeed  this effect will not run again because data is already fetched
  //values if it is Idle which means my fetch is not started so directly i'm dispatching the action and based on the
  // status value I am just rerunning this effect
  useEffect(() => {
    if (status === "idle") {
      //once i dispatch this action what happens i am fetching the api data and return the data
      dispatch(fetchProducts());
    }
  }, [status]);

  if (status === "loading") return <p>loading products..</p>;
  if (status === "failed")
    return <p>Failed to load products... please try again</p>;

  return (
    <>
      <NavBar />
      <div className="product-list">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h2>
              {product.title.length > 20
                ? `${product.title.slice(0, 20)}...`
                : product.title}
            </h2>
            <p>Price: ${product.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default ProductList;
