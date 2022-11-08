import { Badge } from "@mui/material";
import React from "react";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";

const Navbar = () => {
  //   const amount = useSelector((store) => store.cart.amount);
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Redux Cart</h3>
        <div className="nav-container">
          <Badge badgeContent={amount} color="success">
            <h3>
              <FaCartArrowDown />
            </h3>
          </Badge>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
