import { request } from './request'

// 轮播图接口
export function getSwiperList(){
    return request({
        url: 'api/ads/list',
        method: 'get'
    })
}

// 公告列表
export function noticeListApi(params){
    return request({
        url: 'api/Notice/list',
        method: 'get',
        params
    })
}
// 公告详情
export function noticeDetailApi(params){
    return request({
        url: 'api/notice/detail',
        method: 'get',
        params
    })
}

