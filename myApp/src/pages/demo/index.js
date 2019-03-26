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
  del(id,name){
    console.log(id,'===========this is del id');
    dispatch(del(id,name))
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
  deleteHwary(id,name){
    /*let bb = window.confirm("确定删除"+id)
    if(bb){
      this.props.del(id)
    }*/
    this.props.del(id,name)
  }
  render(){
    return(
      <View>
        <Input type='text' placeholder='请输入...' value={this.state.inputValue} placeholderStyle='color:#999999' focus onBlur={this.keyInput} />
        <Button onClick={this.getVal}>
          Add Name
        </Button>
        hwary.length==={this.props.hwary.length} <br/>
        {
          this.props.hwary.map((item)=>
          <View>
            <View style={item.completed?'text-decoration: none':'text-decoration: line-through'}>{item.name}{item.completed}</View>
            <Button className="btn-del" onClick={this.deleteHwary.bind(this, item.id, item.name)}>删除</Button>
            <Button className="btn-del" onClick={this.props.toggleHwary.bind(this, item.id)}>已完成</Button>
          </View>
          )
        }
        
        <View>
          <Button onClick={this.props.getImg}>异步获取图片</Button>
          {this.props.getImg.text}
          <View>
            <Image src={this.props.getImg.text} style="display:block;width:330px;height:240px" />
          </View>
        </View>
        <Image src={logo} style="display:block;width:330px;height:240px" />
      </View>
    )
  }
}




export default Demo;
