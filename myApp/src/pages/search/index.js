/**
 * Created by jerry on 2019/4/3.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, Icon, Input, Text, ScrollView} from '@tarojs/components';
import './index.less';

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
  selectKey(item){
    Taro.navigateTo({
      url:'/pages/search/result?keyWords='+encodeURIComponent(item.keyword)
    })
    console.log('into selectkey function。。。');
  }
  searchComplete(){
  
  }
  render(){
    return(
      <View className="search-box">
        <View className="search-header">
          <View className="input-box">
            <Input type="text" value={this.state.searchKey} />
            <Icon size='20' type='clear' color='grey' />
          </View>
          <Text onClick={this.searchComplete.bind(this)}>取消</Text>
        </View>
        <ScrollView scrollY="true" scrollWithAnimation="true" className="search-body">
          {
            this.searchList.map((item)=>
              <View className="search-item" onClick={this.selectKey.bind(this,item)}>
                {item.keyword}
              </View>
            )}
        </ScrollView>
      </View>
    )
  }
}

export default Index
