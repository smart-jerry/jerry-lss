/**
 * Created by jerry on 2019/4/15.
 */
const cartList = (state = [], action) => {
  switch (action.type){
    case 'ADD_CART':
      return [
        ...state,
        {
          id:action.id,
          skuId:action.skuId,
          title:action.title,
          price:action.price,
          skuImage:action.skuImage
        }
      ]
    default:
      return state;
  }
}

export default cartList;
