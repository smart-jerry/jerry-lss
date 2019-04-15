/**
 * Created by jerry on 2019/3/22.
 */
import Taro from '@tarojs/taro'

// 商品添加至购物车
export const addCarts = (action) => {
  return {
    type: 'ADD_CART',
    id:action.id,
    skuId:action.skuId,
    title:action.title,
    price:action.price,
    skuImage:action.skuImage,
    num:1
  }
}

//购物车，某商品数量+1 或者 -1
export const update = (action) => {
  return {
    type: 'UPDATE_CART_NUM',
    id:action.id,
    num:action.num
  }
}

