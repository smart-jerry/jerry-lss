/**
 * Created by jerry on 2019/3/22.
 */
let indexI = 20;
export const add = (text) => {
  return {
    type: 'add',
    name:text,
    id:indexI++
  }
}

export const del =(id) => {
  return {
    type:'del',
    id:id
  }
}
