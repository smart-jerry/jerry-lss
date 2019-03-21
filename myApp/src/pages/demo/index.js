/**
 * Created by jerry on 2019/3/21.
 */
import Taro, { Component } from '@tarojs/taro'
import { connect } from '@tarojs/redux'
import { View, Button, Text } from '@tarojs/components'

//数据传递
@connect(({hwary})=>({
  hwary
}),(dispatch)=>({

}))

// ui视图
class Demo extends Component{
  constructor (props){
    super(props)
  }
  
  config={
    navigationBarTitleText: 'demo'
  }
  render(){
    return(
      <View>
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
