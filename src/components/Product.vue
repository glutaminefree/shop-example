<template lang="pug">
  .product.card
    .card-image
      figure.image.is-4by3
        img(:src="data.imgUrl" :alt="data.title")
    .card-content
      .product__title
        h3.title.is-3 {{ data.title }}
      span.tag.is-info.is-medium {{ formatMoney(data.price) }}
      p.product__description.content {{ data.about }}
      .product__buttons.columns
        .column.has-centered-text
          a.product__button.button.is-primary(href="#" @click.prevent="buy") Buy
        .column.has-centered-text
          a.product__button.product__add-to-card.button.is-warning(href="#" @click.prevent="addToCart") Add to cart
</template>

<script>
import mixinFormatMoney from '@/mixins/format-money'

export default {
  mixins: [mixinFormatMoney],
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  methods: {
    buy () {
      this.$store.commit('clearCart');
      this.$store.commit('addProductToCard', this.data.id);
      this.$router.push('/cart');
    },
    addToCart () {
      this.$store.commit('addProductToCard', this.data.id);
    },
  },
}
</script>

<style lang="less">
.product {
  &__ {
    &title {}
    &description {
      margin: 10px 0 20px;
    }
    &buttons {}
    &button {
      width: 100%;
    }
  }
}
</style>
