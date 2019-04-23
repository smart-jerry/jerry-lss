/**
 * Created by jerry on 2019/4/3.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, Icon, Input, Text, ScrollView} from '@tarojs/components';
import './index.less';

class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchList:[
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
  }
  config = {
    navigationBarTitleText: '搜索页',
    navigationBarBackgroundColor: '#f2f2f2',
    backgroundColorTop:'#f2f2f2'
  }
  componentWillMount(){
  
  }
  // 跳转搜索结果页
  selectKey(item){
    Taro.navigateTo({
      url:'/pages/search/result?keyWords='+encodeURIComponent(item.keyword)
    })
    console.log('into selectkey function。。。');
  }
  // 取消
  searchCancel(){
    Taro.navigateBack();
  }
  // 键盘输入
  keyInput(e){
    let input = e.detail;
    let val = input.value;
    // 发送请求 根据结果重置搜索结果
    this.setState({
      searchList:this.state.searchList.splice(0,this.state.searchList.length-3)
    })
  }
  clearText(){
    console.log('into clearTextclearTextclearTextclearText');
    this.setState({
      searchKey:' '
    })
  }
  render(){
    return(
      <View className="search-box">
        <View className="search-header">
          <View className="input-box">
            <Input type="text" value={this.state.searchKey} focus onInput={this.keyInput} onConfirm={this.keyInput} />
            <View className="clear-box" onClick={this.clearText.bind(this)}><Icon size='20' type='clear' color='grey' /></View>
          </View>
          <Text onClick={this.searchCancel.bind(this)}>取消</Text>
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
