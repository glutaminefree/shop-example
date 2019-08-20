<template lang="pug">
  .cart.page-content
    section.section
      .container
        h1.title.is-1.is-spaced Your cart
        p.subtitle Here you can edit your cart items
    .container
      transition(name="fade" mode="out-in")
        .cart__loading.loading(v-if="loadingInProgress")
          .loading__dot
          .loading__dot
          .loading__dot
        .cart__body(v-else)
          .cart__items(v-if="cartProducts.length > 0")
            .cart__products
              .cart__product(v-for="product in cartProducts" :key="`product-${product.id}-${product.count}`")
                product-in-cart(:data="product")
            .cart__bottom.columns
              .cart__buttons.column
                button.cart__button.button.is-primary.is-medium(@click.prevent) Go to checkout
                button.cart__button.button.is-warning.is-medium(@click.prevent="clearCart") Clear my cart
              .cart__total.column.has-text-right-tablet
                span.cart__total-title.title.is-3 Total:
                span.cart__total-value.is-size-4 {{ totalPriceString }}
          .cart__no-items(v-else)
            .content
              p You have no items in your cart  😧 Go to <router-link to="/">Products</router-link> page and add some 😃
</template>

<script>
import {mapState, mapGetters, mapMutations} from 'vuex'
import productInCart    from '@/components/ProductInCart'
import mixinFormatMoney from '@/mixins/format-money'

export default {
  mixins: [mixinFormatMoney],
  components: {
    productInCart,
  },
  computed: {
    ...mapState([
      'productsList',
      'productsInCart',
    ]),
    ...mapGetters([
      'loadingInProgress',
      'cartProducts',
      'cartTotalPice',
    ]),

    totalPriceString () {
      return this.formatMoney(this.cartTotalPice);
    },
  },
  methods: {
    ...mapMutations(['clearCart']),
  },
}
</script>

<style lang="less">
.cart {
  &__ {
    &loading {
    }
    &body {
      @media (max-width: 1087px) {
        padding: 0 20px;
      }
    }
    &products {
    }
    &product {
      &:not(:first-child) {
        margin-top: 20px;
      }
    }
    &bottom {
      margin-top: 70px;
    }
    &button {
      &:not(:last-child) {
        margin-right: 15px;
      }
    }
    &total {
      &-title {
        padding-right: 15px;

        &.title {
          &:not(:last-child) {
            margin-bottom: 0;
          }
        }
      }
    }
  }
}
</style>
