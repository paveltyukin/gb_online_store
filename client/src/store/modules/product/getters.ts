import { ProductGetterConstants } from '@/store/modules/product/constants';
import { GetterTree } from 'vuex';
import { State as RootState } from '@/store';
import { ProductState } from '@/store/modules/product/state';

export type ProductGetters = {
  [ProductGetterConstants.ProductInfo](state: ProductState): ProductState;
};

export const getters: GetterTree<ProductState, RootState> & ProductGetters = {
  [ProductGetterConstants.ProductInfo]: state => state,
};