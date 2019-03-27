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
  render () {
    return (
      <View className='index'>
        <View className="index-header">
          头部
        </View>
        <View className="index-body">
          <Button onClick={this.gotoDemo.bind(this,'/pages/demo/index')}>跳转到demo</Button>
          body
        </View>
      </View>
    )
  }
}

export default Index
