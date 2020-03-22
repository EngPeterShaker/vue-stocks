<template>
  <v-card class="mx-auto my-4 px-4" max-width="344" outlined>
    <v-row align="center">
      <v-col class="display-3" cols="6">
        <p class="close_text">{{item['4. close']}}</p>
      </v-col>
      <v-col class="display-3" cols="6">
        <v-list-item three-line>
          <v-list-item-content>
            <v-list-item-subtitle>open: {{item['1. open']}}</v-list-item-subtitle>
            <v-list-item-subtitle>high: {{item['2. high']}}</v-list-item-subtitle>
            <v-list-item-subtitle>low: {{item['3. low']}}</v-list-item-subtitle>
            <v-list-item-subtitle>close: {{item['4. close']}}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "Card",
  props: {
    item: {
      type: Object
    }
  }
};
</script>