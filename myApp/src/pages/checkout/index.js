/**
 * Created by jerry on 2019/4/16.
 */
import Taro,{Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import './index.less'

@connect(({cartList}) => ({
  cartList
  }),(dispatch) => ({
  
  })
)

class Index extends Component{
  constructor (props){
    super(props)
  }
  
  render(){
    return (
      <View>checkout</View>
    )
  }
}

export default Index
