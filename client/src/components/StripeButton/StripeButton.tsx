import StripeCheckout, { Token } from 'react-stripe-checkout';

import React from 'react';
import axios from 'axios';

interface StripeButtonProps {
  price: number;
}

const StripeButton = ({ price }: StripeButtonProps) => {
  const priceForStripe = price * 100; // Stripe expects the price in cents, so we must convert it from dollars
  const publishableKey = process.env.STRIPE_PUBLIC_KEY as string;

  const onTokenHandle = (token: Token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((_) => {
        alert('Payment was successful');
      })
      .catch((error) => {
        console.log('Payment error ', error);
        alert(
          'There was an issue with your payment. Please make sure you use the provided credit card'
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
