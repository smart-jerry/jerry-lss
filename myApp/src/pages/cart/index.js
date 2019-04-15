import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox, Label, Image, Radio } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {update} from '../../actions/carts/index'

import './index.less'

@connect(({ cartList }) => ({
  cartList
}), (dispatch) => ({
  add (id) {
    dispatch(update({
      id:id,
      num:1
    }))
  },
  update (id, num) {
    if(num<2){
      Taro.showToast({
        'title':'受不了了，宝贝不能再减少了哦！',
        'icon':'none',
        'duration':1000
      })
    }else{
      dispatch(update({
        id:id,
        num:-1
      }))
    }
  }
}))
class Index extends Component {
  constructor (props){
    super(props)
    this.state={
      checkList:[]
    }
  }

  config = {
    navigationBarTitleText: '购物车'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  
  componentWillMount () {
    // 根据购物车信息，查询商品状态
    
  }

  componentDidShow () { }

  componentDidHide () { }
  /*跳转-商品详情*/
  gotoDedail(id){
    Taro.navigateTo({
      url: '/pages/detail/index?id='+id
    })
  }
  // 选择商品下单
  checkGood(e){
    console.log(e.detail,'============000000000000')
  }
  render () {
    return (
      <View className='cart-box'>
        <View className="cart-head"></View>
        <View className="cart-box">
          {/*购物车有库存商品列表*/}
          <View className="cart-splice">
            {
              this.props.cartList.map((item)=>
                <View className="cart-item">
                  <View onClick={this.checkGood.bind(this, item)}>
                    <Label className='checkbox-list__label'>
                      <Checkbox className='checkbox-list__checkbox' onChange={this.checkGood} color="orange" value={item.id}></Checkbox>
                    </Label>
                  </View>
                  <View className="img" onClick={this.gotoDedail.bind(this, item.id)}>
                    <Image src={item.skuImage} mode="widthFix" />
                  </View>
                  <View className="other">
                    <View class="title" onClick={this.gotoDedail.bind(this, item.id)}>{item.title}</View>
                    <View class="sku">sku sku sku sku</View>
                    <View class="operate-box">
                      <View className="price" onClick={this.gotoDedail.bind(this, item.id)}>{item.price}</View>
                      <View className="add-box">
                        <View className="add" onClick={this.props.update.bind(this, item.id, item.num)}>-</View>
                        <View className="count">{item.num}</View>
                        <View className="update" onClick={this.props.add.bind(this, item.id)}>+</View>
                      </View>
                    </View>
                  </View>
                </View>
              )
            }
          </View>
          {/*失效、下架商品列表*/}
          <View className="cart-splice">
            <View>失效宝贝({this.props.cartList.length})件</View>
          </View>
        </View>
        {/*下单*/}
        <View className="order-box">
          <Label className='checkbox-list__label'>
            <Checkbox className='checkbox-list__checkbox'>全选</Checkbox>
          </Label>
          <View className="total">
            <View>合计： <Text>{checkList.totalPrice || 0}</Text></View>
            <View className="order-btn">结算({checkList.num||0})</View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
