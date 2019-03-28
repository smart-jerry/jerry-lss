import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Icon, Image, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

import goods1 from '../../statics/goods/good1.jpg';
@connect(({ categoryList }) => ({
  categoryList
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
          <View className="location-box">我的位置</View>
          <View className="search-box">
            <Icon size='20' type='search' />
            <Input className="search" placeholder="请输入商品名称" placeholderStyle='color:#999999' type="text" />
          </View>
        </View>
        <View class="category-body">
          <View className="category-tab">
            <View className="tab-item">观音吊坠</View>
            <View className="tab-item on">佛吊坠</View>
            <View className="tab-item">观音戒指</View>
            <View className="tab-item">佛戒</View>
            <View className="tab-item">龙头戒</View>
            <View className="tab-item">十二生肖</View>
            <View className="tab-item">繁花似锦</View>
            <View className="tab-item">其他</View>
          </View>
          <View className="category-contain">
            <View className="contain-item">
              <Image className="item-img" src={goods1} />
              <View className="item-info">
                <View className="title">原矿高瓷蓝观音吊坠16.8克</View>
                <View className="discount">促销</View>
                <View className="operate-box">
                  <View className="price">￥6888</View>
                  <View className="add">+</View>
                </View>
              </View>
            </View>
  
            <View className="contain-item">
              <Image className="item-img" src={goods1} />
              <View className="item-info">
                <View className="title">原矿高瓷蓝观音吊坠16.8克</View>
                <View className="discount">促销</View>
                <View className="operate-box">
                  <View className="price">￥6888</View>
                  <View className="add">+</View>
                </View>
              </View>
            </View>
  
            <View className="contain-item">
              <Image className="item-img" src={goods1} />
              <View className="item-info">
                <View className="title">原矿高瓷蓝观音吊坠16.8克</View>
                <View className="discount">促销</View>
                <View className="operate-box">
                  <View className="price">￥6888</View>
                  <View className="add">+</View>
                </View>
              </View>
            </View>
  
            <View className="contain-item">
              <Image className="item-img" src={goods1} />
              <View className="item-info">
                <View className="title">原矿高瓷蓝观音吊坠16.8克</View>
                <View className="discount">促销</View>
                <View className="operate-box">
                  <View className="price">￥6888</View>
                  <View className="add">+</View>
                </View>
              </View>
            </View>
  
            <View className="contain-item">
              <Image className="item-img" src={goods1} />
              <View className="item-info">
                <View className="title">原矿高瓷蓝观音吊坠16.8克</View>
                <View className="discount">促销</View>
                <View className="operate-box">
                  <View className="price">￥6888</View>
                  <View className="add">+</View>
                </View>
              </View>
            </View>
  
            <View className="contain-item">
              <Image className="item-img" src={goods1} />
              <View className="item-info">
                <View className="title">原矿高瓷蓝观音吊坠16.8克</View>
                <View className="discount">促销</View>
                <View className="operate-box">
                  <View className="price">￥6888</View>
                  <View className="add">+</View>
                </View>
              </View>
            </View>
  
            <View className="contain-item">
              <Image className="item-img" src={goods1} />
              <View className="item-info">
                <View className="title">原矿高瓷蓝观音吊坠16.8克</View>
                <View className="discount">促销</View>
                <View className="operate-box">
                  <View className="price">￥6888</View>
                  <View className="add">+</View>
                </View>
              </View>
            </View>

          </View>
        </View>
      </View>
    )
  }
}

export default Index
