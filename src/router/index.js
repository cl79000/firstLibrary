import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter);

// 引入 - 组件
const home = () => import('../views/home/home');

const routes  = [
  { path:'/',name:'*',component: home },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router
