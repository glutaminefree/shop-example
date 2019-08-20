export default {
  setProductsList (state, data) {
    state.productsList = data;
  },

  clearCart (state) {
    state.productsInCart = [];

    localStorage.setItem('cart', JSON.stringify([]));
  },
  setCart (state, ids) {
    state.productsInCart = ids;

    localStorage.setItem('cart', JSON.stringify(state.productsInCart));
  },
  addProductToCard (state, id) {
    state.productsInCart.push(id);

    localStorage.setItem('cart', JSON.stringify(state.productsInCart));
  },
}
