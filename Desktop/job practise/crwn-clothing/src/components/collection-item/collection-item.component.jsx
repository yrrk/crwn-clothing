import React from 'react';
import './collection-item.styles.scss';
import { connect } from 'react-redux';
import { AddItem } from '../../redux/cart/cart.action';
import CustomButton from '../custom-button/custom-button.component';
const CollectionItem = ({ item, AddItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">₹{price}</span>
      </div>
      <CustomButton inverted onClick={() => AddItem(item)}>
        Add To Cart
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  AddItem: (item) => dispatch(AddItem(item)),
});

export default connect(null, mapDispatchToProps)(CollectionItem);
// ask nisarg about this why this css in custombuttn
