//#region Imports
import { ActionContext, ActionTree } from 'vuex';
import { ProductState } from '@/store/modules/product/state';
import { State as RootState } from '@/store';
import { ProductActionConstants, ProductMutationConstants } from '@/store/modules/product/constants';
import { Mutations } from '@/store/modules/product/mutations';
import $api from '@/api';
import { API_URL } from '@/constants';

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<ProductState, RootState>, 'commit'>;

export interface Actions {
  [ProductActionConstants.GetAllProducts](
    { commit }: AugmentedActionContext,
    userId: number,
  ): Promise<void>;
}

export const actions: ActionTree<ProductState, RootState> & Actions = {
  async [ProductActionConstants.GetAllProducts]({ commit }: AugmentedActionContext, userId: number) {
    const response = await $api.post(`${API_URL}/products`, userId);

    const status = response.data?.status;
    if (status === 'success') {
      const token = response.data?.token;
      commit(ProductMutationConstants.UpdateAllProducts, token);
    }
  },
};
//#endregion