/**
 * Created by jerry on 2019/5/15.
 */
import Taro from '@tarojs/taro'
const http =(params)=>{
  // 公用参数
  const defualt = {
    'a':'a'
  }
  let saveData = {...defualt, ...params.data};
  // 创建一个promise实例
  return new Promise((resolve, reject) => {
    Taro.request({
      url: params.url,
      data: saveData,
      header: params.header || {
        'content-type': 'application/json'
      },
      method:params.method || 'get',
    })
    .then(res => {
      // 拦截请求，针对返回结果统一处理
      
      // 返回数据
      resolve(res);
    }).catch((err) => {
      console.error(err);
      reject({
        url: url,
        params: saveData
      });
    });
  });
}

export default http;
