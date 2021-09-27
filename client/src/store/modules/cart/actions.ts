//#region Imports
import { ActionContext, ActionTree } from 'vuex';
import { CartState } from '@/store/modules/cart/state';
import { State as RootState } from '@/store';
import { CartActionConstants, CartMutationConstants } from '@/store/modules/cart/constants';
import { Mutations } from '@/store/modules/cart/mutations';
import $api from '@/api';
import { API_URL } from '@/constants';

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<CartState, RootState>, 'commit'>;

export interface Actions {
  [CartActionConstants.GetAllProductsInCart](
    { commit }: AugmentedActionContext,
    userId: number,
  ): Promise<void>;
}

export const actions: ActionTree<CartState, RootState> & Actions = {
  async [CartActionConstants.GetAllProductsInCart]({ commit }: AugmentedActionContext, userId: number) {
    const response = await $api.post(`${API_URL}/carts`, userId);

    const status = response.data?.status;
    if (status === 'success') {
      const token = response.data?.token;
      commit(CartMutationConstants.UpdateAllCarts, token);
    }
  },
};
//#endregion