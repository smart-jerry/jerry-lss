/**
 * Created by jerry on 2019/4/18.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, ScrollView} from '@tarojs/components';

class Index extends Component{
  config = {
    navigationBarTitleText: '帮助中心'
  }
  constructor (props){
    super(props)
    
  }
  render(){
    return (
      <View className="help-center">
        <ScrollView scrollY="true" scrollWithAnimation="true" className="help-box">
          问题一览，问答方式
        </ScrollView>
        <View className="live-chat-box">
          <View className="live-chat-btn">在线客服 <View className="mark">处理更快哦</View></View>
          <View className="server-time">电话客服 2568945255 (服务时间：8:00 - 22:00)</View>
        </View>
      </View>
    )
  }
}

export default Index;
