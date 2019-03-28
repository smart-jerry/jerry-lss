import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Navigator, Image, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

import searchImg from '../../statics/images/search.png';

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
    navigationBarTitleText: '分类'
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
        <View class="category-header">
          <View></View>
          <View className="search-box">
            <Image src={searchImg} />
            <Input className="search" placeholder="请输入商品名称" placeholderStyle='color:#999999' type="text" />
          </View>
        </View>
        <View class="category-body">
          分类
          <View>dddd</View>
          <View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View><View>dddd</View>
          <View>my deadline</View>
        </View>
      </View>
    )
  }
}

export default Index
