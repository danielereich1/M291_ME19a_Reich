<template>
  <div>
    <h1>Checkout</h1>
    Your total is {{ cartTotal.toFixed(2) }}.<br>
    <b-button variant="primary" v-show="cartTotal > 0" @click="checkout">Checkout</b-button>
  </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  name: 'Cart',
  computed: mapGetters(['cartTotal']),
  methods: {
    checkout() {
      alert('Checkout processed!');
    }
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

button{
  background-color: #fdb927;
  border-color: #fdb927;
}
</style>