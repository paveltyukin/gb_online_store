//#region Mutations
import { ProductMutationConstants } from '@/store/modules/product/constants';
import { ProductState } from '@/store/modules/product/state';
import { MutationTree } from 'vuex';

export interface Mutations {
  [ProductMutationConstants.UpdateAllProducts](state: ProductState, payload: ProductState): void;
}

export const mutations: MutationTree<ProductState> & Mutations = {
  [ProductMutationConstants.UpdateAllProducts](state: ProductState, payload: ProductState) {
    state.products = payload.products;
  },
};
//#endregion