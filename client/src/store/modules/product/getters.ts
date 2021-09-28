import { ProductGetterConstants } from '@/store/modules/product/constants';
import { GetterTree } from 'vuex';
import { State as RootState } from '@/store';
import { ProductState } from '@/store/modules/product/state';
import { IProduct } from '@/types';

export type ProductGetters = {
  [ProductGetterConstants.GetProducts](state: ProductState): IProduct[];
  [ProductGetterConstants.GetFilteredProducts](state: ProductState): IProduct[];
};

export const getters: GetterTree<ProductState, RootState> & ProductGetters = {
  [ProductGetterConstants.GetProducts]: state => state.products.filtered,
  [ProductGetterConstants.GetFilteredProducts]: state => state.products.filtered,
};
