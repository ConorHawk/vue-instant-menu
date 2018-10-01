<template>
  <li @mouseover="openMenu()" @mouseout="closeMenu()" :class="{'parent-link': isParentLink}">
    <a :href="menuHref" :aria-haspopup="isParentLink" :aria-expanded="expanded">{{menuTitle}}</a>
    <button class="menu-item-toggle" @click="toggleMenu()" :aria-expanded="expanded" v-if="isParentLink && !isMobile">
      <svg viewBox="0 0 20 9" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M10 8.762L0 0h20L10 8.762z" fill="currentColor"/></svg>
      <span class="visuallyhidden">show submenu for “' + activatingA.text + '”</span>
    </button>
    <transition name="fade" mode="out-in">
      <template v-if="expanded || isMobile && isParentLink">
        <ul class="sub-menu">
          <slot></slot>
        </ul>
      </template>
    </transition>
  </li>
</template>

<script>
import {VueInstantMenuEventBus} from './main.js'
export default {
  props: {
    menuTitle: {
      type: String,
      required: true
    },
    menuHref: {
      type: String
    }
  },
  data () {
    return {
      expanded: false,
      isMobile: false
    }
  },
  mounted () {
    VueInstantMenuEventBus.$on('mobile-change', (value) => {
      this.isMobile = value
    })
  },
  methods: {
    openMenu () {
      if (this.isParentLink && !this.isMobile) {
        this.expanded = true
      }
    },
    closeMenu () {
      if (this.isParentLink && !this.isMobile) {
        this.expanded = false
      }
    },
    toggleMenu () {
      if (this.isParentLink) {
        this.expanded = !this.expanded
      }
    }
  },
  computed: {
    isParentLink () {
      if (this.$slots.default) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>
