import Taro, { Component } from '@tarojs/taro'
import { View, ScrollView, Text, Navigator, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

import aa from '../../statics/images/positioning.png'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
  
  },
  dec () {
  
  },
  asyncAdd () {
  
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '会员中心'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  
  componentWillMount () {
    const _this = this;
    // 获取用户信息
    Taro.getUserInfo({
      withCredentials:true,
      lang:'zh_CN',
      success:function (res) {
        let userInfo = res.userInfo;
        _this.userInfo =userInfo;
      },
      fail:function (res) {
      
      }
    })
  }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <ScrollView scrollY="true" scrollWithAnimation="true" className="account-box">
        <View className="header"></View>
        <View className="account-body">
          <View className="account-info">
            <View className="account">
              <Image src={this.userInfo.avatarUrl || aa} mode="widthFix" />
              <View className="info">{this.userInfo.nickName} 您好！
                <View className="icon">
                  <Image src={aa} mode="widthFix" />会员
                </View>
              </View>
            </View>
            <View className="my-coupon">
              我的优惠券
            </View>
          </View>
          <View className="order-box">
            <View className="title">
              我的订单
            </View>
            <View className="order-list">
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>待付款</Text>
              </View>
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>待收货</Text>
              </View>
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>全部订单</Text>
              </View>
            </View>
          </View>
          <View className="custom-order-box">
            <View className="title">
              私人定制订单信息
            </View>
            <View className="order-list">
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>待付款</Text>
              </View>
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>待收货</Text>
              </View>
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>全部订单</Text>
              </View>
            </View>
          </View>
          <View className="server-box">
            <View className="title">
              服务帮助
            </View>
            <View className="server-list">
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>地址管理</Text>
              </View>
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>客服中心</Text>
              </View>
              <View>
                <Image src={aa} mode="widthFix" />
                <Text>意见反馈</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default Index
