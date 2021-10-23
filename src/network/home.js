import {request} from './request'

export function getHomeData(){
    return request({
        url: '/home/multidata'
    })
}
export function getHomeGoods(type,page=1){
    return request({
        url:'/home/data',
        params:{
            type,
            page
        }
    })
}
// export class Goods{
//     constructor(res){
//         this.list = res.data.data.banner.list
//         // this.title = res.title
//     }
// }