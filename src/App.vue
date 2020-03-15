<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >

     <v-tabs
      fixed-tabs
      background-color="indigo"
      dark
    >
      <v-tab to='/stocks'>
        Stocks
      </v-tab>
      <v-tab to='/fx'>
       FX
      </v-tab>

    </v-tabs>
    </v-app-bar>

    <v-content>
     <router-view></router-view>
      <!-- <HelloWorld/> -->
      <!-- <Main/> -->
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
  import Vuetify from "vuetify";
// import Main from './components/Main';


export default {
  name: 'App',
 vuetify: new Vuetify(),


  components: {
    // Main,
    // HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>
