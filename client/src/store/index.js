import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import { SET_ALL_TODOS, ADD_DIALOG } from './constants';

Vue.use(Vuex);
axios.defaults.withCredentials = true;
const http = axios.create({
  baseURL: `http://localhost:3000/api/v1/`,
});

export default new Vuex.Store({
  state: {
    allTodos: [],
    isDialogOpen: false,
  },
  mutations: {
    [SET_ALL_TODOS](state, allTodos) {
      state.allTodos = allTodos;
    },
    [ADD_DIALOG](state) {
      state.isDialogOpen = !state.isDialogOpen;
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
      dispatch('toggleDialog');
      return res;
    },
    toggleDialog({ commit }) {
      commit(ADD_DIALOG);
    },
  },
});
