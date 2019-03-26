/**
 * Created by jerry on 2019/3/21.
 */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text, Input,Image } from '@tarojs/components'
import {add, del, getImg} from '../../actions/demo/index'
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
    dispatch(del(id,name))
  },
  getImg(){
    dispatch(getImg())
  }
}))

// ui视图
class Demo extends Component{
  constructor (props){
    super(props)
  }
  
  config={
    navigationBarTitleText: 'demo'
  }
  componentDidMount () {
  }
  refInput = (node) => this.input = node // `this.input` 会变成 `Input` 组件实例的引用
  
 /* test(){
    let input = this.input; // 访问小程序的原生组件
    let val = input.value;
    console.log(val,'=============myInput');
  }*/
 // 添加数组
 getVal(){
   // 自定义组件获取实例
   // const jquery = Taro.createSelectorQuery().in(this.$scope);
   // 内置组件获取实例
   const jquery = Taro.createSelectorQuery();
   jquery.select('#myInput').boundingClientRect((react)=>{
     console.log(react,'===========reactreactreact', react.bottom, react.dataset);
     // 发送action
     this.props.add('ssssss');
   }).exec()
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
        <Input ref={this.refInput} id="myInput" type='text' placeholder='将会获取焦点' placeholderStyle='color:red' focus />
        <Button onClick={this.getVal}>
          Add Name
        </Button>
        {
          this.props.hwary.map((item)=>
          <View>
            <Text>{item.name}</Text>
            <Button className="btn-del" onClick={this.deleteHwary.bind(this, item.id, item.name)}>删除</Button>
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
