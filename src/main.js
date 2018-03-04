import './styles/base.css'
import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import store from './store';
import router from './router';

Vue.use(ElementUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
/* eslint-disable */
new Vue({
    store,
    router,
    render: v => v(App)
}).$mount('#app')