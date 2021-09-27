//#region Mutations
import { CartMutationConstants } from '@/store/modules/cart/constants';
import { CartState } from '@/store/modules/cart/state';
import { MutationTree } from 'vuex';

export interface Mutations {
  [CartMutationConstants.UpdateAllCarts](state: CartState, payload: CartState): void;
}

export const mutations: MutationTree<CartState> & Mutations = {
  [CartMutationConstants.UpdateAllCarts](state: CartState, payload: CartState) {
    state.cartItems = payload.cartItems;
  },
};
//#endregion