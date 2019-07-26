import request from '../utils/request';
//获取用户的身份 id {管理员，出题者，浏览者....}：
export function getIdentity() {
    return request.get('/user/identity');
}
