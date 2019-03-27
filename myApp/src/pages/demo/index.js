/**
 * Created by jerry on 2019/3/21.
 */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text, Input,Image } from '@tarojs/components'
import {add, del,toggle, getImg} from '../../actions/demo/index'
import './index.less'

import logo from '../../statics/images/logo.svg'
//数据传递
@connect(({hwary,getImg}) => ({
  hwary,
  getImg
}), (dispatch) => ({
  add(text){
    dispatch(add(text))
  },
  del(id){
    console.log(id,'===========this is del id');
    dispatch(del(id))
  },
  getImg(){
    dispatch(getImg())
  },
  toggleHwary(id){
    dispatch(toggle(id))
  }
}))

// ui视图
class Demo extends Component{
  constructor (props){
    super(props)
    this.state={
      inputValue:''
    }
  }
  
  config={
    navigationBarTitleText: 'demo'
  }
  componentDidMount () {
  }
  refInput = (node) => this.input = node // `this.input` 会变成 `Input` 组件实例的引用
  
  keyInput(e){
    console.log(e.detail.value, '======keyinput');
//    this.inputval = e.detail.value;
    this.setState({
      inputValue: e.detail.value
    })
  }
 // 添加数组
 getVal(){
   // 自定义组件获取实例
   // const jquery = Taro.createSelectorQuery().in(this.$scope);
   // 内置组件获取实例
   /*const jquery = Taro.createSelectorQuery();
   console.log(jquery.select('#myInput').value,'=============jquery.select(\'#myInput\')');
   jquery.select('#myInput').boundingClientRect((react)=>{
     console.log(react,'===========reactreactreact', react.bottom, react.dataset);
     // 发送action
     this.props.add('ssssss');
   }).exec()*/
   
   this.props.add(this.state.inputValue);
   this.setState({
     inputValue: ''
   })
 }
  // 删除数组
  deleteHwary(id){
    /*let bb = window.confirm("确定删除"+id)
    if(bb){
      this.props.del(id)
    }*/
    this.props.del(id)
  }
  render(){
    return(
      <View>
        {/*onBlur失去焦点事件在手机上必须点击done才能触发*/}
        <Input className="demo-text" type='text' placeholder='请输入...' value={this.state.inputValue} placeholderStyle='color:#999999' focus onInput={this.keyInput} onConfirm={this.keyInput} />
        <Button className="demo-btn" onClick={this.getVal}>Add</Button>
        hwary.length==={this.props.hwary.length} <br/>
        {
          this.props.hwary.map((item)=>
          <View>
            <View className="item-list" style={!item.completed?'text-decoration: none':'text-decoration: line-through'}>{item.name}{item.completed}</View>
            <Button className="btn-del" onClick={this.deleteHwary.bind(this, item.id)}>删除</Button>
            <Button className="btn-del" onClick={this.props.toggleHwary.bind(this, item.id)}>已完成</Button>
          </View>
          )
        }
        <br /><br />
        <View>
          <Button onClick={this.props.getImg}>异步获取图片</Button>
          {this.props.getImg.text}
          <View>
            <Image src={logo} style="display:block;width:330px;height:240px" />
          </View>
        </View>
      </View>
    )
  }
}




export default Demo;
