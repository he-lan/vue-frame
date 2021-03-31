import request from "../../../utils/request";
import type from './type';

const home={
    namespaced:true,
    state:{},
    mutations:{},
    actions:{
        async getLists({commit},args){
            const {data}=await request({
                url:'/managercenter/usercenter/authorityById',
                method:'GET',
                params:args
            }).catch(err=>{
                console.log(err)
            })
            return data
        }
    }
};

export default home;

