<template lang="pug">
  article.cart-item.media.box
    .media-left.cart-item__media
      figure.cart-item__photo.image
        img(:src="data.imgUrl" :alt="data.title")
    .media-content.cart-item__body
      .cart-item__body-box
        .cart-item__text.content
          h3.cart-item__title.title.is-4 {{ data.title }}
          span.tag.is-info {{ formatMoney(data.price) }}
          p.cart-item__desctiption {{ data.about }}
        .cart-item__count
          .field.has-addons
            .control
              button.button(@click.prevent="removeProductFromCart({id: data.id})" :disabled="data.count === 1") -
            .control
              input.input.has-text-centered(type="text" v-model="count")
            .control
              button.button(@click.prevent="addProductToCard(data.id)" :disabled="data.count === maxLimit") +
    .media-right.cart-item__remove
      button.delete.is-medium(@click.prevent="removeProductFromCart({id: data.id, full: true})")
</template>

<script>
import { mapMutations } from 'vuex';
import mixinFormatMoney from '@/mixins/format-money';

export default {
  mixins: [mixinFormatMoney],
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      maxLimit: 10,
    };
  },
  computed: {
    count: {
      get() {
        return this.data.count;
      },
      set(value) {
        let n = parseInt(value, 10);

        if (isNaN(n) || n < 1) {
          n = 1;
        }

        this.setProductCountInCart({
          id: this.data.id,
          value: n,
        });
      },
    },
  },
  methods: {
    ...mapMutations([
      'addProductToCard',
      'removeProductFromCart',
      'setProductCountInCart',
    ]),
  },
};
</script>

<style lang="less">
.cart-item {
  &__ {
    &photo {
      max-width: 128px;
      max-height: 128px;
    }
    &body {
      height: 100%;
      -webkit-align-self: center;
      align-self: center;

      &-box {
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
      }
    }
    &text {
      margin-right: 30px;
    }
    &count {
      -webkit-flex-shrink: 0;
      flex-shrink: 0;
      -webkit-align-self: center;
      align-self: center;
      margin-left: auto;
      margin-right: 50px;
      width: 120px;
    }
  }

  @media (max-width: 768px) {
    &__ {
      &body {
        &-box {
          -webkit-flex-direction: column;
          flex-direction: column;
        }
      }
      &text {
        margin-right: 0;
      }
      &count {
        -webkit-align-self: flex-start;
        align-self: flex-start;
        margin: 15px 0 0;
      }
    }
  }
  @media (max-width: 480px) {
    position: relative;
    -webkit-flex-direction: column;
    flex-direction: column;
    -webkit-align-items: center;
    align-items: center;

    &__ {
      &media {
        width: 100%;
        margin-right: 0;
      }
      &photo {
        width: 100%;
        max-width: 100%;
        max-height: none;
      }
      &body {
        margin-top: 20px;
      }
      &remove {
        position: absolute;
        top: -12px;
        right: -12px;
        opacity: 1;
      }
    }
  }
}
</style>
