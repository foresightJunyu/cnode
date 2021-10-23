import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.filter('formatDate', function (str: string) {
  if (!str) return ''
  const date = new Date(str)
  const time = new Date().getTime() - date.getTime() // 现在的时间-传入的时间 = 相差的时间（单位 = 毫秒）
  if (time < 0) {
    return ''
  } else if ((time / 1000 < 30)) {
    return '刚刚'
  } else if (time / 1000 < 60) {
    return parseInt(String((time / 1000))) + '秒前'
  } else if ((time / 60000) < 60) {
    return parseInt(String((time / 60000))) + '分钟前'
  } else if ((time / 3600000) < 24) {
    return parseInt(String(time / 3600000)) + '小时前'
  } else if ((time / 86400000) < 31) {
    return parseInt(String(time / 86400000)) + '天前'
  } else if ((time / 2592000000) < 12) {
    return parseInt(String(time / 2592000000)) + '月前'
  } else {
    return parseInt(String(time / 31536000000)) + '年前'
  }
}
)
// 处理显示板块的文字
Vue.filter('tabFormatter', function (post: { good: boolean; top: boolean; tab: string; }) {
  if (post.good == true) {
    return '精华'
  } else if (post.top == true) {
    return '置顶'
  } else if (post.tab == 'ask') {
    return '问答'
  } else if (post.tab == 'share') {
    return '分享'
  } else {
    return '招聘'
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
