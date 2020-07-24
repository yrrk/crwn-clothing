import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';
import {
  ClearItemFromCart,
  AddItem,
  RemoveItem,
} from '../../redux/cart/cart.action';
const CheckoutItem = ({ cartItem, ClearItem, RemoveItem, AddItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => RemoveItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={() => AddItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className="price">₹{price}</span>
      <div className="remove-button" onClick={() => ClearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  ClearItem: (cartItem) => dispatch(ClearItemFromCart(cartItem)),
  RemoveItem: (cartItem) => dispatch(RemoveItem(cartItem)),
  AddItem: (cartItem) => dispatch(AddItem(cartItem)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
