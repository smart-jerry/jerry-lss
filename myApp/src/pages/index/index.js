import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Navigator, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/index/counter'

import './index.less'
import icon from '../../statics/images/logo.svg'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  gotoDemo(url){
    Taro.navigateTo({
      url: url
    })
  }
  goToSearch(){
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  }
  render () {
    return (
      <View className='index'>
        <View class="header">
          <View className="customize-box">
            <navigator url="/pages/customize/index" hover-class="navigator-hover">
              我要定制
            </navigator>
          </View>
          <View className="search-box">
            <Icon size='20' type='search' />
            <View className="search" onClick={this.goToSearch.bind(this)}>请输入商品名称</View>
          </View>
        </View>
        <View className="index-body">
          <Button onClick={this.gotoDemo.bind(this,'/pages/demo/index')}>跳转到demo</Button>
          <View>
            <View>限时秒杀</View>
            <View>
              瀑布流商品
            </View>
          </View>
          <View>
            <View>新品特惠</View>
            <View>
              瀑布流商品
            </View>
          </View>
          <View>
            <View>最好的商品推荐个最好的你</View>
            <View>
              瀑布流商品
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
