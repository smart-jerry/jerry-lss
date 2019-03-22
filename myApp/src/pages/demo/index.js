/**
 * Created by jerry on 2019/3/21.
 */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text, Input } from '@tarojs/components'
import {add, del} from '../../actions/demo/index'

//数据传递
@connect(({hwary}) => ({
  hwary
}), (dispatch) => ({
  add(text){
    dispatch(add(text))
  },
  del(id){
    dispatch(del(id))
  }
}))

// ui视图
class Demo extends Component{
  constructor (props){
    super(props)
    console.log(this.props,'============his.props');
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
   console.log(this.input,'=============this.input111');
  
   // 自定义组件获取实例
   // const jquery = Taro.createSelectorQuery().in(this.$scope);
   // 内置组件获取实例
   const jquery = Taro.createSelectorQuery();
   jquery.select('#myInput').boundingClientRect((react)=>{
     console.log(react,'===========reactreactreact', react.bottom, react.dataset);
     // 发送action
     this.props.add('ssssss');
   }).exec((back)=>{
     console.log(back.valueOf(),'==========back');
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
        <Input ref={this.refInput} id="myInput" type='text' placeholder='将会获取焦点' placeholderStyle='color:red' focus />
        <Button onClick={this.getVal}>
          Add Name
        </Button>
        {
          this.props.hwary.map((item)=>
          <View>
            <Text>{item.name}</Text>
            <Button className="btn-del" onClick={this.deleteHwary.bind(this,item.id)}>删除</Button>
          </View>
          )
        }
      </View>
    )
  }
}




export default Demo;
