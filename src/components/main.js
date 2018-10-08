import Vue from 'vue';
import VueInstantMenuComp from './VueInstantMenu.vue';
import MenuItem from './MenuItem.vue';

const VueInstantMenu = {
    install(Vue) {
      Vue.component('vue-instant-menu', VueInstantMenuComp)
      Vue.component('menu-item', MenuItem)
    }
}

export default VueInstantMenu;
export const VueInstantMenuEventBus = new Vue();