import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51H8MKtF5WdpdYtDFtvx2lVtMr07RNHbWspEh27EA6zbpIOHWAXaBc8fhpmUfCgg2b7o8cLcTMy1VMu97cmaZQHye00yRzC0wdK';
  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN CLOTHING PVT LTD."
      billingAddress
      shippingAddress
      description={`Your total is ₹${price}`}
      amount={priceForStripe}
      panelLabel="PAY NOW"
      token={onToken}
      image="https://sendeyo.com/up/d/f3eb2117da"
      stripeKey={publishableKey}
      currency="INR"
    />
  );
};
export default StripeCheckoutButton;
