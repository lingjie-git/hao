//vue 3提供的创建应用实例的方法
import { createApp } from 'vue'
//清除默认样式
import '@/style/reset.css'
//引入根组件
import App from './App.vue'

//引入全局组件
import HospitalTop from '@/components/hospital_top/index.vue'
import HosiptalBottom from '@/components/hospital_bottom/index.vue'
import Login from './components/login/index.vue'
// 就诊人
import Visitor from '@/components/visitor/visitor.vue'
//引入路由核心插件
import router from './router/index'

//引入elment 组件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入中文
//@ts-ignore

import zhCn from 'element-plus/dist/locale/zh-cn.mjs'


//引入pinia仓库
import pinia from '@/store'

// 创建应用实例
const app = createApp(App)
app.component('HospitalTop', HospitalTop)
app.component('HosiptalBottom', HosiptalBottom)
app.component('Login', Login)
app.component('Visitor', Visitor)


app.use(router)
app.use(ElementPlus, {
    // locale: zhCn
})
// 安装pinia仓库
app.use(pinia)

//引入路由鉴权文件
import './permisstion'
app.mount('#app')
