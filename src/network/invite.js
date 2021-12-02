import { request } from './request'

// 登陆接口
export function invitationApi(parmas){
    return request({
        url: 'api/index/invitation',
        method: 'get',
        parmas
    })
}