import React from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { addItem, removeItems, subItem } from "./createSlice";

const CartItem = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();
  return (
    <article className="cart-item">
      <img src={img} alt={title} />
      <div>
        <h4>{title}</h4>
        <h4 className="item-price">${price}</h4>
        <button
          className="remove-btn"
          onClick={() => dispatch(removeItems(id))}
        >
          remove
        </button>
      </div>
      <div>
        <button
          className="amount-btn"
          onClick={() => dispatch(addItem({ id }))}
        >
          <BsChevronUp />
        </button>
        <p className="amount">{amount}</p>
        <button
          className="amount-btn"
          onClick={() => {
            if (amount === 1) {
              return dispatch(removeItems(id));
            }
            dispatch(subItem({ id }));
          }}
        >
          <BsChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItem;
