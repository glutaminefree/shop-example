import Vue from 'vue';

export default {
  setProductsList (state, data) {
    state.productsList = data;
  },

  clearCart (state) {
    state.productsInCart = {};

    localStorage.setItem('cart', JSON.stringify(state.productsInCart));
  },
  addProductToCard (state, id) {
    if (state.productsInCart[id]) {
      Vue.set(state.productsInCart, id, state.productsInCart[id] + 1);
    } else {
      Vue.set(state.productsInCart, id, 1);
    }

    localStorage.setItem('cart', JSON.stringify(state.productsInCart));
  },
  removeProductFromCart (state, data) {
    if (data.id in state.productsInCart === false) {
      return false;
    }

    if (data.full || state.productsInCart[data.id] === 1) {
      Vue.delete(state.productsInCart, data.id);
    } else if (state.productsInCart[data.id] > 1) {
      Vue.set(state.productsInCart, data.id, state.productsInCart[data.id] - 1);
    }

    localStorage.setItem('cart', JSON.stringify(state.productsInCart));
  },
  setProductCountInCart (state, data) {
    Vue.set(state.productsInCart, data.id, data.value);
    localStorage.setItem('cart', JSON.stringify(state.productsInCart));
  },

  restoreCart (state) {
    const cartJson = localStorage.getItem('cart');

    if (cartJson === null) {
      return false;
    }

    const cart = JSON.parse(cartJson);

    if (typeof cart === 'object') {
      state.productsInCart = cart;
    }
  },
};
