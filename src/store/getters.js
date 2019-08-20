export default {
  loadingInProgress: state => {
    return state.productsList.length === 0;
  },
  cartLength: state => {
    return Object.values(state.productsInCart).reduce((total, n) => total += n, 0);
  },
  cartProducts: state => {
    const productsList = state.productsList.filter(p => p.id in state.productsInCart);

    return productsList.map((p) => {
      p.count = state.productsInCart[p.id];
      return p;
    }).reverse();
  },
  cartTotalPice: (state, getters) => {
    const products = Object.values(getters.cartProducts);

    return products.reduce((total, p) => total += p.price * p.count, 0);
  },
};
