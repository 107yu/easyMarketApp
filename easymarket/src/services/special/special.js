import request from '../../utils/request';
//获取专题列表：
export function getTopicList(params) {
    return request.get('/topic/list',params);
  }
//根据专题id 获取专题的详情：
export function getTopicDetail(params) {
    return request.get('/topic/detail',params)
  }
//根据专题Id获取相关专题
export function getTopicRelated(params) {
    return request.get('/topic/related',params)
}
//根据专题ID或者商品ID获取评论获取相关专题
export function getComment(params) {
    return request.get('/comment/list',params)
}