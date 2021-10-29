import { request } from './request'

// 轮播图接口
export function getSwiperList(){
    return request({
        url: 'api/ads/list',
        method: 'get'
    })
}