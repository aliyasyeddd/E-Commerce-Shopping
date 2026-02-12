import React from "react";

function Cart() {
  return (
    <div className="wrapper">
      <div className="cart-page-container">
        <div className="cart-container">
          <h2>Your cart</h2>
          <div className="cart-item">
            <img src="image path" alt="image title" />
            <div>
              <h3>Image title</h3>
              <p>Price: $200</p>
              <div className="cart-item-details">
                <input type="number" min="1" />
                <button>update</button>
                <button>Remove</button>
              </div>
            </div>
          </div>
          <div className="cart-total">
            <p>Total: $200</p>
          </div>
          <button className="back-button">Back to shopping</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
