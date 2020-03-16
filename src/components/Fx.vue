<template>
  <div>
    <h1>{{ this.duration }}</h1>
    <v-container class="grey lighten-5">
      <v-row class="wrapper">
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

// import axios from "axios";
export default {
  name: "Fx",
  data: function() {
    return {
      duration: "Stocks time Series FX (1min)"
    };
  },
  methods: {},
  created() {
    this.$store.dispatch("fetchFx");
  },
  computed: {
    FxData() {
      return this.$store.state.FxData;
    },
    chartOptions() {
      const data = Object.entries(this.FxData).map(i => [
        i[0],
        parseFloat(i[1]["4. close"])
      ]);
      const categories = Object.keys(this.FxData).map(i => i.split(" ")[1]);
      return {
        chart: {
          type: "spline"
        },
        xAxis: {
          categories
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
    highcharts: Chart
  }
};
</script>
