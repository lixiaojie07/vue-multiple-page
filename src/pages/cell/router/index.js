import Vue from 'vue'
import Router from 'vue-router'
import Cell from '../components/Cell'
import Stage from '../components/stage/stage.vue'
// const Home = resolve => require(['../components/Home'], resolve)

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'Cell',
    component: Cell
  }, {
    path: '/stage',
    name: 'Stage',
    component: Stage
  }]
})

export default router
