//#region Imports
import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from 'vuex';
import { State as RootState } from '@/store';
import { getters, ProductGetters } from '@/store/modules/product/getters';
import { state, ProductState } from '@/store/modules/product/state';
import { actions, Actions } from '@/store/modules/product/actions';
import { mutations, Mutations } from '@/store/modules/product/mutations';
//#endregion

//#region Store Type & Module
export type ProductStore<S = ProductState> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
  > & {
  getters: {
    [K in keyof ProductGetters]: ReturnType<ProductGetters[K]>;
  };
} & {
  commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
    key: K,
    payload: P,
    options?: CommitOptions,
  ): ReturnType<Mutations[K]>;
} & {
  dispatch<K extends keyof Actions, P extends Parameters<Actions[K]>[1]>(
    key: K,
    payload: P,
    options?: DispatchOptions,
  ): ReturnType<Actions[K]>;
};

export const ProductModule: Module<ProductState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
//#endregion