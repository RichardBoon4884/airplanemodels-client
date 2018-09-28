import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import AirplaneModelsIndex from './views/AirplaneModels.index.vue'
import AirplaneModelsView from './views/AirplaneModels.view.vue'
import AirplaneModelsCreate from './views/AirplaneModels.create.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/airplanemodels',
      name: 'airplaneModesIndex',
      component: AirplaneModelsIndex
    },
    {
      path: '/airplanemodels/create',
      name: 'airplaneModesCreate',
      component: AirplaneModelsCreate
    },
    {
      path: '/airplanemodels/:id',
      name: 'airplaneModesView',
      component: AirplaneModelsView
    }
  ]
})
