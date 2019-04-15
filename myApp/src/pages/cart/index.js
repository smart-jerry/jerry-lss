import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox, Label, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

@connect(({ cartList }) => ({
  cartList
}), (dispatch) => ({
  add () {
  
  },
  dec () {
  
  },
  asyncAdd () {
  
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
                  <Label className='checkbox-list__label'>
                    <Checkbox className='checkbox-list__checkbox'> </Checkbox>
                  </Label>
                  <View className="img">
                    <Image src={item.skuImage} mode="widthFix" />
                  </View>
                  <View className="other">
                    <View class="title">{item.title}</View>
                    <View class="sku">sku sku sku sku</View>
                    <View class="operate-box">
                      <View className="price">{item.price}</View>
                      <View className="add-box">
                        <View className="add">-</View>
                        <View className="count">1</View>
                        <View className="del">+</View>
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
