import StripeCheckout, { Token } from "react-stripe-checkout";

import React from "react";
import axios from "axios";

interface StripeButtonProps {
  price: number;
}

const StripeButton: React.FC<StripeButtonProps> = ({ price }) => {
  const priceForStripe = price * 100; // Stripe expects the price in cents, so we must convert it from dollars
  const publishableKey = "pk_test_Cv3AapQSPq8sTA8QU2HJ7U5u00kJDlMnnQ";

  const onTokenHandle = (token: Token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token
      }
    })
      .then(_ => {
        alert("Payment was successful");
      })
      .catch(error => {
        console.log("Payment error ", JSON.parse(error));
        alert(
          "There was an issue with your payment. Please make sure you use the provided credit card"
        );
      });
  };

  return (
    <StripeCheckout
      amount={priceForStripe}
      billingAddress
      description={`Your total is $${price}`}
      image="https://svgshare.com/i/CUz.svg"
      label="Pay now"
      name="CRWN Clothing Ltd."
      panelLabel="Pay Now"
      shippingAddress
      stripeKey={publishableKey}
      token={onTokenHandle}
    />
  );
};

export default StripeButton;
