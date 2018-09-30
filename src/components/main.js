import Vue from 'vue';
import InstantMenu from './InstantMenu.vue';
import MenuItem from './MenuItem.vue';

const Components = {
    InstantMenu,
    MenuItem
};

Object.keys(Components).forEach(name => {
    Vue.component(name, Components[name])
});

export default Components;