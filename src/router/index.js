import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Crawler from '../pages/Crawler.vue';
import Api from '../pages/Api.vue';
const router = new VueRouter({
    /*mode: 'history',
    scrollBehavior,*/
    routes: [
        { path: '/', redirect: '/crawler' },
        { path: '/crawler', component: Crawler},
        { path: '/api', component: Api},
    ]
})
export default router;