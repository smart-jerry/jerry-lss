/**
 * Created by jerry on 2019/4/3.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, Icon, Input, Text, ScrollView} from '@tarojs/components';
import './index.less';
import keyList from './data/keyList';

class Index extends Component{
  constructor(props){
    super(props);
    this.state = {
      searchList:[],
      showClear:false,
      searchKey:''
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
    this.searchShow(item.keyword);
    Taro.navigateTo({
      url:'/pages/search/result?keyWords='+encodeURIComponent(item.keyword)
    })
  }
  // 取消
  searchCancel(){
    Taro.navigateBack();
  }
  // 键盘输入
  keyInput(e){
    let input = e.detail;
    let val = input.value;
    this.searchShow(val);
  }
  // 搜索-显示
  searchShow(val){
    // 发送请求 根据结果重置搜索结果
    const result = this.searchResult(val);
    console.log(result,'==============result')
    this.setState({
      searchList:result
    })
    // clear清除按钮的显示
    if(val.length>0){
      this.setState({
        showClear:true
      })
    }else{
      this.setState({
        showClear:false
      })
    }
    this.setState({
      searchKey:val
    })
  }
  // 清除输入内容
  clearText(){
    this.setState({
      showClear:false
    })
    this.setState({
      searchList:[]
    })
    this.setState({
      searchKey:''
    })
  }
  // 搜索-算法
  searchResult(key){
    console.log(key,'==================my--key');
    let matchR=[],
      newList = keyList;
    for(let i=0,len = newList.length; i < len; i++ ){
//      console.log(newList[i]);
      const keyval = newList[i].keyword;
      console.log(keyval.indexOf(key),'=========keyval.indexOf(key)',keyval);
      if(keyval.indexOf(key)>-1){
        matchR.push(newList[i]);
      }
    }
    console.log(matchR,'===============matchR');
    return matchR;
  }
  render(){
    return(
      <View className="search-box">
        <View className="search-header">
          <View className="input-box">
            <Input type="text" value={this.state.searchKey} focus onInput={this.keyInput} onConfirm={this.keyInput} />
            {
              !!this.state.showClear
                ?<View className="clear-box" onClick={this.clearText.bind(this)}><Icon size='20' type='clear' color='grey' /></View>
                :""
            }
            
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
