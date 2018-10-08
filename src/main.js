import Vue from 'vue'
import App from './App.vue'
import VueInstantMenu from './components/main.js'
Vue.use(VueInstantMenu)

Vue.config.productionTip = false
new Vue({
    render: h => h(App)
}).$mount('#app')