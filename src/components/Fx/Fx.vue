<template>
  <div>
    <h1>{{ this.duration }}</h1>
    <v-container class="grey lighten-5">
      <v-row class="wrapper">
        <Card v-for="(item, itemKey) in FxData" :item="item" :key="itemKey" />
      </v-row>
      <v-row>
        <div class="chart-wrapper">
          <highcharts :options="chartOptions"></highcharts>
        </div>
      </v-row>
    </v-container>
  </div>
</template>
<script src="./Fx.js"></script>
