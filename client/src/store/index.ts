import { createLogger, createStore } from "vuex";
import { ProductStore, ProductModule } from './modules/product';
import { ProductState } from '@/store/modules/product/state';
import { CartModule } from "@/store/modules/cart";

//#region State
export type State = {
  product: ProductState;
};
//#endregion

//#region Store
export type Store = ProductStore<Pick<State, 'product'>>;

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