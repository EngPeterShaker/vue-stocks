<template>
<v-tabs
      fixed-tabs
      background-color="indigo"
      dark
    >
      <v-tab>
        Option
      </v-tab>
      <v-tab>
        Another Selection
      </v-tab>
      <v-tab>
        Items
      </v-tab>
      <v-tab>
        Another Screen
      </v-tab>
    </v-tabs>
</template>


<script>
  import Vuetify from "vuetify";
export default {
// import HelloWorld from '@/components/HelloWorld.vue'

name : 'Main',
 vuetify: new Vuetify(),
  data: () => ({
    //
  }),

}
</script>
