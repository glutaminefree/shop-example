import numeral from 'numeral'

export default {
  methods: {
    formatMoney (price) {
      return numeral(price).format(`${this.$store.state.currency} 0,0[.]00`);
    },
  },
}
