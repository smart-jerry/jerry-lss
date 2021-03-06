/**
 * Created by jerry on 2019/4/15.
 */
const cartList = (state = [], action) => {
  switch (action.type){
    case 'ADD_CART':
      const newList = [...state];
      const indexI = newList.findIndex(item => item.id === action.id);
      if(indexI>-1){
        return state.map(item =>
          (item.id === action.id)
            ? {...item, num: item.num + action.num}
            : item
        )
      }else{
        return [...state, {
          id:action.id,
          skuId:action.skuId,
          title:action.title,
          price:action.price,
          skuImage:action.skuImage,
          inventory:action.inventory,
          goodStatus:action.goodStatus,
          num:action.num,
          checked:action.checked
        }]
      }
    case 'UPDATE_CART_NUM':
      return state.map(item =>
        (item.id === action.id)
          ? {...item, num: item.num + action.num}
          : item
      )
    case 'UPDATE_CART_CHECK':
      return state.map(item =>
        (item.id === action.id)
        ? {...item, checked: !item.checked}
        :item
      )
    case 'SELECT_ALL':
      return state.map((item)=> {
        return {
          ...item,
          checked : action.checked
        }
      })
    default:
      return state;
  }
}

export default cartList;
