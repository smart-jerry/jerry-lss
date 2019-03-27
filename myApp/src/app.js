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
      'pages/demo/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    'tabBar' : {
      'color'           : '#7A7E83',
      'selectedColor'   : '#3cc51f',
      'borderStyle'     : 'black',
      'backgroundColor' : '#ffffff',
      'list'            : [
        {
          'pagePath'         : 'pages/index/index',
          'iconPath'         : 'statics/images/category.png',
          'selectedIconPath' : 'statics/images/category.png',
          'text'             : '首页'
        },
        {
          'pagePath'         : 'pages/category/index',
          'iconPath'         : 'statics/images/category.png',
          'selectedIconPath' : 'statics/images/category.png',
          'text'             : '类目'
        },
        {
          'pagePath'         : 'pages/cart/index',
          'iconPath'         : 'statics/images/category.png',
          'selectedIconPath' : 'statics/images/category.png',
          'text'             : '购物车'
        },
        {
          'pagePath'         : 'pages/account/index',
          'iconPath'         : 'statics/images/category.png',
          'selectedIconPath' : 'statics/images/category.png',
          'text'             : '个人中心'
        },
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
