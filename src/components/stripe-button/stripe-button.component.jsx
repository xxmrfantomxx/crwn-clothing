import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100; //conversion to cents
  const publisableKey = "pk_test_C9XYwmQCyMsbPuKVCnmB0ESn00FlSGKUuq";

  const onToken = token => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWM Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/JHY.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publisableKey}
    />
  );
};

export default StripeCheckoutButton;
