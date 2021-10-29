import { request } from './request'

// 任务中心接口
export function getTaskList(){
    return request({
        url: 'api/task/vipList',
        method: 'get'
    })
}