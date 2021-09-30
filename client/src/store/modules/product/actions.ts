//#region Imports
import { ActionContext, ActionTree } from 'vuex';
import { ProductState } from '@/store/modules/product/state';
import { State as RootState } from '@/store';
import { ProductActionConstants, ProductMutationConstants } from '@/store/modules/product/constants';
import { Mutations } from '@/store/modules/product/mutations';
import $api from '@/api';
import { API_URL } from '@/constants';
import { AxiosResponse } from 'axios';
import { IProduct } from '@/types';

export type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1],
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<ProductState, RootState>, 'commit'>;

export interface Actions {
  [ProductActionConstants.GetAllProducts](
    { commit }: AugmentedActionContext
  ): Promise<void>;
  [ProductActionConstants.GetFilteredProducts](
    { commit }: AugmentedActionContext,
    payload: string
  ): Promise<void>;
  [ProductActionConstants.GetProduct](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<IProduct>;
}

export const actions: ActionTree<ProductState, RootState> & Actions = {
  async [ProductActionConstants.GetAllProducts]({ commit }: AugmentedActionContext) {
    const response: AxiosResponse = await $api.post(`${API_URL}/products`);
    commit(ProductMutationConstants.UpdateAllProducts, response.data);
    commit(ProductMutationConstants.UpdateFilteredProducts, response.data);
  },
  async [ProductActionConstants.GetFilteredProducts](
    { commit }: AugmentedActionContext,
    payload: string
  ) {
    const response: AxiosResponse = await $api.post(`${API_URL}/filter_products`, {
      filter: payload
    });
    commit(ProductMutationConstants.UpdateFilteredProducts, response.data);
  },
  async [ProductActionConstants.GetProduct](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<IProduct> {
    const response: AxiosResponse = await $api.post(`${API_URL}/product`, {
      id: payload
    });

    return response.data;
  },
};
//#endregion
