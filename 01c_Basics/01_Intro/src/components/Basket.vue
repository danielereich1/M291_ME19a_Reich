<template>
  <div class="container">
    <h1>Finals Game 1 seats</h1>
    <h2>Basket: (Article: {{ totalItems }}) {{ formatPrize("USD",totalCost) }}</h2>
    <div class="even-columns" v-for="item in products" :key="item">
      <div class="col">Künstler {{ item.title }}</div>
      <div class="col"><a href="#" @click="addToCart(item.prize)">Add {{ formatPrize(item.currency, item.prize) }}</a></div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      totalItems: 0,
      totalCost: 0,
      products: [
        {title:"Warriors - Celtics Courtside seats", currency: "USD", prize: 149.50},
        {title:"Warriors - Celtics 1st Row seats", currency: "USD", prize: 99.00},
        {title:"Warriors - Celtics 2nd Row seats", currency: "USD", prize: 50.90},
      ],
    }
  },
  methods: {
    addToCart(n) {
      this.totalItems = this.totalItems + 1
      this.totalCost = this.totalCost + n
    },
    formatPrize(currency, val) {
      return `${currency} ${val.toFixed(2)}`
    },
  },
}
</script>

<style lang="scss" scoped>

h1 {
  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
  color: #fdb927;
  margin-top: 10%;
}

h2 {
  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
  color: #006bb6;
}

.even-columns {
  display: flex;
  //gap: 0.1em;
  padding: 0.2em;
}

.even-columns > * {
  flex: 1;
}

.card {
  padding: 2em;
  background: var(--clr-gradient);
  color: white;
  border-radius: 0.25rem;
}


*,
*::before,
*::after {
  box-sizing: border-box;
}

:root {
  --clr-primary: #fdb927;
  --clr-secondary: #006bb6;
  --clr-accent: #f7f7ff;
  --clr-gradient: linear-gradient(
          -90deg,
          var(--clr-primary),
          var(--clr-secondary)
  );
  --ff-title: bungee, sans-serif;
  --ff-body: canada-type-gibson, sans-serif;
  --fw-body: 300;
  --fw-bold: 800;
  --fw-title: 400;
  --fw-number: 800;
}

body {
  min-height: 80vh;
  font-family: var(--ff-body);
  font-weight: var(--fw-body);
  font-size: 1.25rem;
  display: flex;
  flex-direction: column;
}

a {
  display: inline-block;
  background: #fdb927;
  border-radius: 10px;
  font-size: 10px;
  color: white;
  padding: 5px 10px;
  text-decoration: none;
}
.container {
  margin: 0 auto;
}
</style>
