/**
 * Created by jerry on 2019/4/16.
 */
import Taro,{Component} from '@tarojs/taro';
import {View, Image, Text, Input} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import './index.less'

import addressIcon from '../../statics/images/liveChat.svg'

@connect(({cartList}) => ({
  cartList
  }),(dispatch) => ({
  
  })
)

class Index extends Component{
  constructor (props){
    super(props)
    this.state={
      // 商品勾选数量
      totalNum:0,
      // 勾选商品的总金额
      totalPrice:0
    }
  }
  config = {
    navigationBarTitleText: '确认订单'
  }
  componentWillMount () {
    this.addressList = {
      name:'jerry',
      tel:'1255856458',
      addressInfo:'dsfsd s df  ds f sd f   df'
    }
    this.counterTotal();
  }
  // 计算勾选的总金额和商品数量
  counterTotal(){
    let nextProps = this.props;
    let totalPriceTemp = 0;
    let totalNumTemp = 0;
    if(nextProps && nextProps.cartList && nextProps.cartList.length>0){
      nextProps.cartList.map((item)=>{
        if(item && item.checked){
          totalNumTemp += item.num;
          totalPriceTemp = totalPriceTemp + parseFloat(item.price*item.num)
        }
      });
    }
    this.setState({
      totalNum:totalNumTemp,
      totalPrice:totalPriceTemp
    })
  }
  // 下单
  order(){
  
  }
  render(){
    return (
      <View className="checkout-box">
        {/*收货地址*/}
        <View className="address-box">
          <View className="address-icon"><Image src={addressIcon} mode="widthFix" /></View>
          <View className="address-info">
            <View>{this.addressList.name} <Text>{this.addressList.tel}</Text></View>
            <View>{this.addressList.addressInfo}</View>
          </View>
          <View className="address-icon-right"><Image src={addressIcon} mode="widthFix" /></View>
        </View>
        {/*商品信息*/}
        <View className="goodsList-box">
          <Text>商品信息</Text>
          {
            this.props.cartList.map((item)=>
              (item.checked)
                ?<View className="good-item">
                <Image src={item.skuImage} mode="widthFix" />
                <View className="title">
                  {item.title}
                </View>
                <View className="other">
                  <View className="price">￥{item.price}</View>
                  <View className="num">X {item.num}</View>
                </View>
              </View>
              :''
            )
          }
          <View className="order-info">
            <View className="form-group">
              <Text>订单备注：</Text>
              <Input type='digit' name="orderInfo" placeholder='选填，请先和卖家协商一致！'/>
            </View>
          </View>
        </View>
        {/*下单-底部浮动*/}
        <View className="order-box">
          <View className="num">共{this.state.totalNum} 件,</View>
          <View className="totalPrice">合计：<Text>￥{this.state.totalPrice}</Text></View>
          <View className="order-btn" onClick={this.order}>提交订单</View>
        </View>
      </View>
    )
  }
}

export default Index
