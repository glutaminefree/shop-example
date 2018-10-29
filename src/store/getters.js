export default {
    loadingInProgress: state => {
        return state.productsList.length === 0;
    },
    cartLength: state => {
        return state.productsInCart.length;
    },
}
