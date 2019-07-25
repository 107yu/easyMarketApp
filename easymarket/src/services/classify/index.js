import request from '../../utils/request';
export function getClassify() {
    return request.get('/catalog/index');
}
// export function getClassify() {
//     return request.get('/catalog/index');
// }