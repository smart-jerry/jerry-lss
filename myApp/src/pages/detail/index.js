/**
 * Created by jerry on 2019/4/2.
 */

import Taro, {Component} from '@tarojs/taro'
import {View, Image, Text} from '@tarojs/components';
import goods from '../../statics/goods/good1.jpg'
import good2 from '../../statics/goods/good2.jpg'

import './index.less';

class Index extends Component{
  constructor (props){
    super(props);
  }
  config = {
    navigationBarTitleText: '详情页',
    navigationStyle:'custom'
  }
  componentWillMount(){
    this.detailList = {
      'id':'111111',
      'images':[goods,good2,goods],
      'title':'精品佛形吊坠',
      'iconText':'新品特惠',
      'specification':'卖家特殊说明',
      'sku':[{
        'skuId':2225,
        'inventory':1,
        'price':'￥6888',
        'oldPrice':'￥12888',
        'skuImage':'',
        'weight':'3.6g',
        'size':'15*25',
        'detailImages':[goods,good2,goods,goods,goods,goods,goods]
      },{
        'skuId':333,
        'inventory':0,
        'price':'￥6888',
        'oldPrice':'￥12888',
        'skuImage':'',
        'weight':'3.6g',
        'size':'15*25',
        'detailImages':[goods,good2,goods,goods,goods,goods,goods]
      }]
    }
  }
  /*购物车*/
  gotoCart(){
    Taro.switchTab({
      url:'/pages/cart/index'
    })
  }
  /*客服*/
  gotoliveChat(){
    Taro.navigateTo({
      url:'/pages/customize/index'
    })
  }
  /*返回*/
  gotoBack(){
    Taro.navigateBack()
  }
  render(){
    return(
      /*滚动轮播*/
      <View className="detail-box">
        <Swiper
          className='images-box'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          circular
          indicatorDots
          autoplay>
          {
            this.detailList.images.map((item)=>
              <SwiperItem>
                <View className='images-item'>
                  <Image src={item} mode="aspectFit"  />
                </View>
              </SwiperItem>
            )
          }
        </Swiper>
        {/*左上角返回按钮*/}
        <View className="back" onClick={this.gotoBack.bind(this)}>
          <Image src="../../statics/images/back.svg" mode="aspectFit" />
        </View>
        {/*价格*/}
        <View className="price-box">
          <View className="price">{this.detailList.sku[0].price}</View>
          <View className="mark">{this.detailList.iconText}</View>
        </View>
        <View className="old-price">价格：<del>{this.detailList.sku[0].oldPrice}</del></View>
        <View className="title">{this.detailList.title}</View>
        {/*介绍*/}
        <View className="info mt30">
          <View className="info-title">宝贝作用：</View>
          <View className="mt20">首先，绿松石含有大量的磷酸盐类矿物质，能有效促进人体细胞新陈代谢，提高佩戴者的身体免疫力。</View>
          <View className="mt20">其次，绿松石本身属于一种药石，入药可用于治疗风寒之症，降低血压，在夏季和干燥的冬季更有清热解毒之功效。</View>
          <View className="mt20">另外，绿松石还是个吸收和隔离辐射的好东西。对于经常玩手机的你，宝贝可以吸收辐射，有效保护视力。</View>
        </View>
        <View className="info">
          <View className="info-title">卖家郑重提示：</View>
          {this.detailList.specification}
        </View>
        {/*图文详情*/}
        <View className="introduction mt30">
          <View className="info-title">----------------- 详情 ------------------</View>
          {
            this.detailList.sku.map((item)=>
              <View className="about">
                {
                  item.detailImages.map((detailImg)=>
                    <Image src={detailImg} mode="widthFix" />
                  )
                }
              </View>
            )
          }
        </View>
        {/*购买按钮*/}
        <View class="addToCart-box">
          <View className="carts" onClick={this.gotoCart.bind(this)}>
            <Image className="icon" src="../../statics/images/cart.png" mode="aspectFit" />
            <Text>购物车</Text>
          </View>
          <View className="live-chat" onClick={this.gotoliveChat.bind(this)}>
            <Image className="icon" src="../../statics/images/livechat.svg" mode="aspectFit" />
            <Text>客服</Text>
          </View>
          <View className="btn-add">加入购物车</View>
        </View>
      </View>
    )
  }
}

export default Index
