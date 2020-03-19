import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import CustomButton from "../../components/custom-button/custom-button.component";

import {
  selectCartItems,
  selectCartTotal
} from "../../Redux/cart/cart.selectors";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total, history }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckoutItem cartItem={cartItem} key={cartItem.id} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    {/*
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - exp: 01/21 CVV: 123
      </div>
      */}
    <div className="button-box">
      <CustomButton
        style={buttonStyles}
        inverted
        onClick={() => {
          history.push("/shop");
        }}
      >
        BACK TO SHOP
      </CustomButton>
      <StripeCheckoutButton price={total} />
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
});

const buttonStyles = {
  padding: 0
};

export default connect(mapStateToProps)(CheckoutPage);
