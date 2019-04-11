# 一，API
微信小程序

微信开发api：https://developers.weixin.qq.com/miniprogram/dev/index.html

taro api：https://nervjs.github.io/taro/docs/GETTING-STARTED.html

ps：微信不绑卡，可以用测试账号写demo\
代码永久保存可以申请云服务


# 二，环境搭建
环境：node 11.12.0\
### 1，安装开发工具：
全局安装taro开发工具：`npm install -g @tarojs/cli`
感受:taro的工具很厉害，连自适应都做好了，哈...\
taro就是用封装好的组件写代码，类似于elementui、bootstrap等






# 三，相关问题
### 1,依赖安装失败（√）
报错:依赖包获取失败，网络超时\
原因：`https://r.cnpmjs.org`请求超时，.npmrc文件设置的npm源有问题，似乎是内网域名\
解决方案：修改成淘宝的源

### 2,如何获取输入框input的值（√）
在input上绑定onBlur事件，通过e.detail.value拿到用户输入的值

### 3,删除数组，ui更新很慢，有时候不更新，而store却更新了。偶数点击可删除，奇数点击无效（√）
原因： state.splice(index, 1) 是会修改原始数组的, 这样相当于直接对 state 中的数据直接修改.\
官方解释：React Redux 会在 shouldComponentUpdate 中对新的 props 进行浅层的判等检查，以期提升性能。如果所有的引用都是相同的，则返回 false 从而跳过此次对组件的更新。\
解释文档：http://cn.redux.js.org/docs/faq/ReactRedux.html

解决方案：想复制再splice，然后在返回，详见reducer/hwary.js中的del方法


### 4, fetch方面报错:is not function（√）
原因：小程序不支持，用taro.request

### 5,底部bar点击切图tab无效？（√）
原因：app.js中没有加对应的list。且底部导航无需自定义，直接在app.js中配置即可

### 6,如何设置沉浸式头部？（√）
见文档：https://nervjs.github.io/taro/docs/tutorial.html#window

### 7，图片必须设置高度才能显示？（√）
场景：图片被拉伸，不能自动缩放，css的自动缩放auto无效。\
解决方案：设置图片的mode属性


### 8,navigator动态传参？
事件可传参

### 9,监听自定义的返回事件?（√）
用navigateBack

### 10,如何从子页面跳转到首页的某个tab项中？（√）
用switchTab

### 11，进入详情页有时候会先经过类目页，再进入详情页？
操作步骤：首页，类目页，首页，子页面。\


# 四，旅途
1，环境搭建（√）\
项目，开发者工具，目录文件熟悉

2，跟流行库结合（√）\
vue，react等对比：https://www.cnblogs.com/Smiled/p/9806781.html

wepy、mpvue、taro

3，选库（√）\
taro\
目的:练习react

4，搭建库（√）


5，小demo（√）\
渲染，redux，异步action，组件，input输入内容


6，网站开发\
6.1构思\

店铺首页\
新品秒杀，限时抢购\
定制\
搜索


分类\
观音，佛，十二生肖，繁花似锦\
吊坠，戒指

购物车


个人中心
订单（全部，未付款，待发货，已发货，待评价）\
个人头像，基本信息\
在线客服


详情页


6.2，目录划分\
