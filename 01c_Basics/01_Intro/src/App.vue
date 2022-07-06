<template>
  <div>
    <MyComponent/>
  </div>
</template>

<script>
/* Import all components */
// import Demos from './components/IteratingArrays'
import Demos from './components/Basket'

export default {
  components:{
    MyComponent: Demos
  }
}
</script>

<style lang="scss">
//Import of global-style
@import 'styles/global';
</style>
