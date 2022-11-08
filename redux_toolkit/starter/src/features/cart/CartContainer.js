import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { BsFillEmojiFrownFill } from "react-icons/bs";
import { BsFillEmojiSmileFill } from "react-icons/bs";
import CartItem from "./CartItem";
// import { clearCart } from "./createSlice";
import { openModal } from "../modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();
  const { cartItems, total, amount } = useSelector((state) => state.cart);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>Your Cart</h2>
          <h4 className="empty-cart">
            Nothing to Show! <BsFillEmojiFrownFill color="red" />, please add
            something to your cart <BsFillEmojiSmileFill color="green" />
          </h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>Your Cart</h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button className="btn clear-btn" onClick={() => dispatch(openModal())}>
          Clear All
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
