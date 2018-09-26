<template>
    <div id="airplanemodels">
        <div v-for="airplaneModel in airplaneModels" class="airplaneModel">
            <router-link :to="{ name: 'airplaneModesView', params: { id: airplaneModel._id }}">
                <h2>{{ airplaneModel.brand }} {{ airplaneModel.series }}: {{ airplaneModel.aircraftManufacture }} {{ airplaneModel.aircraftType }} ({{ airplaneModel.aircraftAirliner }})</h2>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AirplaneModel',

  data () {
    return {
      airplaneModels: []
    }
  },

  created () {
    this.$http.get('http://localhost:8000/airplanemodels').then((data) => {
      this.airplaneModels = data.body.slice(0, 10)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #airplanemodels{
        max-width: 800px;
        margin: 0px auto;
    }

    .airplaneModel{
        padding: 20px;
        margin: 20px 0;
        box-sizing: border-box;
        background: #eee;
    }
</style>
