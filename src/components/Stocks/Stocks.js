import { Chart } from "highcharts-vue";
import Card from "../Card/Card.vue";

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