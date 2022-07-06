<template>
  <div>
    <h1>Feed</h1>
    <div v-for="(m, i) in messages" :key="i" >
      <router-link :to="{ name: 'singlemessage', params: {content: m}}">
        {{ m }}
      </router-link>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      messages: [
        'Did you ever visit a Warriors game before?',
        'Have you ever been to a Finals game before?',
        'Who is going to win the Game?',
        'My favourite team is the Warriors, whats yours?'
      ]
    }
  }
}
</script>
