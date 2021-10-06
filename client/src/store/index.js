import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { cacheAdapterEnhancer } from 'axios-extensions';
import * as constants from './constants';

Vue.use(Vuex);
const http = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
  adapter: cacheAdapterEnhancer(axios.defaults.adapter),
});

export default new Vuex.Store({
  state: {
    allTodos: [],
  },
  mutations: {
    [constants.SET_ALL_TODOS](state, allTodos) {
      state.allTodos = allTodos;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const res = await http.get('todos');
      commit(constants.SET_ALL_TODOS, res.data);
      return res.data;
    },
  },
});
