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
      {'id':'1','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'5.6','inventory':6,'goodStatus':1},
      {'id':'2','imgUrl':good2,'title':'nfo','price':'1288','oldPrice':'2000','inventory':1,'goodStatus':1},
      {'id':'3','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'4','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'5','imgUrl':good2,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1},
      {'id':'6','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'7','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1},
      {'id':'8','imgUrl':good2,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'9','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1}
    ];
  
    this.newList = [
      {'id':'10','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'5.6','inventory':6,'goodStatus':1},
      {'id':'11','imgUrl':good2,'title':'nfo','price':'1288','oldPrice':'2000','inventory':1,'goodStatus':1},
      {'id':'12','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'13','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'14','imgUrl':good2,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1},
      {'id':'15','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'16','imgUrl':good2,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1},
      {'id':'17','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
      {'id':'18','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1}
    ];
  
    this.setState({
      recommendList:[
        {'id':'19','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'5.6','inventory':6,'goodStatus':1},
        {'id':'20','imgUrl':good2,'title':'nfo','price':'1288','oldPrice':'2000','inventory':1,'goodStatus':1},
        {'id':'21','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
        {'id':'22','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
        {'id':'23','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1},
        {'id':'24','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
        {'id':'25','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1},
        {'id':'26','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
        {'id':'27','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':0,'goodStatus':1}
      ]
    })
    
  }

  componentWillUnmount () { }
  
  componentDidMount () {
    // 上拉加载
    this._observer = Taro.createIntersectionObserver();
    this._observer.relativeTo('.index-body')
    .observe('#next-page', (res) => {
      console.log(res,'============res');
      // next page元素出现
      if(res && res.intersectionRatio && res.intersectionRatio > 0.1){
        // 请求下一页
        this.getNextPage();
      }
    })
  }

  componentDidHide () { }

  /*跳转-demo*/
  gotoDemo(url){
    Taro.navigateTo({
      url: url
    })
  }
  /*跳转-搜索*/
  goToSearch(){
    Taro.navigateTo({
      url: '/pages/search/index'
    })
  }
  /*跳转-商品详情*/
  gotoDedail(id){
    Taro.navigateTo({
      url: '/pages/detail/index?id='+id
    })
  }
  // 下一页
  getNextPage(){
    console.log('next page。。。。。。。。。。。。5555555');
    this.setState({
      recommendList:this.state.recommendList.concat([
        {'id':'19','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'5.6','inventory':6,'goodStatus':1},
        {'id':'20','imgUrl':good2,'title':'nfo','price':'1288','oldPrice':'2000','inventory':1,'goodStatus':1},
        {'id':'21','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1},
        {'id':'22','imgUrl':goods,'title':'nfo','price':'2.6','oldPrice':'8868','inventory':2,'goodStatus':1}
      ])
    })
  }
  render () {
    return (
      <View className='index'>
        {/*头部*/}
        <View class="header">
          <View className="customize-box">
            <navigator url="/pages/customize/index" hover-class="navigator-hover">
              私人定制
            </navigator>
          </View>
          <View className="search-box" onClick={this.goToSearch.bind(this)}>
            <Icon size='20' type='search' />
            <View className="search">请输入商品名称</View>
          </View>
        </View>
        {/*body*/}
        <View className="index-body">
          {/*限时秒杀*/}
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
                      <View className="price">￥{item.price}</View>
                      <View className="price old-price">￥{item.oldPrice}</View>
                    </View>
                  </View>
                )
              }
            </View>
          </View>
  
          {/*新品特惠*/}
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
                      <View className="price">￥{item.price}</View>
                      <View className="price old-price">￥{item.oldPrice}</View>
                    </View>
                  </View>
                )
              }
            </View>
          </View>
  
          {/*为你推荐*/}
          <View>
            <View className="module-title">为你推荐</View>
            <View className="recommend-box">
              {
                this.state.recommendList.map((item)=>
                  <View className="item-box" onClick={this.gotoDedail.bind(this,item.id)}>
                    <View className="img-box">
                      <image src={item.imgUrl} mode="widthFix" />
                    </View>
                    <View className="title">{item.title}</View>
                    <View className="price-box">
                      <View className="price">￥{item.price}</View>
                      <View className="price old-price">￥{item.oldPrice}</View>
                    </View>
                  </View>
                )
              }
            </View>
            <div id="next-page" className="next-page"> 加载中... </div>
          </View>
          {/*demo*/}
          <Button onClick={this.gotoDemo.bind(this,'/pages/demo/index')}>跳转到demo</Button>
        </View>
        {/*在线客服*/}
        <liveChat />
      </View>
    )
  }
}

export default Index
