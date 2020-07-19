import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import './collection-preview.style.scss';
const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="Title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItems }) => (
          <CollectionItem key={id} {...otherItems} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
