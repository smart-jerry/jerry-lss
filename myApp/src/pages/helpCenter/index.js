/**
 * Created by jerry on 2019/4/18.
 */

import Taro, {Component} from '@tarojs/taro';
import {View, ScrollView, Image} from '@tarojs/components';
import positioning from '../../statics/images/forward.png'
import my from '../../statics/images/liveChat.svg'

import './index.less'

class Index extends Component{
  config = {
    navigationBarTitleText: '帮助中心'
  }
  constructor (props){
    super(props)
    
  }
  componentWillMount(){
    this.helpList = [
      {
        'title'        : '商品问题',
        'key'          : '商品质量缺漏等',
        'questionList' : [
          {
            id       : 1,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 2,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 3,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 4,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          }
        ]
      },
      {
        'title'        : '商品问题2',
        'key'          : '商品质量缺漏等',
        'questionList' : [
          {
            id       : 1,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 2,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 3,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 4,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          }
        ]
      },
      {
        'title'        : '商品问题3',
        'key'          : '商品质量缺漏等',
        'questionList' : [
          {
            id       : 1,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 2,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 3,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 4,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          }
        ]
      },
      {
        'title'        : '商品问题',
        'key'          : '商品质量缺漏等',
        'questionList' : [
          {
            id       : 1,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 2,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 3,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 4,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          }
        ]
      },
      {
        'title'        : '商品问题',
        'key'          : '商品质量缺漏等',
        'questionList' : [
          {
            id       : 1,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 2,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 3,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 4,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          }
        ]
      },
      {
        'title'        : '商品问题',
        'key'          : '商品质量缺漏等',
        'questionList' : [
          {
            id       : 1,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 2,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 3,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 4,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          }
        ]
      },
      {
        'title'        : '商品问题',
        'key'          : '商品质量缺漏等',
        'questionList' : [
          {
            id       : 1,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 2,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 3,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          },
          {
            id       : 4,
            'title'  : '送过来的商品有问题怎么办？',
            'url'    : '',
            'answer' : 'a f sf s  f s f s  fsf'
          }
        ]
      }
    ]
  }
  showQuestion(id){
    const jquery = Taro.createSelectorQuery();
    let listView = jquery.select('#questionBox'+id);
    listView.addClass('bbbb');
    listView.style.display = 'none';
  }
  render(){
    return (
      <View className="help-center">
        <ScrollView scrollY="true" scrollWithAnimation="true" className="help-box">
          {
            this.helpList.map((item, i)=>
            <View>
              <View className="item-list" onClick={this.showQuestion.bind(this, i)}>
                <View className="item-info">
                  <View className="icon-mark"><Image src={my} mode="widthFix" /></View>
                  <View className="name">
                    <View>{item.title}</View>
                    <View>{item.key}</View>
                  </View>
                </View>
                <View className="icon-operate"><Image src={positioning} mode="widthFix" /></View>
              </View>
              <View className="question-box" id={`questionBox${i}`}>
                {item.questionList.map((question, index)=>
                  <View className="question-list">
                    <View>{index}, {question.title}</View>
                    <View className="icon-operate"><Image src={positioning} mode="widthFix" /></View>
                  </View>
                )}
              </View>
            </View>
            )}
        </ScrollView>
        <View className="live-chat-box">
          <View className="live-chat-btn">在线客服 <View className="mark">处理更快哦</View></View>
          <View className="server-time">电话客服 12568945255 (服务时间：8:00 - 22:00)</View>
        </View>
      </View>
    )
  }
}

export default Index;
