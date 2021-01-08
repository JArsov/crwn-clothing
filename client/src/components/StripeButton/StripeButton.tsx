import {
  CartActionWithPayload,
  clearCart,
} from '../../store/actions/cartActions';
import React, { Dispatch } from 'react';
import StripeCheckout, { Token } from 'react-stripe-checkout';

import axios from 'axios';
import { useDispatch } from 'react-redux';

interface StripeButtonProps {
  price: number;
}

const StripeButton = ({ price }: StripeButtonProps) => {
  const priceForStripe = price * 100; // Stripe expects the price in cents, so we must convert it from dollars

  const publishableKey = process.env.REACT_APP_STRIPE_PUBLIC_KEY as string;
  const cartDispatch = useDispatch<Dispatch<CartActionWithPayload>>();

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
        cartDispatch(clearCart());
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
