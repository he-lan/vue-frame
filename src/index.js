import Vue from 'vue'
import app from './app.vue'
import '../src/plugins'
import qs from 'qs'
import store from '../src/store'
import router from './router'

Vue.prototype.$qs=qs

// const root=document.createElement('div');
// document.body.appendChild(root);

new Vue({
    router,
    store,
    render:(h)=>h(app)
}).$mount('#app')
