<template>
  <NavBar></NavBar>
  <RouterView/>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import {RouterView} from "vue-router"

export default {
  name: 'App',
  components: {
   NavBar, Footer, RouterView
  }
}
</script>


