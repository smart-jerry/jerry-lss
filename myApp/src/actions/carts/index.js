/**
 * Created by jerry on 2019/3/22.
 */
import Taro from '@tarojs/taro'

export const addCarts = (option) => {
  return {
    type: 'ADD_CART',
    id:option.id,
    skuId:option.skuId
  }
}
