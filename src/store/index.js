import Vue from 'vue';
import Vuex from 'vuex';
import home from './modules/home'
Vue.use(Vuex);

const store=new Vuex.Store({
        state(){
            return{}
        },
    mutations:{},
    getters:{},
    modules:{
            home,
    },
    actions:{}
});
if(module.hot){
    //使action和mutation成为可热重载模块
    module.hot.accept(
        [
            './modules/home'
        ],
        ()=>{
        //加载新模块
        store.hotUpdate({
            modules:{
                home:require('./modules/home').default
            }
        })
    }
    )
}

export default store;
