import request from '../../utils/request';

//获取首页数据
export function getcollect(params) {
    return request.get('/collect/list',params);
}