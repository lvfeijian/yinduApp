import axios from 'axios'
import Vue from 'vue';
import { Notify  } from 'vant';
Vue.use(Notify);
const Qs = require('qs')
axios.defaults.baseURL = 'http://yd.meiba3.com';
axios.defaults.headers.common['Content-Type'] = 'application/x-www-form-urlencoded';
// 请求发送之前的拦截器
axios.interceptors.request.use(config => {
    const token = window.sessionStorage.getItem('token')
    if (token) {
        config.headers.Authorization = token
        config.headers.common['token'] = token
    }
    return config
}, error => {
    return Promise.reject(error)
})

// 请求响应拦截器
axios.interceptors.response.use(res => {
    return Promise.resolve(res)
}, error => {
    return Promise.reject(error)
})

export function request(config){
    return new Promise((resolve, reject) => {
        axios.request(config).then(res => {
            if(res.data.code == 1){
                const resData = res.data
                resolve(res.data)
            } else if(res.data.code == 0) {
                Notify({ type: 'danger', message: res.data.msg });
            } else if(res.data.code == '10001'){
                window.sessionStorage.removeItem("token");
            }
        }, error => {
            reject(error)
        })
    })
}
