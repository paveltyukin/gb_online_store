import { CartGetterConstants } from '@/store/modules/cart/constants';
import { GetterTree } from 'vuex';
import { State as RootState } from '@/store';
import { CartState } from '@/store/modules/cart/state';

export type CartGetters = {
  [CartGetterConstants.CartInfo](state: CartState): CartState;
};

export const getters: GetterTree<CartState, RootState> & CartGetters = {
  [CartGetterConstants.CartInfo]: state => state,
};