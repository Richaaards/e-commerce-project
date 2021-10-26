import React from "react";
import Button from "../Button";
import "./CartDropdown.style.scss";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <Button>go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
