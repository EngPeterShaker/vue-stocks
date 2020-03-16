<template>
  <div>
    <h1>{{ this.duration }}</h1>
        <v-container class="grey lighten-5">
      <v-row  no-gutters>
        <v-col class="wrapper">

    <v-card
      v-for="(item, itemKey) in FxData"
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
import {Chart} from 'highcharts-vue'

// import axios from "axios";
export default {
  name: "Fx",
  data: function() {
    return {
      duration: "Time Series FX (1min)",
      // results: []
      //    chartOptions: {
      //   chart: {
      //     type: 'spline'
      //   },
      //   title: {
      //     text:  "FX Time Series (1min)"
      //   },
      //   series: [{
      //     data: [10, 0, 8, 2, 6, 4, 5, 5]
      //   }]
      // },
    };
  },
    methods:{

  },
  created() {
    this.$store.dispatch("fetchFx");
  },
  computed: {
    FxData() {
      return this.$store.state.FxData;
    },
     chartOptions() {
      const data = Object.entries(this.FxData).map(i => [i[0] ,parseFloat( i[1]['4. close'] )])
      console.log('data', data)
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
