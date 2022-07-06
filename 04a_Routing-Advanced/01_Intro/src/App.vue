<template>
  <!--
    Basic router navigation
    Update navigation by adding two router links for Home and About
   -->
  <div id="app">
    <div id="logo"><img class="logo" alt="logo" src="./assets/logo.png"></div>
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/message">Message</router-link> |
      <router-link to="/messages">Feed</router-link> |
      <router-link :to="{ name: 'about', params: { user: 'warriors'}}">About</router-link>
    </div>
    <router-view/>
    <MyNavigation />
  </div>
</template>

<script>
/* Import all components */
import SimpleNav from './components/SimpleNav'

export default {
  components: {
    MyNavigation: SimpleNav,
  },
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>

