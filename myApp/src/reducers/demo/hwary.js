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
      const a2 = [...state];
      const idex = a2.findIndex(item => item.id === action.id);
      //splice 返回被删除的项目
      a2.splice(idex, 1);
      return [...a2]
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
