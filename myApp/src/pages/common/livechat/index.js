/**
 * Created by jerry on 2019/4/3.
 */
import Taro,{Component} from '@tarojs/taro';
import { View, Button, Text, Navigator, Image } from '@tarojs/components'

import './index.less'

class Index extends Component{
  render(){
    return(
      <View className="customer-service">在线咨询</View>
    )
  }
}

export default Index;
