<template>
    <Navbar /> 

  <router-view />
</template>

<script setup>
import Navbar from './components/Navbar.vue'
</script>
export default {
  components: {
    Navbar,
  }
}

<style scoped>

</style>
