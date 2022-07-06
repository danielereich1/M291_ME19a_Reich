<template>
  <div>
    <h1>Basket</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Amount</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, idx) in cart" :key="idx">
        <td>{{ product.name }}</td>
        <td>{{ product.quantity  }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'Cart',
  computed: mapState(['cart'])
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
