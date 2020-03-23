<template>
  <div>
    <h1>{{ this.duration }}</h1>
    <v-container class="grey lighten-5">
      <v-row class="wrapper">
        <Card v-for="(item, itemKey) in stocksData" :item="item" :key="itemKey" />
      </v-row>

      <v-row>
        <div class="chart-wrapper">
          <highcharts :options="chartOptions"></highcharts>
        </div>
      </v-row>
    </v-container>
  </div>
</template>

<style lang="scss">
.close_text {
  font-size: 32px;
  &.redText {
    color: red;
  }
  &.greenText {
    color: green;
  }
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

<script src="./Stocks.js"></script>