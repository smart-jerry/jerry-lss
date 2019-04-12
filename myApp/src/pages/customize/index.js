/**
 * Created by jerry on 2019/4/2.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, Form, Text, Input, RadioGroup, Label, Radio, Button} from '@tarojs/components';
import './index.less';

class Index extends Component{
  config = {
    navigationBarTitleText: '定制'
  }
  
  constructor (props){
    super(props);
    this.state={
      // 定制类型
      typeList:[{
        'value':'0',
        'checked':false,
        'text':'戒指'
      },{
          'value':'1',
          'checked':true,
          'text':'吊坠'
        },{
        'value':'2',
        'checked':false,
        'text':'摆件'
      },{
        'value':'3',
        'checked':false,
        'text':'耳钉'
      }],
      // 戒指封口类型
      rangList:[{
        'value':'0',
        'checked':false,
        'text':'活口'
      },{
      'value':'1',
        'checked':false,
        'text':'闭口'
    }],
      // 镶嵌材质
      QualityList:[
        {
          'value':'0',
          'checked':false,
          'text':'玫瑰金'
        },{
          'value':'1',
          'checked':false,
          'text':'白银'
        }
      ],
      //宝贝类型选择
      selectType:'',
      // 戒指封口类型选择
      selectRangType:''
    }
  }
  //宝贝类型选择
  selectTypeEvt(e){
    this.setState({
      selectType:e.detail.value
    })
    this.setState({
      selectRangType:0
    })
  }
  //戒指封口类型选择
  selectRangTypeEvt(e){
    this.setState({
      selectRangType:e.detail.value
    })
  }
  render(){
    return(
      <View className="custom-box">
        <Form>
          <View className='form-group'>
            <Text>宝贝类型：</Text>
            <RadioGroup onChange={this.selectTypeEvt} name="typeSelect">
              {this.state.typeList.map((item, i) => {
                return (
                  <Label className='radio-list__label' for={i} key={i}>
                    <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                  </Label>
                )
              })}
            </RadioGroup>
          </View>
          {/*戒指镶嵌材质*/}
          {
            this.state.selectType.toString() === '0' &&
              <View className="form-group"  name="bbb">
                <Text>戒指镶嵌材质：</Text>
                <RadioGroup>
                  {this.state.QualityList.map((item, i) => {
                    return (
                      <Label className='radio-list__label' for={i} key={i}>
                        <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            
          }
          {/*戒指封口类型*/}
          {
            this.state.selectType.toString() === '0' &&
              <View className="form-group">
                <Text>戒指封口类型：</Text>
                <RadioGroup onChange={this.selectRangTypeEvt} name="aaa">
                  {this.state.rangList.map((item, i) => {
                    return (
                      <Label className='radio-list__label' for={i} key={i}>
                        <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            
          }
          {/*手指尺寸*/}
          {
            (this.state.selectType.toString() === '0' && this.state.selectRangType.toString() === '1') &&
              <View className="form-group">
                <Text>手指尺寸(单位:mm)：</Text>
                <Input type='digit' placeholder='请输入手指尺寸'/>
              </View>
            
          }
          
          {/*耳钉镶嵌品质*/}
          {
            this.state.selectType.toString() === '3' &&
              <View className="form-group" name="ddd">
                <Text>耳钉镶嵌材质：</Text>
                <RadioGroup>
                  {this.state.QualityList.map((item, i) => {
                    return (
                      <Label className='radio-list__label' for={i} key={i}>
                        <Radio className='radio-list__radio' value={item.value} checked={item.checked}>{item.text}</Radio>
                      </Label>
                    )
                  })}
                </RadioGroup>
              </View>
            
          }
          
          <View className="form-group">
            <Text>宝贝图样：</Text>
            <Input type='text' placeholder='上传图片样式'/>
          </View>
          <View className="form-btn">
            <Button className='btn-max-w mr30' form-type="reset" size="default" plain type='default'>重置</Button>
            <Button className='btn-max-w submit-btn' form-type="submit" size="default" plain type='default'>提交</Button>
          </View>
        </Form>
      </View>
    )
  }
}

export default Index
