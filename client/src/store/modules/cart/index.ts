//#region Imports
import { CommitOptions, DispatchOptions, Module, Store as VuexStore } from 'vuex';
import { State as RootState } from '@/store';
import { getters, CartGetters } from '@/store/modules/cart/getters';
import { state, CartState } from '@/store/modules/cart/state';
import { actions, Actions } from '@/store/modules/cart/actions';
import { mutations, Mutations } from '@/store/modules/cart/mutations';
//#endregion

//#region Store Type & Module
export type CartStore<S = CartState> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
  > & {
  getters: {
    [K in keyof CartGetters]: ReturnType<CartGetters[K]>;
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

export const CartModule: Module<CartState, RootState> = {
  state,
  getters,
  mutations,
  actions,
};
//#endregion