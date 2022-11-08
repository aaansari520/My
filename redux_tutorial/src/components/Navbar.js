import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  //   const { items } = useSelector((store) => store.cart);// istarhasde destructure nahi karan hai
  const items = useSelector((store) => store.cart);

  return (
    <div className="show">
      <span className="logo"> Redux Store</span>
      <div>
        <Link className="navLink" to="/">
          Home
        </Link>
      </div>
      <div>
        <Link className="navLink" to="/cart">
          Cart
        </Link>
      </div>
      <span className="span">Cart items : {items.length}</span>
    </div>
  );
};

export default Navbar;
