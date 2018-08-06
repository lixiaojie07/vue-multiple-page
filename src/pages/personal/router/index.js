import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
// const Home = resolve => require(['../components/Home'], resolve)

Vue.use(Router)
const router = new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }]
})

export default router
