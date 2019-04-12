/**
 * Created by jerry on 2019/4/2.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, Form, Text, Input, RadioGroup, Label, Radio, Button, Image, Icon, Textarea} from '@tarojs/components';
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
        'checked':true,
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
          'checked':true,
          'text':'白银'
        }
      ],
      //宝贝类型选择
      selectType:'',
      // 戒指封口类型选择
      selectRangType:'',
      // 选择的图片
      imgList:[]
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
  
  // 拍照
  takePhoto(){
    let _this = this;
    Taro.chooseImage({
      count: 3,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
//        console.log(res);
        // tempFilePath可以作为img标签的src属性显示图片
        const tempFilePaths = res.tempFilePaths
        _this.setState({
          imgList:_this.state.imgList.concat(tempFilePaths)
        })
      }
    })
  }
  // 删除上传的图片
  deleteImg(index){
    const newList = [...this.state.imgList];
    const indexI = newList.findIndex((item,i) => i===index);
//    console.log(indexI,'==================indexI');
    newList.splice(indexI,1);
    this.setState({
      imgList:newList
    })
  }
  // 表单校验
  checkForm(formData){
    if(formData.typeSelect===''){
      Taro.showToast({
        'title':'请选择宝贝类型！'
      })
      return false;
    }
    if(formData.typeSelect.toString() === '3' &&(!formData.earQuality || formData.earQuality==='')){
      Taro.showToast({
        'title':'请选择耳钉的镶嵌材质！'
      })
      return false;
    }
    
    if(formData.typeSelect.toString() === '0' && (!formData.rangQuality || formData.rangQuality === '')){
      Taro.showToast({
        'title':'请选择戒指的镶嵌材质！'
      })
      return false;
    }
  
    if(formData.typeSelect.toString() === '0' && (!formData.rangType || formData.rangType === '')){
      Taro.showToast({
        'title':'请选择戒指的封口类型！'
      })
      return false;
    }
  
    if(formData.typeSelect.toString() === '0' && (formData.rangType.toString() === '1' && (!formData.fingerSize || formData.fingerSize === ''))){
      Taro.showToast({
        'title':'请输入手指尺寸！'
      })
      return false;
    }
  
    if(formData.imgList.length<1){
      Taro.showToast({
        'title':'请上次定制的图样信息！'
      })
      return false;
    }
    
    return true;
  }
  // 表单提交
  submitForm(e){
    let formData = e.detail.value;
    formData['imgList'] = this.state.imgList
    console.log(formData);
    if(this.checkForm(formData)){
      // 数据提交
    }
  }
  render(){
    return(
      <View className="custom-box">
        <Form onSubmit={this.submitForm}>
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
              <View className="form-group">
                <Text>戒指镶嵌材质：</Text>
                <RadioGroup name="rangQuality">
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
                <RadioGroup onChange={this.selectRangTypeEvt} name="rangType">
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
                <Input type='digit' name="fingerSize" placeholder='请输入手指尺寸'/>
              </View>
            
          }
          
          {/*耳钉镶嵌品质*/}
          {
            this.state.selectType.toString() === '3' &&
              <View className="form-group">
                <Text>耳钉镶嵌材质：</Text>
                <RadioGroup name="earQuality">
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
            <View className="img-list">
              {
                this.state.imgList.map((item, i)=>
                  <View className="img-item">
                    <Image src={item} mode="widthFix" />
                    <Icon size='20' type='clear' onClick={this.deleteImg.bind(this, i)} />
                  </View>
                )
              }
              <Image className="img-btn" onClick={this.takePhoto.bind(this)} src="../../statics/images/photo-icon.png" mode="widthFix" />
            </View>
          </View>
          <View className="form-group">
            <Text>备注：</Text>
            <Textarea className="more-info" name="moreInfo" placeholder="其他信息请在此备注" maxlength="260"  />
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
