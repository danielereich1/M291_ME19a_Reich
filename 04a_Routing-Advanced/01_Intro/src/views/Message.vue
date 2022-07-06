<!--demo-01a: Implementing and Adding a Message Feed Page Using Vue Router -->
<template>
  <div>
    <h1>Message</h1>
    <p v-for="(m, i) in messages" :key="i">
      {{ m }}
    </p>
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
