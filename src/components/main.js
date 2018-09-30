import Vue from 'vue';
import VueInstantMenu from './VueInstantMenu.vue';
import MenuItem from './MenuItem.vue';

const Components = {
    VueInstantMenu,
    MenuItem
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export default Components;
