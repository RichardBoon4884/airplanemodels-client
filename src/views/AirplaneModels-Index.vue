<template>
  <div class="list">
    <AirplaneModels></AirplaneModels>
  </div>
</template>

<script>
// @ is an alias to /src
import AirplaneModels from '@/components/AirplaneModels.vue'

export default {
  name: 'index',
  components: {
    AirplaneModels
  }
}
</script>
