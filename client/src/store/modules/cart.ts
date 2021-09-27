import { ICartItem, IProduct } from '@/types';

// getters
const state = {
  items: [],
  checkoutStatus: null
}

const getters = {
  cartProducts: (state) => {
    return state.items;
  },
};

const actions = {
  addProductToCart: function ({state, commit}, product: IProduct) {

    const productId = product.id;

    const cartItem = state.items.find((product: ICartItem) => product.id === productId);
    if (cartItem) {
      commit('incrementItemQuantity', cartItem)
    }
    else {
      commit('pushProductToCart', product)
    }
  },
}

// mutations
const mutations = {
  pushProductToCart (state, product: IProduct) {
    state.items.push({
      id: product.id,
      price: product.price,
      name: product.name,
      quantity: 1
    });
  },
  incrementItemQuantity (state, { id } : ICartItem) {
    const cartItem = state.items.find((item: ICartItem) => item.id === id)
    cartItem.quantity++
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
