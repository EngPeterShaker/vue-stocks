import Vue from 'vue'
import Vuex from 'vuex'
import {API_key , BASE_URL} from "../api/constants";
import axios from "axios";

Vue.use(Vuex)
Vue.use(axios)
export default new Vuex.Store({
  state: {
    stocksData:{},
    FxData:{}
  },
  mutations: {
    SAVE_STOCKS(state, stocksData) {
      state.stocksData = stocksData;
    },
    SAVE_FX(state, FxData) {
      state.FxData = FxData;
    }
  },
  actions: {
    fetchStocks({commit}) {
      axios.get(BASE_URL, {
        params: {
          function:'TIME_SERIES_INTRADAY',
          symbol:'MSFT',
          interval:'1min',
          apikey:API_key
        }
      })
      .then(result => {
        commit('SAVE_STOCKS', result.data['Time Series (1min)']);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    },
    fetchFx({commit}) {
      axios.get(BASE_URL, {
        params: {
          function:'FX_INTRADAY',
          from_symbol:'EUR',
          to_symbol:'USD',
          interval:'1min',
          apikey:API_key
        }
      })
      .then(result => {
        commit('SAVE_FX', result.data['Time Series FX (1min)']);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  modules: {
  }
})