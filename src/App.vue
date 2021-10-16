<template>
  <NavBar></NavBar>
  <router-view/>
</template>

<style>

</style>


<script>

import NavBar from './components/NavBar.vue';

export default {
  components: { NavBar },
  name: 'App',
  mounted () {
    document.body.classList.add('theme-dark')
  },
  unmounted () {
    document.body.classList.remove('theme-dark')
  },
}
</script>
