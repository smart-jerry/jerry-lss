/**
 * Created by jerry on 2019/3/21.
 */
const myary = [
  {"name":'aaaa',id:1},
  {"name":'bbb',id:2},
  {"name":'ccc',id:3},
  {"name":'ddd',id:4},
  {"name":'eee',id:5},
  {"name":'fff',id:6},
  {"name":'ggg',id:7},
  {"name":'hhh',id:8},
  {"name":'iii',id:9},
  {"name":'jjj',id:10}
]

const hwary = (state = myary, action)=> {
  switch (action.type) {
    case 'add':
      return [
        ...state,
        {
          id: action.id,
          name: action.name
        }
      ]
    default:
      return state
  }
}

export default hwary;
