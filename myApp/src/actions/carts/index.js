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
    inventory:action.inventory,
    num:1,
    checked:false
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
// 修改某商品选中状态
export const updateCheck = (action)=>{
  return {
    type: 'UPDATE_CART_CHECK',
    id:action.id
  }
}
// 全选与否
export const selectAll = (action)=>{
  return {
    type:'SELECT_ALL',
    checked:action.checked
  }
}
