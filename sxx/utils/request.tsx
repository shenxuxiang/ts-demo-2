import { isEmpty, isObject, isArray } from './index';

type SendRequest = (url: string, query: any, method?: 'POST' | 'GET') => Promise<any>;

enum httpCodeMessage {
  '服务器成功返回请求的数据' = 200,
  '新建或修改数据成功。' = 201,
  '一个请求已经进入后台排队（异步任务）' = 202,
  '删除数据成功。' = 204,
  '发出的请求有错误，服务器没有进行新建或修改数据的操作。' = 400,
  '用户没有权限（令牌、用户名、密码错误）。' = 401,
  '用户禁止访问' = 403,
  '您所访问的资源不存在' = 404,
  '请求的格式不可得。' = 406,
  '请求的资源被永久删除，且不会再得到的。' = 410,
  '当创建一个对象时，发生一个验证错误。' = 422,
  '服务器发生错误，请检查服务器' = 500,
  '网关错误' = 502,
  '服务不可用，服务器暂时过载或维护' = 503,
  '网关超时' = 504
};

const sendRequest: SendRequest = function(url, query, method = 'GET') {
  let body: any = JSON.stringify(query);

  if (query instanceof FormData || query instanceof Blob) {
    body = query;
  } else if (method === 'GET' && !isEmpty(query) && isObject(query)) {
    if (!url.endsWith('?')) url += '?';
    if (isObject(query)) {
      for (let key in query) {
        if (!query.hasOwnProperty(key)) continue;
        url += `${key}=${query[key]}&`;
      }
      url = url.slice(0, -1);
    }
    body = null;
  }
  
  return new Promise((resolve, reject) => {
    fetch(url, {body, method})
      .then(res => {
        if (res.ok) {
          return resolve(res.json());
        } else {
          const { status, statusText } = res;
          return reject({
            message: httpCodeMessage[status] || statusText,
            code: status
          });
        }
      });
  })
}
export default sendRequest;


