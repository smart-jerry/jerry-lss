import Taro, { Component } from '@tarojs/taro'
import { View, Text, Checkbox, Label, Image, CheckboxGroup } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import {update, updateCheck, selectAll} from '../../actions/carts/index'

import './index.less'

@connect(({ cartList }) => ({
  cartList
}), (dispatch) => ({
  // 商品数量添加
  add (id, inventory, num) {
    const temnum = num+1;
    if( temnum > inventory){
      Taro.showToast({
        'title':'宝贝共'+inventory+'件，没有更多了！',
        'icon':'none',
        'duration':1000
      })
      return false;
    }
    dispatch(update({
      id:id,
      num:1
    }))
  },
  // 商品数量减少
  update (id, num) {
    if(num<2){
      Taro.showToast({
        'title':'受不了了，宝贝不能再减少了哦！',
        'icon':'none',
        'duration':1000
      })
      return false;
    }
    dispatch(update({
      id:id,
      num:-1
    }))
  },
  // 商品选中状态修改
  updateCheck (id){
    dispatch(updateCheck({
      id:id
    }))
  },
  // 全选与否
  selectAll(checked){
    dispatch(selectAll({
      checked:checked
    }))
  }
}))
class Index extends Component {
  constructor (props){
    super(props)
    console.log(props.cartList,'======================props.cartListprops.cartList')
    this.state={
      // 商品勾选数量
      totalNum:0,
      // 勾选商品的总金额
      totalPrice:0,
      // 全选状态
      selectAllStatus:false
    }
  }

  config = {
    navigationBarTitleText: '购物车'
  }

  // 监听props 数据变化--计算总金额，全选框状态
  // 调用 this.setState 通常不会触发 componentWillReceiveProps。
  componentWillReceiveProps (nextProps) {
    if(this.props.cartList !== nextProps.cartList){
//      console.log('555555555555555==my componentWillReceiveProps==');
      this.counterTotal(nextProps);
    }
  }
  
  componentWillMount () {
  
  }
  componentDidShow () { }

  componentDidHide () { }
  /*跳转-商品详情*/
  gotoDedail(id){
    Taro.navigateTo({
      url: '/pages/detail/index?id='+id
    })
  }
  // 计算勾选的总金额和商品数量
  counterTotal(nextProps){
    let totalPriceTemp = 0;
    let totalNumTemp = 0;
    let selectAllStatusTemp = true;// 默认全选
    if(nextProps && nextProps.cartList && nextProps.cartList.length>0){
      nextProps.cartList.map((item)=>{
        if(item && item.checked){
          totalNumTemp += item.num;
          totalPriceTemp = totalPriceTemp + parseFloat(item.price*item.num)
        }else if(!item.checked){
          // 未选中
          selectAllStatusTemp = false;
        }
      });
    }
    this.setState({
      totalNum:totalNumTemp,
      totalPrice:totalPriceTemp.toFixed(2),
      selectAllStatus:selectAllStatusTemp
    })
  }
  // 全选
  selectAll(e){
    let inputVal = e.detail.value;
    if(inputVal && inputVal.length>0){
      // 通知reducer更新数据
      this.props.selectAll(true);
      // 全选框状态
      this.setState({
        selectAllStatus:true
      })
    }else{
      // 通知reducer更新数据
      this.props.selectAll(false);
      // 全选框状态
      this.setState({
        selectAllStatus:false
      })
    }
    console.log(inputVal,'=======inputVal')
  }
  // 结算--去结算页面
  gotoCheck(){
    // 判断是否勾选了商品
    if(this.state.totalNum<1 || this.state.totalPrice<=0){
      Taro.showToast({
        'title':'你还没有选择宝贝哦！',
        'icon':'none',
        'duration':2000
      })
      return false;
    }
    // 判断勾选商品是否均有库存
    
    Taro.navigateTo({
      url:'/pages/checkout/index?totalNum='+this.state.totalNum+'&totalPrice='+this.state.totalPrice
    })
  }
  render () {
    return (
      <View className='cart'>
        <View className="cart-contain">
          <View className="cart-head"></View>
          <View className="cart-box">
            {/*购物车有库存商品列表*/}
            <View className="cart-splice">
              {
                this.props.cartList.map((item)=>
                  <View className="cart-item">
                    <View onClick={this.props.updateCheck.bind(this, item.id)}>
                      <Label className="checkbox-list__label">
                        <Checkbox color="orange" data-id={item.id} checked={item.checked} value={item.id}></Checkbox>
                      </Label>
                    </View>
                    <View className="img" onClick={this.gotoDedail.bind(this, item.id)}>
                      <Image src={item.skuImage} mode="widthFix" />
                    </View>
                    <View className="other">
                      <View class="title" onClick={this.gotoDedail.bind(this, item.id)}>{item.title}</View>
                      <View class="sku">sku sku sku sku</View>
                      <View class="operate-box">
                        <View className="price" onClick={this.gotoDedail.bind(this, item.id)}>￥{item.price}</View>
                        <View className="add-box">
                          <View className="add" onClick={this.props.update.bind(this, item.id, item.num)}>-</View>
                          <View className="count">{item.num}</View>
                          <View className="update" onClick={this.props.add.bind(this, item.id, item.inventory, item.num)}>+</View>
                        </View>
                      </View>
                    </View>
                  </View>
                )
              }
            </View>
            {/*失效、下架商品列表*/}
  
          </View>
        </View>
        
        {/*下单*/}
        <View className="order-box">
          <CheckboxGroup onChange={this.selectAll} name="selectAll">
            <Label className='checkbox-list__label'>
              <Checkbox className='checkbox-list__checkbox' checked={this.state.selectAllStatus} value="1" color="orange">全选</Checkbox>
            </Label>
          </CheckboxGroup>
          <View className="total">
            <View>合计： <Text>￥{this.state.totalPrice}</Text></View>
            <View className="order-btn" onClick={this.gotoCheck}>结算({this.state.totalNum})</View>
          </View>
        </View>
      </View>
    )
  }
}

export default Index
