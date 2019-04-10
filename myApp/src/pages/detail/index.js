/**
 * Created by jerry on 2019/4/2.
 */

import Taro, {Component} from '@tarojs/taro'
import {View, Image} from '@tarojs/components';
import goods from '../../statics/goods/good1.jpg'
import good2 from '../../statics/goods/good2.jpg'

class Index extends Component{
  constructor (props){
    super(props)
  }
  
  componentWillMount(){
    this.detailList = {
      'id':'111111',
      'images':[goods,good2,goods],
      'title':'info',
      'introduction':'一段html文档',
      'sku':[{
        'skuId':2225,
        'inventory':1,
        'price':'￥1288',
        'oldPrice':'￥2000',
        'skuImage':''
      },{
        'skuId':333,
        'inventory':0,
        'price':'￥1288',
        'oldPrice':'￥2000',
        'skuImage':''
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
      </View>
    )
  }
}

export default Index
