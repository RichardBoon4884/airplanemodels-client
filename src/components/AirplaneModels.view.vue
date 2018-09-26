<template>
    <div id="airplanemodels">
        <div class="airplaneModel">
            <h2>{{ airplaneModel.brand }} {{ airplaneModel.series }}: {{ airplaneModel.aircraftManufacture }} {{ airplaneModel.aircraftType }} ({{ airplaneModel.aircraftAirliner }})</h2>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AirplaneModel',

  data () {
    return {
      airplaneModel: null
    }
  },

  created () {
    this.$http.get('http://localhost:8000/airplanemodels/' + this.$route.params.id).then((data) => {
      this.airplaneModel = data.body
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
