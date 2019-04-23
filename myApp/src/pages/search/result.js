/**
 * Created by jerry on 2019/4/3.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, Icon, Input, Text, ScrollView} from '@tarojs/components';
import './result.less';

class Index extends Component{
  constructor(props){
    super(props)
  }
  config = {
    navigationBarTitleText: '搜索页',
    navigationBarBackgroundColor: '#f2f2f2',
    backgroundColorTop:'#f2f2f2'
  }
  componentWillMount(){
    this.searchList = [
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'},
      {id:1,'keyword':'dddddd'}
    ]
  }
  render(){
    return(
      <View className="search-result-box">
        搜索结果页面
      </View>
    )
  }
}

export default Index
