/**
 * Created by jerry on 2019/3/22.
 */
let indexI = 0;
export const add = (text) => {
  return {
    type: 'add',
    name:text,
    id:indexI++
  }
}

export const del =(id,name) => {
  return {
    type:'del',
    id:id,
    name:name
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
    },5000)/*fetch(`/statics/images/logo.svg`).then((res)=>{
     console.log('数据请求成功！', res);
     dispatch(requestsuccessful({text:'请求发送成功！'}))
     });*/
  }
}
