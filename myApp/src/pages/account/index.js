import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Navigator, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

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
    navigationBarTitleText: '个人中心'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render () {
    return (
      <View className='category-box'>
      </View>
    )
  }
}

export default Index
