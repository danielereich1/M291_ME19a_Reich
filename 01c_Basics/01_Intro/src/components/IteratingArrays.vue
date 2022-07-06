<template>
  <div>
    <h1>Top 3 Players</h1>
    <h2>Top 3 Players of the Top 3 Teams:</h2>
    <ul>
      <li id="li-title" v-for="item in interests" :key="item">
        {{ item.title }}
        <ol>
          <li id="li-content" v-for="fav in item.favorite" :key="fav"> {{ fav }}</li>
        </ol>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      interests: [
        {title:"Warriors", favorite:["Steph Curry", "Klay Thompson", "Draymond Green",]},
        {title:"Celtics", favorite:["Jason Tatum", "Marcus Smart", "Jaylen Brown",]},
        {title:"Bucks", favorite:["Giannis Antetokounmpo", "Khris Middleton", "Jrue Holliday",]}
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
#li-title {
  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
  color: #006bb6;
  margin-top: 1.5rem;
  font-weight: bold;
}

#li-content {
  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
  color: #006bb6;
  font-weight: normal;
}

h1 {
  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
  color: #fdb927;
  margin-top: 60px;
}

h2 {
  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
  color: #006bb6;
}
</style>
