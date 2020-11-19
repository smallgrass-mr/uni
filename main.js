import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

//引入全局组件
import devider from './components/common/devider.vue';
Vue.component('devider',devider);

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
