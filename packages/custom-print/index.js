
import customPrint from './src/custom-print.vue'

// 为组件提供 install 安装方法，供按需引入
customPrint.install = function (Vue) {
  Vue.component(customPrint.name, customPrint)
}

// 默认导出组件
export default customPrint
