import Taro, { Component } from '@tarojs/taro'
import { View, Button, ScrollView, Icon, Image, Input } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import './index.less'

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
  
  constructor (props){
    super(props)
    this.state = {
      selectIndex:0
    }
  }
  config = {
    navigationBarTitleText: '分类',
    onReachBottomDistance:0,
    enablePullDownRefresh:true,
    backgroundTextStyle:'dark'
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  
  checkItem(index){
    this.setState({
      selectIndex:index
    })
  }
  
  nextpage(){
    console.log('into next page。。。');
  }
  
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
            {this.props.categoryList.map((item,index)=>
              <View className={`tab-item ${index===this.state.selectIndex?"on":""}`} onClick={this.checkItem.bind(this,index)}>{item.name}</View>
            )}
          </View>
          <ScrollView scrollY="true" scrollWithAnimation="true" onScrollToLower={this.nextpage} className="category-contain">
            {
              this.props.categoryList[this.state.selectIndex].catList.map((item,index)=>
                <View className="contain-item">
                  <Image className="item-img" src={item.img} />
                  <View className="item-info">
                    <View className="title">{item.title}</View>
                    <View className="discount">{item.iconText}</View>
                    <View className="operate-box">
                      <View className="price">{item.price}</View>
                      <View className="add">+</View>
                    </View>
                  </View>
                </View>
              )}
          </ScrollView>
        </View>
      </View>
    )
  }
}

export default Index
