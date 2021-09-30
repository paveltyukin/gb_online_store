//#region Imports
import { ActionContext, ActionTree } from 'vuex';
import { CartState } from '@/store/modules/cart/state';
import { State as RootState } from '@/store';
import { CartActionConstants, CartMutationConstants } from '@/store/modules/cart/constants';
import { Mutations } from '@/store/modules/cart/mutations';
import $api from '@/api';
import { API_URL } from '@/constants';
import { ICartItem, SetQuantityProduct } from '@/types';

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<CartState, RootState>, 'commit'>;

export interface Actions {
  [CartActionConstants.SetQuantityProductsInCart](
    { commit }: AugmentedActionContext, payload: SetQuantityProduct
  ): Promise<void>;
  [CartActionConstants.AddProductToCart](
    { commit }: AugmentedActionContext, productId: number,
  ): Promise<void>;
  [CartActionConstants.GetAllProductsInCart](
    { commit }: AugmentedActionContext,
  ): Promise<void>;
}

export const actions: ActionTree<CartState, RootState> & Actions = {
  async [CartActionConstants.SetQuantityProductsInCart](
    { commit }: AugmentedActionContext, payload: SetQuantityProduct
  ) {
    const response = await $api.post(`${API_URL}/cart`, payload);

    commit(CartMutationConstants.UpdateAllCarts, response.data);
  },
  async [CartActionConstants.AddProductToCart]({ commit }: AugmentedActionContext, productId: number) {
    const response = await $api.post(`${API_URL}/add_to_cart`, productId);
  },
  async [CartActionConstants.GetAllProductsInCart](
    { commit }: AugmentedActionContext
  ): Promise<void> {
    const response = await $api.post(`${API_URL}/get_cart`);

    commit(CartMutationConstants.UpdateAllCarts, response.data);
  },
};
//#endregion
