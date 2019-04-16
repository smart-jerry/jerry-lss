import '@tarojs/async-await'
import Taro, { Component } from '@tarojs/taro'
import { Provider } from '@tarojs/redux'

import Index from './pages/index'

import configStore from './store'

import './app.less'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

const store = configStore()

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/category/index',
      'pages/cart/index',
      'pages/account/index',
      'pages/demo/index',
      'pages/customize/index',
      'pages/search/index',
      'pages/detail/index',
      'pages/checkout/index'
    ],
    window: {
      navigationBarTextStyle: 'black',
      navigationBarTitleText: '青琅斋',
      navigationBarBackgroundColor: '#ffa500',
      backgroundTextStyle:'dark',
      backgroundColorTop:'#ffa500',
      backgroundColor:'#ffa500'
    },
    'tabBar' : {
      'color'           : '#7A7E83',
      'selectedColor'   : '#ffa500',
      'borderStyle'     : 'black',
      'backgroundColor' : '#ffffff',
      'list'            : [
        {
          'pagePath'         : 'pages/index/index',
          'iconPath'         : 'statics/images/home.png',
          'selectedIconPath' : 'statics/images/home-on.png',
          'text'             : '首页'
        },
        {
          'pagePath'         : 'pages/category/index',
          'iconPath'         : 'statics/images/category.png',
          'selectedIconPath' : 'statics/images/category-on.png',
          'text'             : '分类'
        },
        {
          'pagePath'         : 'pages/cart/index',
          'iconPath'         : 'statics/images/cart.png',
          'selectedIconPath' : 'statics/images/cart-on.png',
          'text'             : '购物车'
        },
        {
          'pagePath'         : 'pages/account/index',
          'iconPath'         : 'statics/images/account.png',
          'selectedIconPath' : 'statics/images/account-on.png',
          'text'             : '会员中心'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentCatchError () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
