import api from '../../api'
import { API, CATALOG_URL } from '../../constants';
import { IProduct } from '../../types';

export default {
  namespaced: true,
  state: () => ({
    all: [],
    filtered: [],
  }),
  getters: {},
  actions: {
    async getAllProducts ({ commit }) {
      const allProducts = await api.getJson(`${API + CATALOG_URL}`);

      commit('setProducts', allProducts)
    },
    filterGoods({ state, commit }, search: string) {
      const regexp = new RegExp(search, 'i');
      state.filtered = state.all.filter((product: IProduct) => regexp.test(product.name));
    },
  },
  mutations: {
    setProducts (state, products) {
      const transformedProducts = [];

      for (let el of products) {
        transformedProducts.push({
          id: el.id_product,
          name: el.product_name,
          price: el.price,
        });
      }

      state.all = transformedProducts;
      state.filtered = transformedProducts;
    },
  }
}
