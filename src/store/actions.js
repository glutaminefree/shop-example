import productsData from '../data/products'

export default {
  loadProducts ({commit}) {
    // Emulate async
    setTimeout(() => {
      commit('setProductsList', productsData);
    }, 1600);
  },
}
