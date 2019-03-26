/**
 * Created by jerry on 2019/3/22.
 */
import Taro from '@tarojs/taro'

let indexI = 0;
export const add = (text) => {
  return {
    type: 'add',
    name:text,
    id:indexI++,
    completed:false
  }
}

export const del =(id,name) => {
  return {
    type:'del',
    id:id,
    name:name
  }
}

export const toggle=(id)=>{
  return {
    type:'toggle',
    id:id
  }
}


export const requestsending = (s)=>{
  console.log(s,'=========11111111111111');
  return {
    type:'requestsending',
    text:s.text
  }
}

export const requestsuccessful = (s)=>{
  console.log(s,'=========22222222222');
  return {
    type:'requestsuccessful',
    text:s.text
  }
}

// 异步的action
export function getImg () {
  return dispatch => {
    dispatch(requestsending({text:'请求发送中...'}));
    setTimeout(()=>{
      dispatch(requestsuccessful({text:'请求发送成功！'}))
    },5000)
    
    Taro.request({
      url: 'http://127.0.0.1:31503/statics/data/demo.json',
      data: {},
      method: "POST",
      success: (data) => {console.log(data)},
      fail: (data) => {console.log(data)}
    })
  
  
   /* fetch(`/statics/data/demo.json`)
    .then(response => response.json())
    .then(json =>
      {
        console.log(json);
        
      }
    );*/
    
    /*fetch(`/statics/images/logo.svg`).then((res)=>{
     console.log('数据请求成功！', res);
     dispatch(requestsuccessful({text:'请求发送成功！'}))
     });*/
  }
}
