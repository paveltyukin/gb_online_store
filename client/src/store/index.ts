import { createLogger, createStore } from "vuex";
import { ProductStore, ProductModule } from './modules/product';
import { CartStore, CartModule } from './modules/cart';
import { ProductState } from '@/store/modules/product/state';
import { CartState } from "@/store/modules/cart/state";

//#region State
export type State = {
  product: ProductState;
  cart: CartState;
};
//#endregion

//#region Store
export type Store = ProductStore<Pick<State, 'product'>> &
  CartStore<Pick<State, 'cart'>>;

export const store = createStore({
  plugins: [createLogger()],
  modules: {
    product: ProductModule,
    cart: CartModule,
  },
});

export function useStore(): Store {
  return store as Store;
}

export default store;
//#endregion
