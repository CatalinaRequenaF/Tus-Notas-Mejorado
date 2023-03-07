<template>
    <CarrouselItem/>
    <MarketingMessages/>
</template>

<script>
import CarrouselItem from '../components/Carrousel.vue'
import MarketingMessages from '../components/MarketingMessages.vue'

export default {
  name: "HomeItem", 
  components:{
    CarrouselItem, MarketingMessages
  }
}
</script>


