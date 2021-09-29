//#region Mutations
import { CartMutationConstants } from '@/store/modules/cart/constants';
import { CartState } from '@/store/modules/cart/state';
import { MutationTree } from 'vuex';
import { ICartItem } from '@/types';

export interface Mutations {
  [CartMutationConstants.UpdateAllCarts](state: CartState, payload: ICartItem[]): void;
}

export const mutations: MutationTree<CartState> & Mutations = {
  [CartMutationConstants.UpdateAllCarts](state: CartState, payload: ICartItem[]) {
    state.cartItems = payload;
  },
};
//#endregion
