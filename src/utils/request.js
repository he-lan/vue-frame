import axios from 'axios'
import  {  Notification, MessageBox } from 'element-ui'

const HTTP_SUCCESS_CODE=200;
let messageBoxInstance;

//create an axios instance 创建axios实例
const instance=axios.create({
    // baseURL:process_env.BASE_API, //api的base_url
    timeout:5000, //request timeout设置请求超时时间
    responseType:'json',
    withCredentials:true, //是否允许带cookie这些
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

//请求拦截器
instance.interceptors.request.use(
    config=>{
        //如果请求头要携带token参数
        // if(window.localStorage.getItem('token')){
        //     config.headers={
        //         Authorization:window.localStorage.getItem('token')
        //     }
        // }
        //请求报错时再次发送请求
        //config.retry = 2;
        //再次发送请求延迟时间（毫秒）
        // config.retryDelay = 500;
        return config;
    },
    err=>{
        //Notification.closeAll();若页面上有多个Notification提示报错
        Notification.error({
            message:err,
            dangerouslyUseHTMLString:true
        })
        return Promise.reject(err);
    }
)

//响应拦截器
instance.interceptors.response.use(
    response=>{
        const {data:{code}}=response
        if(code===200){
            return Promise.resolve(response?.data);
        }else{
            return Promise.reject(response)
        }
    },
    error=>{
        const { config } = error;
        if(error.response.status){
            switch (error.response.status){
                case 401:
                    //401未登录
                    //未登录则跳转登录页面，并携带当前页面的路径
                    //在登录成功后返回当前页面，这一步需要在登录页操作
                    // router.replace({
                    //     path:'/login',
                    //     query:{redirect:router.currentRoute.fullpath}
                    // });
                    loginInvalid('登录过期，请重新进行登录');
                    break;
                case 403:
                    //403token过期
                    //登录过期对用户进行提示，并清除token，跳转登录页
                    if(!messageBoxInstance){
                        loginInvalid('登录过期，请重新进行登录');
                    }
                    break;
                case 404:
                    //请求不存在
                    Notification.error({
                        message:'网络请求不存在',
                        dangerouslyUseHTMLString:true
                    });
                    break;
                default:
                    Notification.error({
                        message:error.response.data?.message??'false',
                        dangerouslyUseHTMLString:true
                    });

        }
            // If config does not exist or the retry option is not set, reject

            //设置axios retry
            if (!config || !config.retry) return Promise.reject(error);

            // Set the variable for keeping track of the retry count
            config.retryCount = config.retryCount || 0;
            // Check if we've maxed out the total number of retries

            if (config.retryCount >= config.retry) {
                if (error.response) {
                    switch (error.response.status) {
                        case HttpStatus.UNAUTHORIZED: {
                            break;
                        }
                        default:
                            break;
                    }
                }
                // Reject with the error
                return Promise.reject(error);
            }
            // Increase the retry count
            config.retryCount += 1;

            // Create new promise to handle exponential backOff
            const backOff = new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, config.retryDelay || 1);
            });

            // Return the promise in which recalls axios to retry the request
            return backOff.then(() => axios(config));
        }
    }
)

function loginInvalid(msg) {
    messageBoxInstance = MessageBox.confirm(msg, {
        distinguishCancelAndClose: true,
        confirmButtonText:'确认',
        showClose: false,
        showCancelButton: false,
    }).then(() => {
        localStorage.removeItem('token');
        messageBoxInstance = null;
        // router.replace({
        //     path:'/login',
        //     query:{redirect:router.currentRoute.fullpath}
        // });
    });
}

export default instance;
