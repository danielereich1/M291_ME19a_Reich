<template>
  <div>
    <h1>Players on Golden state Warriors</h1>
    <h2>Methods vs Computed props vs Watchers</h2>
    <div class="container">
      <div class="col">
        <h3>Search with Methods</h3>
        <input
            type="text"
            placeholder="Search with Methods"
            v-model="input"
            @keyup="searchMethod"
        />
        <ul>
          <li v-for="(item, i) in methodFilterList" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="col">
        <h3>Search with Computed Props</h3>
        <input
            type="text"
            placeholder="Search with Computed Props"
            v-model="input2"
        />
        <ul>
          <li v-for="(item, i) in computedList" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>

      <div class="col">
        <h3>Search with Watcher</h3>
        <input
            type="text"
            placeholder="Search with Watcher"
            v-model="input3"
        />
        <ul>
          <li v-for="(item, i) in watcherFilterList" :key="i">
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // Shared
      playerList: [
        'Curry', 'Thompson', 'Green', 'Wiggins',
        'Looney', 'Poole', 'Kuminga', 'Toscano-Anderson',
        'Payton II', 'Wiseman', 'Moody', 'Igoudala',
        'Bjelica', 'Santos', 'Chiozza'
      ],
      // Method
      input: '',
      methodFilterList: [],
      // Computed
      input2: '',
      // Watcher
      input3: '',
      watcherFilterList: []
    }
  },
  //Vue Hook
  created() {
    this.searchMethod()
  },
  methods: {
    searchMethod(e) {
      //console.log(e)
      this.methodFilterList =
          this.playerList.filter(item =>
              item.toLowerCase().includes(this.input.toLowerCase())
          )
    },
  },
  computed: {
    computedList() {
      return this.playerList.filter(item => {
        return item.toLowerCase().includes(this.input2.toLowerCase())
      })
    },
  },
  watch: {
    input3: {
      handler() {
        this.watcherFilterList =
            this.playerList
                .filter(item => item.toLowerCase().includes(this.input3.toLowerCase()))
      }
    }
  }
}
</script>
<style lang="scss" scoped>
h1 {
  color: #fdb927;
}

h2 {
  font-weight: normal;
  color: #006bb6;
}
h3 {
  font-weight: bold;
}
.container {
  margin: 0 auto;
  padding: 30px;
  max-width: 100%;  font-family: 'Gadugi', Helvetica, Arial, sans-serif;
}
.col {
  margin-bottom: 2rem;
  width: 100%;
  height: 100%;
}
input {
  padding: 10px 50px;
  margin: 20px 10px 10px 0;
}
</style>
