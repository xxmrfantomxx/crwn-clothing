import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../Redux/cart/cart.selectors";
import { toggleCartHidden } from "../../Redux/cart/cart.actions";

import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className={`${cartItems.length >= 3 ? "scroll-bar" : ""} cart-items`}>
      {cartItems.length ? (
        cartItems.map(cartItem => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>

    <CustomButton
      style={cartButtonStyles}
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go To Checkout
    </CustomButton>
  </div>
);

const cartButtonStyles = {
  padding: 0
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));
