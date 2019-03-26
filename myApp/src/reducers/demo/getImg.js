/**
 * Created by jerry on 2019/3/26.
 */

const getImg = (state = {}, action) => {
  console.log(action,'===========action');
  switch (action.type) {
    case 'requestsending':
      return {
        ...state,
        text:action.text
      }
    case 'requestsuccessful':
      return {
        ...state,
        text:action.text
      }
    default:
      return state
  }
}

export default getImg
