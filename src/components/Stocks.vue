<template>
  <div>
    <h1>{{ this.duration }}</h1>
    <v-container class="grey lighten-5">
      <v-row class="wrapper">
        <Card v-for="(item, itemKey) in stocksData"
          :item='item'
          :key="itemKey"/>
      </v-row>

      <v-row>
        <div class="chart-wrapper">
          <highcharts :options="chartOptions"></highcharts>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import { Chart } from "highcharts-vue";
import Card from "./Card";

export default {
  name: "Stocks",
  data: function() {
    return {
      duration: "Time Series (1min)"
    };
  },
  created() {
    this.$store.dispatch("fetchStocks");
  },
  computed: {
    stocksData() {
      return this.$store.state.stocksData;
    },
    getValues() {
      console.log(
        "Object.entries(this.stocksData)",
        Object.entries(this.stocksData)
      );
      return Object.entries(this.stocksData);
    },
    chartOptions() {
      const data = Object.entries(this.stocksData).map(i => [
        i[0],
        parseInt(i[1]["4. close"], 10)
      ]);
      const categories = Object.keys(this.stocksData).map(i => i.split(" ")[1]);

      return {
        chart: {
          type: "spline"
        },
        xAxis: {
          categories,
          label: "fx"
        },
        title: {
          text: this.duration
        },
        series: [
          {
            data
          }
        ]
      };
    }
  },
  components: {
    highcharts: Chart,
    Card
  }
};
</script>
<style>
.close_text {
  font-size: 32px;
}
.wrapper {
  max-height: 80vh;
  overflow-y: scroll;
}
.chart-wrapper {
  width: 100% !important;
  position: relative;
    border: 1px solid;
  padding: 10px;
  margin-top: 2em;
  box-shadow: 5px 10px 8px 10px #888888;
}
.highcharts-container {
  width: 100% !important;
}
</style>
