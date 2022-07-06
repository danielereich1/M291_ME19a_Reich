<template>
  <div>
    <h1>Finals Game 1 seats</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <td>&nbsp;&nbsp;&nbsp;</td>
        <th>Price</th>
        <th>&nbsp;</th>
      </tr>
        </thead>
        <tbody>
        <tr v-for="(product, idx) in products" :key="idx">
          <td>{{ product.name }}</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>{{ product.price.toFixed(2) }}</td>
          <td>&nbsp;&nbsp;&nbsp;</td>
          <td>
            <b-button variant="success"  @click="addToCart(product)">+</b-button>
            <b-button variant="danger" @click="removeFromCart(product)">-</b-button>
          </td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Products',
  computed: mapState(['products']),
  methods: {
    addToCart(product) {
      this.$store.commit('addToCart', product);
    },
    removeFromCart(product) {
      this.$store.commit('removeFromCart', product);
    }
  },
  created() {
    this.$store.dispatch("loadProducts")
  }
}
</script>

<style lang="scss" scoped>
body {
  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
  margin: 10%;
  background-color: #F7F7F7;
}
h1 {
  color: #fdb927;
}

h2 {
  font-weight: normal;
  color: #006bb6;
}

th {
  font-weight: bold;
  color: #006bb6;
}
</style>
