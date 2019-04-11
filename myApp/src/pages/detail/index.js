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
      'title':'info',
      'iconText':'新品特惠',
      'specification':'卖家特殊说明',
      'sku':[{
        'skuId':2225,
        'inventory':1,
        'price':'￥1288',
        'oldPrice':'￥2000',
        'skuImage':'',
        'weight':'3.6g',
        'size':'15*25',
        'detailImages':[goods,good2,goods,goods,goods,goods,goods]
      },{
        'skuId':333,
        'inventory':0,
        'price':'￥1288',
        'oldPrice':'￥2000',
        'skuImage':'',
        'weight':'3.6g',
        'size':'15*25',
        'detailImages':[goods,good2,goods,goods,goods,goods,goods]
      }]
    }
  }
  render(){
    return(
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
                  <Image src={item} mode="aspectFit" />
                </View>
              </SwiperItem>
            )
          }
        </Swiper>
        <View className="back">
          <svg t="1516605784224" class="icon" style="" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1221" xmlns:xlink="http://www.w3.org/1999/xlink" width="200" height="200"><defs><style type="text/css"></style></defs><path d="M393.390114 512.023536l347.948667-336.348468c20.50808-19.85828 20.50808-51.997258 0-71.792093-20.507056-19.826558-53.778834-19.826558-74.28589 0L281.990954 476.135164c-20.476357 19.826558-20.476357 51.981908 0 71.746044l385.061936 372.236839c10.285251 9.91379 23.728424 14.869662 37.173644 14.869662 13.446243 0 26.889417-4.956895 37.112246-14.901385 20.50808-19.826558 20.50808-51.919487 0-71.746044L393.390114 512.023536" p-id="1222"></path></svg>
        </View>
        <View className="price-box">
          <View className="price">{this.detailList.sku[0].price}</View>
          <View className="mark">{this.detailList.iconText}</View>
        </View>
        <View className="old-price">价格：<del>{this.detailList.sku[0].oldPrice}</del></View>
        <View className="title">{this.detailList.title}</View>
        
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
        <View className="introduction mt30">
          <View className="info-title">----------- 详情 ------------</View>
          {
            this.detailList.sku.map((item)=>
              <View className="about">
                {/*<View className="txt-left">尺寸：{item.size}</View>
                <View className="txt-left">克重：{item.weight}</View>*/}
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
          <View className="carts">
            <Image className="icon" src="../../statics/images/cart.png" mode="aspectFit" />
            <Text>购物车</Text>
          </View>
          <View className="live-chat">
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
