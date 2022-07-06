<template>
  
  <div>
    <h1 v-if="false" v-text="text">Loading...</h1>
    <h2 v-else-if="false" v-html="html" />
    <a
      v-else
      :href="link.url"
      :target="link.target"
      :tabindex="link.tabindex"
      v-text="link.title"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      // v-text
      text: 'Have a look at the NBA Website',
      // v-html
      html: 'The link </br>is shortened<br/><b>but its the right one</b>',
      // v-bind
      link: {
        url: 'https://www.nba.com/',
        target: '_blank',
        tabindex: '0',
        title: 'NBA Website here',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
h1 {
  color: #fdb927;
}

h2 {
  margin: 4rem 0 0;
  font-weight: normal;
  color: #006bb6;
}

a {
  display: block;
  margin-top: 4rem;
}
</style>
