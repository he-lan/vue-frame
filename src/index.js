import Vue from 'vue'
import app from './app.vue'
import '../src/plugins'
import qs from 'qs'

Vue.prototype.$qs=qs

// const root=document.createElement('div');
// document.body.appendChild(root);

new Vue({
    render:(h)=>h(app)
}).$mount('#app')
