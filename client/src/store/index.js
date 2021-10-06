import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import SET_ALL_TODOS from './constants';

Vue.use(Vuex);
const http = axios.create({
  baseURL: 'http://localhost:5000/api/v1/',
});

export default new Vuex.Store({
  state: {
    allTodos: [],
  },
  mutations: {
    [SET_ALL_TODOS](state, allTodos) {
      state.allTodos = allTodos;
    },
  },
  actions: {
    async fetchTodos({ commit }) {
      const res = await http.get('todos');
      commit(SET_ALL_TODOS, res.data);
      return res.data;
    },
    async addTodo({ dispatch }, data) {
      const res = await http.post('todos', data);
      dispatch('fetchTodos');
      return res;
    },
  },
});
