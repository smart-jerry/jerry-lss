/**
 * Created by jerry on 2019/4/3.
 */
import Taro,{Component} from '@tarojs/taro';
import { View, Button, Text, Navigator, Image } from '@tarojs/components'

import './index.less'

class Index extends Component{
  
  gotoliveChat(){
    Taro.navigateTo({
      url:'/pages/helpCenter/index'
    })
  }
  render(){
    return(
      <View onClick={this.gotoliveChat} className="customer-service">
        <Text>在线</Text>
        <Text>咨询</Text>
      </View>
    )
  }
}

export default Index;
