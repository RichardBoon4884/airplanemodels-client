<template>
  <div class="list">
    <AirplaneModels></AirplaneModels>
  </div>
</template>

<script>
// @ is an alias to /src
import AirplaneModels from '@/components/AirplaneModels.view.vue'

export default {
  name: 'index',
  components: {
    AirplaneModels
  }
}
</script>
