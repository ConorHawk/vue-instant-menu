<template>
  <li :class="{'parent-link': isParentLink}">
    <component :is="tag || (menuHref ? 'a' : 'button')" :style="activeStyles" :href="menuHref" :aria-haspopup="isParentLink" :aria-expanded="expanded">
      <slot name="custom">
        {{menuTitle}}
      </slot>
    </component>
    <button class="menu-item-toggle" @click="toggleMenu()" :aria-expanded="expanded" v-if="isParentLink && !isMobile">
      <svg aria-hidden="true" data-prefix="fas" data-icon="caret-down" class="svg-inline--fa fa-caret-down fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path></svg>
      <span class="visuallyhidden">show submenu for “' + activatingA.text + '”</span>
    </button>
      <ul v-if="isParentLink" :style="dropdownStyles" class="sub-menu">
        <slot></slot>
      </ul>
  </li>
</template>

<script>
import { VueInstantMenuEventBus } from "./main.js";
export default {
  props: {
    menuTitle: {
      type: String,
      required: true
    },
    menuHref: {
      type: String
    },
    isActive: {
      type: Boolean,
      default: false
    },
    tag: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      expanded: false,
      isMobile: false,
      styleObject: null
    };
  },
  mounted() {
    VueInstantMenuEventBus.$on("mobile-change", value => {
      this.isMobile = value;
    });
    VueInstantMenuEventBus.$on("style-object", value => {
      this.styleObject = value;
    });
  },
  computed: {
    isParentLink() {
      if (this.$slots.default) {
        return true;
      } else {
        return false;
      }
    },
    dropdownStyles() {
      if (!this.isMobile && this.styleObject) {
        return {
          color: this.styleObject.dropdownColor,
          backgroundColor: this.styleObject.dropdownBackgroundColor
        };
      } else {
        return {};
      }
    },
    activeStyles() {
      if (this.isActive && this.styleObject) {
        return {
          color: this.styleObject.activeColor
        };
      } else {
        return {};
      }
    }
  }
};
</script>
