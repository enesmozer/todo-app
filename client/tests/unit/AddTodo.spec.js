/* eslint-disable */
import { expect } from 'chai'
import Vuex from 'vuex'
import Vue from 'vue'
import Vuetify from 'vuetify'
import * as state from '@/store/index'
import sinon from 'sinon'
import { mount, createLocalVue } from '@vue/test-utils'
import AddTodo from '@/components/AddTodo.vue'
import Home from '@/views/Home.vue'

Vue.use(Vuetify)
const localVue = createLocalVue()
localVue.use(Vuex)

const mutations = {
  ADD_DIALOG: sinon.mock(),
  SET_ALL_TODOS: sinon.mock(),
}
const store = new Vuex.Store(state)
describe('AddTodo.vue', () => {
  let vuetify

  beforeEach(() => {
    vuetify = new Vuetify()
  })
  it('successfully added new todo', async () => {
    const wrapper = mount(AddTodo, {
      localVue,
      store,
      vuetify,
      stubs: ['VForm', 'VTextField'],
    })
    const home = mount(Home, {
      localVue,
      store,
      vuetify,
      stubs: ['VDataTable'],
    })
    const mockTodo = {
      name: 'Go Shopping',
      description: 'For buy some bread',
    }
    wrapper.vm.name = mockTodo.name
    wrapper.vm.description = mockTodo.description
    console.log(wrapper.vm.name)
    console.log(wrapper.vm.description)
    await wrapper.find('.submit-button').trigger('click')
  })
})
