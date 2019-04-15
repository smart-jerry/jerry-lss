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
    navigationBarTitleText: '分类'
  }
  
  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  /*类目选择*/
  checkItem(index){
    this.setState({
      selectIndex:index
    })
  }
  /*商品上拉加载，下一页-分页*/
  nextpage(){
    console.log('into next page。。。');
  }
  /*搜索*/
  goToSearch(){
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  }
  
  render () {
    return (
      <View className='category-box'>
        {/*头部导航*/}
        <View class="header">
          {/*定制*/}
          <View className="customize-box">
            <navigator url="/pages/customize/index" hover-class="navigator-hover">
              私人定制
            </navigator>
          </View>
          {/*搜索*/}
          <View className="search-box">
            <Icon size='20' type='search' />
            <View className="search" onClick={this.goToSearch.bind(this)}>请输入商品名称</View>
          </View>
        </View>
        {/*类目*/}
        <View class="category-body">
          {/*类目tab*/}
          <View className="category-tab">
            {this.props.categoryList.map((item,index)=>
              <View className={`tab-item ${index===this.state.selectIndex?"on":""}`} onClick={this.checkItem.bind(this,index)}>{item.name}</View>
            )}
          </View>
          {/*每个类目下的商品*/}
          <ScrollView scrollY="true" scrollWithAnimation="true" onScrollToLower={this.nextpage} className="category-contain">
            {
              this.props.categoryList[this.state.selectIndex].catList.map((item,index)=>
                <View className="contain-item">
                  <Image className="item-img" src={item.img} mode="widthFix" />
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
