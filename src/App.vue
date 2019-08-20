<template lang="pug">
  #app
    pageHeader
    router-view
    pageFooter
</template>

<script>
import pageHeader from '@/components/Header';
import pageFooter from '@/components/Footer';

export default {
  components: {
    pageHeader,
    pageFooter,
  },
  created () {
    this.loadProductsData();
    this.restoreCart();
  },
  methods: {
    loadProductsData () {
      this.$store.dispatch('loadProducts');
    },
    restoreCart () {
      this.$store.commit('restoreCart');
    },
  },
};
</script>

<style lang="less">
@import (css) url('https://fonts.googleapis.com/css?family=Ubuntu:400,700');

body {
  background-color: #f7f7f7;
}
#app {
  font-family: 'Ubuntu', sans-serif;
  color: #2c3e50;
}
.page-content {
  padding: 60px 0;
}
.title {
  font-weight: 700;
}

.loading {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 270px;
  height: 100px;
  margin-left: auto;
  margin-right: auto;

  &__dot {
    display: inline-block;
    width: 48px;
    height: 48px;
    background-color: #888;
    border-radius: 50%;
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        animation: sk-bouncedelay 1.4s infinite ease-in-out both;

    &:nth-child(1) {
      -webkit-animation-delay: -0.32s;
      animation-delay: -0.32s;
    }
    &:nth-child(2) {
      -webkit-animation-delay: -0.16s;
      animation-delay: -0.16s;
    }
  }
}
@keyframes sk-bouncedelay {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
