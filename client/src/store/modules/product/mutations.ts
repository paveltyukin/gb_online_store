//#region Mutations
import { ProductMutationConstants } from '@/store/modules/product/constants';
import { ProductState } from '@/store/modules/product/state';
import { MutationTree } from 'vuex';
import { IProduct } from '@/types';

export interface Mutations {
  [ProductMutationConstants.UpdateAllProducts](state: ProductState, payload: IProduct[]): void;
  [ProductMutationConstants.UpdateFilteredProducts](state: ProductState, payload: IProduct[]): void;
}

export const mutations: MutationTree<ProductState> & Mutations = {
  [ProductMutationConstants.UpdateAllProducts](state: ProductState, payload: IProduct[]) {
    state.products.all = payload;
  },
  [ProductMutationConstants.UpdateFilteredProducts](state: ProductState, payload: IProduct[]) {
    state.products.filtered = payload;
  },
};
//#endregion
