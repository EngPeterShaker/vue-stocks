<template>
  <div>
    <h1>{{ this.duration }}</h1>
    <v-container class="grey lighten-5">
      <v-row >
        <v-col class="wrapper">





    <v-card
      v-for="(item, itemKey) in stocksData"
      class="mx-auto my-4 px-4"
      max-width="344"
      outlined
      :key="itemKey"
    >
      <v-row align="center">
        <v-col class="display-3" cols="6">
          <p class="close_text">{{ item["4. close"] }}</p>
        </v-col>
        <v-col class="display-3" cols="6">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-subtitle
                >open: {{ item["1. open"] }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >high: {{ item["2. high"] }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >low: {{ item["3. low"] }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >close: {{ item["4. close"] }}</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-card>

        </v-col>
        <v-col>
            <highcharts :options="chartOptions"></highcharts>
          <!-- <v-card class="pa-2" outlined tile> </v-card> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import {Chart} from 'highcharts-vue';

export default {
  name: "Stocks",
  data: function() {
    return {
      duration: "Time Series (1min)",
      // chartOptions: {
      //   chart: {
      //     type: 'spline'
      //   },
      //   title: {
      //     text:  "Stocks Time Series (1min)"
      //   },
      //   series: [{
      //     data: [10, 0, 8, 2, 6, 4, 5, 5]
      //   }]
      // },
    };
  },
  created() {
    this.$store.dispatch("fetchStocks");
  },
  computed: {
    stocksData() {
      return this.$store.state.stocksData;
    },
    getValues(){
      console.log('Object.entries(this.stocksData)', Object.entries(this.stocksData))
     return  Object.entries(this.stocksData)
    },
    chartOptions() {
      const data = Object.entries(this.stocksData).map(i => [i[0] ,parseInt( i[1]['4. close'] , 10)])
      return {

        chart: {
          type: 'spline'
        },
        title: {
          text: this.duration
        },
        series: [{
          data
        }]
      }
      },
  },
  components: {
    highcharts: Chart
  }
};
</script>
<style>
.close_text {
  font-size: 32px;
}
.wrapper{
      max-height: 100vh;
    overflow-y: scroll;
}
</style>
