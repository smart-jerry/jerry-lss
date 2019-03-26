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
      console.log(state);
      const idex = state.findIndex(item => item.id === action.id);
      //splice 返回被删除的项目
      state.splice(idex, 1);
      const mytest = state;
      return {...state}
    case 'toggle':
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      )
    default:
      return state
  }
}

export default hwary;
