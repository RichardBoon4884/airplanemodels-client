<template>
    <div id="airplanemodels">
        <form>
            <label>Brand</label><br>
            <input type="text" v-model="airplaneModel.brand"><br>
            <label>Series</label><br>
            <input type="text" v-model="airplaneModel.series"><br>
            <label>Aircraft Manufacture</label><br>
            <input type="text" v-model="airplaneModel.aircraftManufacture"><br>
            <label>Aircraft Type</label><br>
            <input type="text" v-model="airplaneModel.aircraftType"><br>
            <label>Aircraft Airliner</label><br>
            <input type="text" v-model="airplaneModel.aircraftAirliner"><br>
            <button v-on:click="editAirplaneModel">Edit</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'AirplaneModelCreate',
  data () {
    return {
      airplaneModel: {
        brand: null,
        series: null,
        aircraftManufacture: null,
        aircraftType: null,
        aircraftAirliner: null
      }
    }
  },
  created () {
    this.$http.get('http://localhost:8000/airplanemodels/' + this.$route.params.id).then((data) => {
      this.airplaneModel = data.body
    })
  },
  methods: {
    editAirplaneModel: function () {
      this.$http.put('http://localhost:8000/airplanemodels/' + this.$route.params.id, {
        brand: this.airplaneModel.brand,
        series: this.airplaneModel.series,
        aircraftManufacture: this.airplaneModel.aircraftManufacture,
        aircraftType: this.airplaneModel.aircraftType,
        aircraftAirliner: this.airplaneModel.aircraftAirliner
      }).then(function (data) {
        console.log(data)
      })
    }
  }

  // created () {
  //   this.$http.get('http://localhost:8000/airplanemodels/' + this.$route.params.id).then((data) => {
  //     this.airplaneModel = data.body
  //   })
  // }
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
