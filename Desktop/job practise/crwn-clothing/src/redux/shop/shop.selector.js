import { createSelector } from 'reselect';
import memoize from 'lodash.memoize';
const shopSelect = (state) => state.shop;

export const selectShopCollections = createSelector(
  [shopSelect],
  (shop) => shop.collections
);
export const selectShopCollectionsForPreview = createSelector(
  [selectShopCollections],
  (collections) => Object.keys(collections).map((keys) => collections[keys])
);
export const selectShopCollection = memoize((collectionUrlParam) =>
  createSelector(
    [selectShopCollections],
    (collections) => collections[collectionUrlParam]
  )
);
