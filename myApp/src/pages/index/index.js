import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Navigator, Image } from '@tarojs/components'
import { connect } from '@tarojs/redux'

import { add, minus, asyncAdd } from '../../actions/index/counter'
import liveChat from '../common/livechat/index'

import './index.less'
import icon from '../../statics/images/logo.svg'
import goods from '../../statics/goods/good1.jpg'
import good2 from '../../statics/goods/good2.jpg'

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
  
  componentWillMount(){
    this.flashList = [
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥5.6','inventory':6},
      {'id':'15856','imgUrl':good2,'title':'nfo','price':'￥1288','oldPrice':'￥2000','inventory':1},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':good2,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0},
      {'id':'15856','imgUrl':good2,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0}
    ];
  
    this.newList = [
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥5.6','inventory':6},
      {'id':'15856','imgUrl':good2,'title':'nfo','price':'￥1288','oldPrice':'￥2000','inventory':1},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':good2,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':good2,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0}
    ];
  
    this.recommendList = [
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥5.6','inventory':6},
      {'id':'15856','imgUrl':good2,'title':'nfo','price':'￥1288','oldPrice':'￥2000','inventory':1},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':2},
      {'id':'15856','imgUrl':goods,'title':'nfo','price':'￥2.6','oldPrice':'￥8868','inventory':0}
    ];
    
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
  gotoDedail(id){
    Taro.navigateTo({
      url: '/pages/detail/index?id'+id
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
          <View>
            <View className="module-title">限时秒杀</View>
            <View className="flash-sale-box">
              {
                this.flashList.map((item)=>
                  <View className="item-box" onClick={this.gotoDedail.bind(this,item.id)}>
                    <View className="img-box">
                      <Image src={item.imgUrl} mode="widthFix" />
                    </View>
                    <View className="title">{item.title}</View>
                    <View className="price-box">
                      <View className="price">{item.price}</View>
                      <View className="price old-price">{item.oldPrice}</View>
                    </View>
                  </View>
                )
              }
            </View>
          </View>
  
  
          <View>
            <View className="module-title">新品特惠</View>
            <View className="news-box">
              {
                this.newList.map((item)=>
                  <View className="item-box" onClick={this.gotoDedail.bind(this,item.id)}>
                    <View className="img-box">
                      <Image src={item.imgUrl} mode="widthFix" />
                    </View>
                    <View className="title">{item.title}</View>
                    <View className="price-box">
                      <View className="price">{item.price}</View>
                      <View className="price old-price">{item.oldPrice}</View>
                    </View>
                  </View>
                )
              }
            </View>
          </View>
  
  
          <View>
            <View className="module-title">为你推荐</View>
            <View className="recommend-box">
              {
                this.recommendList.map((item)=>
                  <View className="item-box" onClick={this.gotoDedail.bind(this,item.id)}>
                    <View className="img-box">
                      <image src={item.imgUrl} mode="widthFix" />
                    </View>
                    <View className="title">{item.title}</View>
                    <View className="price-box">
                      <View className="price">{item.price}</View>
                      <View className="price old-price">{item.oldPrice}</View>
                    </View>
                  </View>
                )
              }
            </View>
          </View>
          
          <Button onClick={this.gotoDemo.bind(this,'/pages/demo/index')}>跳转到demo</Button>
        </View>
        <liveChat />
      </View>
    )
  }
}

export default Index
