<template>
  <div>
    <h1>{{ this.duration }}</h1>

    <v-card
      v-for="(item, itemKey) in stocksData"
      class="mx-auto"
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
  </div>
</template>

<script>
// import axios from "axios";
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
    }
  }
};
</script>
<style>
.close_text {
  font-size: 32px;
}
</style>
