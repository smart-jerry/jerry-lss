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
          num:action.num
        }]
      }
    default:
      return state;
  }
}

export default cartList;
