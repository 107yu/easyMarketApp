import request from '../../utils/request';

//获取首页数据
export function getcollect(params) {
    console.log(params.typeId,"params.typeId")
    return request.get(`/collect/list?typeId=${params.typeId}`,);
}
//添加收藏
export function addCollect(params) {
    return request.post('/collect/addordelete',params);
}