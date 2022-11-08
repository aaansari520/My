import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products = useSelector((store) => store.cart);

  const handleRemove = (id) => {
    dispatch(remove(id));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div className="cardWrapper">
        {products.map((product) => (
          <div className="cartCard">
            <img src={product.image} alt={product.title} />
            <h4>{product.title}</h4>
            <h5>{product.price}</h5>
            <button className="btn" onClick={() => handleRemove(product.id)}>
              REMOVE
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
