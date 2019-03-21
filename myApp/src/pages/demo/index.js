/**
 * Created by jerry on 2019/3/21.
 */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text, Input } from '@tarojs/components'

//数据传递
@connect(({hwary,textInput}) => ({
  hwary,
  textInput
}), (dispatch) => ({
  add(){
    let input = this.input; // 访问小程序的原生组件
    let val = input.value;
    console.log(val,'=============myInput');
    
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
    // 如果 ref 的是小程序原生组件，那只有在 didMount 生命周期之后才能通过
    // this.refs.input 访问到小程序原生组件
    if (process.env.TARO_ENV === 'weapp') {
      console.log(this.refs.input.value,'===================this.refs.input');
      // 这里 this.refs.input 访问的时候通过 `wx.createSeletorQuery` 取到的小程序原生组件
    } else if (process.env.TARO_ENV === 'h5') {
      // 这里 this.refs.input 访问到的是 `@tarojs/components` 的 `Input` 组件实例
    }
  }
  refInput = (node) => this.input = node // `this.cat` 会变成 `Cat` 组件实例的引用
  
  test(){
    let input = this.input; // 访问小程序的原生组件
    let val = input.value;
    console.log(val,'=============myInput');
  }
  render(){
    return(
      <View>
        <Input ref='input' value={this.props.textInput} type="text" />
        <Button onClick={this.props.add}>添加</Button>
        <View>{this.props.myInput}</View>
        {
          this.props.hwary.map((item)=>
          <View>{item.name}</View>
          )
        }
      </View>
    )
  }
}

export default Demo;
