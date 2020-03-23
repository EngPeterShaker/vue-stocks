
import { Chart } from "highcharts-vue";
import Card from "../Card/Card.vue";


export default {
  name: "Fx",
  data: function () {
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
    highcharts: Chart,
    Card
  }
};