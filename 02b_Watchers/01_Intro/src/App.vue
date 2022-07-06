<template>
  <div>
    <MyComponent />
  </div>
</template>

<script>
import Demo from './components/02_NestedWatchers'

export default {
  components: {
    MyComponent: Demo
  }
}
</script>

<style lang="scss">
@import 'styles/global';
</style>
