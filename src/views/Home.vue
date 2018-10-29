<template lang="pug">
    .home.page-content
        section.section
            .container
                h1.title.is-1.is-spaced Shop example
                p.subtitle Couple of words about our company. Bla bla lorem ipsum.
        .container
            .products-list
                h2.products-list__title.title.is-2 Our goods
                .products-list__body
                    transition(name="fade" mode="out-in")
                        .products-list__loading.loading(v-if="loadingInProgress")
                            .loading__dot
                            .loading__dot
                            .loading__dot
                        .products-list__items(v-else)
                            .columns.is-multiline
                                .products-list__item.column.is-one-quarter-widescreen.is-one-third-desktop.is-half-tablet(v-for="product in productsList" :key="product.id")
                                    product(:data="product")
</template>

<script>
import {mapState, mapGetters} from 'vuex'
import Product from '@/components/Product'

export default {
    components: {
       Product,
    },
    computed: {
        ...mapState([
            'productsList',
        ]),
        ...mapGetters([
            'loadingInProgress',
        ]),
    },
}
</script>

<style lang="less">
.products-list {
    margin-top: 40px;

    &__ {
        &title {}
        &body {
            margin-top: 30px;
        }
        &loading {
            height: 300px;
        }
        &items {}
        &item {}
    }
}
</style>
