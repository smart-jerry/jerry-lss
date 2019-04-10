/**
 * Created by jerry on 2019/4/2.
 */

import Taro, {Component} from '@tarojs/taro'
import {View, Image, RichText} from '@tarojs/components';
import goods from '../../statics/goods/good1.jpg'
import good2 from '../../statics/goods/good2.jpg'
import Text from '@tarojs/components/src/components/text/index'
import liveChat from '../common/livechat/index'

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
      'baseInfo':'绿松石好处',
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
        <View>
          <View className="price">{this.detailList.sku[0].price}</View>
          <View className="old-price">{this.detailList.sku[0].oldPrice}</View>
        </View>
        <View className="title">{this.detailList.title}</View>
        
        <View>{this.detailList.baseInfo}</View>
        <View>{this.detailList.specification}</View>
        <View className="introduction">
          {
            this.detailList.sku.map((item)=>
              <View className="about">
                <View>尺寸：{item.size}</View>
                <View>克重：{item.weight}</View>
                {
                  item.detailImages.map((detailImg)=>
                    <Image src={detailImg} mode="widthFix" />
                  )
                }
              </View>
            )
          }
        </View>
        {/*在线客服*/}
        <liveChat />
        {/*购买按钮*/}
        <View class="addToCart">
          <View className="btn-add">加入购物车</View>
        </View>
      </View>
    )
  }
}

export default Index
