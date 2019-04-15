/**
 * Created by jerry on 2019/3/22.
 */
import Taro from '@tarojs/taro'

export const addCarts = (action) => {
  return {
    type: 'ADD_CART',
    id:action.id,
    skuId:action.skuId,
    title:action.title,
    price:action.price,
    skuImage:action.skuImage
  }
}
