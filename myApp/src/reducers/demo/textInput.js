/**
 * Created by jerry on 2019/3/21.
 */

const textInput =(state='请输入...',action) => {
  switch (action.type){
    case "input":
      return{
        ...state,
        text:action.text
      }
    default:
      return state
  }
}
export default textInput
