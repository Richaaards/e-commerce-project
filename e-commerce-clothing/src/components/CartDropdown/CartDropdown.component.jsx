import React from "react";
import { connect } from "react-redux";

import Button from "../Button";
import CartItem from "../CartItem";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import "./CartDropdown.style.scss";

const CartDropdown = ({ cartItems }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <Button>go to checkout</Button>
    </div>
  );
};

// const mapStateToProps = ({ cart: { cartItems } }) => ({
//   cartItems,
// });

const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});

export default connect(mapStateToProps)(CartDropdown);
