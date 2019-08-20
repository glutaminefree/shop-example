<template lang="pug">
  nav.navbar.is-fixed-top(role="navigation" aria-label="main navigation")
    .container
      .navbar-brand
        router-link.navbar-item(to="/")
          img(src="../assets/logo.png" width="70" height="28")
        a.navbar-burger.burger(role="button" aria-label="menu" aria-expanded="false" data-target="shop-nav")
          span(aria-hidden="true")
          span(aria-hidden="true")
          span(aria-hidden="true")
      #shop-nav.navbar-menu
        .navbar-start
          router-link.navbar-item(to="/") Home
          .navbar-item.has-dropdown.is-hoverable
            a.navbar-link(href="#" @click.prevent) Categories
            .navbar-dropdown
              a.navbar-item(href="/category" @click.prevent) Phones
              a.navbar-item(href="/category" @click.prevent) Tablets
              a.navbar-item(href="/category" @click.prevent) Laptops
              hr.navbar-divider
              a.navbar-item(href="/category" @click.prevent) Software
        .navbar-end
          .navbar-item
            .buttons
              router-link.button.is-primary.is-medium(to="/cart") {{ cartHint }}
</template>

<script>
export default {
  computed: {
    cartHint () {
      const cartLength = this.$store.getters.cartLength === 0 ? '' : ` (${this.$store.getters.cartLength})`;

      return `Cart${cartLength}`;
    },
  },
  mounted () {
    document.body.classList.add('has-navbar-fixed-top');
  },
}
</script>

<style lang="less">
.navbar {
  padding: 10px 0;
}
</style>
