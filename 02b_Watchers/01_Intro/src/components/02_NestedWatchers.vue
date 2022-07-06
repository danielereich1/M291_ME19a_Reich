<template>
  <div class="container">
    <h1>Finals Game 1 seats</h1>
    <div>
      <h2>{{ product.label }}</h2>
      <h5>USD {{ product.price }} (USD {{ discount }} reduced)</h5>
      <a href="#" @click="updatePrice">reduce price</a>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      discount: 0,
      product: {
        price: 100,
        label: 'Warriors - Celtics Courtside seats',
      },
    }
  },
  methods: {
    updatePrice(){
      if (this.product.price < 1) return;
      this.product.price--;
    }
  },
  watch: {
    'product.price'(newVal,oldVal){
      this.discount++;
      console.log(`actual(USD ${newVal}) and old(USD ${oldVal}) price.`);
    }
  }
}
</script>
<style lang="scss" scoped>
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 600px;
  font-family: 'Gadugi', Helvetica, sans-serif;
  margin: 0;
}
a {
  display: inline-block;
  background: #fdb927;
  border-radius: 10px;
  font-size: 14px;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
}

h1 {
  color: #fdb927;
}

h2 {
  font-weight: normal;
  color: #006bb6;
}
</style>
