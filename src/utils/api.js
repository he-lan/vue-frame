import request from "./request";

export async function getList(args){
    const {data}=await request({
        url:'/managercenter/usercenter/authorityById',
        method:'GET',
        params:args
    })
    return data
}
