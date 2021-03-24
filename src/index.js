import Vue from 'vue'
import app from './app.vue'
import '../src/plugins'

// const root=document.createElement('div');
// document.body.appendChild(root);

new Vue({
    render:(h)=>h(app)
}).$mount('#app')
