/**
 * Created by jerry on 2019/3/21.
 */

const hwary = (state = [], action)=> {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    case 'del':
      const idex = state.findIndex(v => v.id === action.id);
      return state.splice(idex, 1);
    default:
      return state
  }
}

export default hwary;
