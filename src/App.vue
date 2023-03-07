<template>
  <NavBar></NavBar>
  <Carrousel></Carrousel>
  <MarketingMessages></MarketingMessages>
  <Footer></Footer>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Carrousel from './components/Carrousel.vue'
import MarketingMessages from './components/MarketingMessages.vue'

export default {
  name: 'App',
  components: {
   NavBar, Footer, Carrousel, MarketingMessages 
  }
}
</script>


