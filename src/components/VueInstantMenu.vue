<template>
<div class="vue-instant-menu">
  <button aria-label="open sidebar" class="mobile-open-button" v-if="isMobile" @click="expanded = !expanded">
    <slot name="mobile-open-button">
      <svg aria-hidden="true" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
    </slot>
  </button>
  <ul class="main-menu" :class="{'active': expanded, 'mobile': isMobile}">
    <button aria-label="close sidebar" class="mobile-close-button" v-if="isMobile" @click="expanded = !expanded">
      <slot name="mobile-close-button">
        <svg aria-hidden="true" data-prefix="fal" data-icon="times" class="svg-inline--fa fa-times fa-w-10" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z"></path></svg>
      </slot>
    </button>
    <slot></slot>
  </ul>
</div>
</template>

<script>
import {VueInstantMenuEventBus} from './main.js'
export default {
  props: ['mobileBreakpoint'],
  data () {
    return {
      expanded: false,
      isMobile: false
    }
  },
  mounted () {
    this.$nextTick(function () {
      window.addEventListener('resize', this.calculateMobile)
      this.calculateMobile()
    })
  },
  methods: {
    // On mobile, will add a mobile class to the main menu
    calculateMobile () {
      var windowWidth = document.documentElement.clientWidth
      var isMobile = (windowWidth <= this.mobileBreakpoint)
      VueInstantMenuEventBus.$emit('mobile-change', isMobile)
      this.isMobile = isMobile
    }
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.calculateMobile)
  }
}
</script>

<style lang="scss">
.vue-instant-menu {
  color: #22292F;
  .main-menu {
    list-style: none;
    display: inline-flex;
    margin: 0;
    padding:0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // The top level item
    &>li {
      margin: 0rem 0.5rem;
      position: relative;
      display:flex;
      align-items: center;
      padding: 0.5em 1em;
      a {
        color: inherit;
        text-decoration: none;
        &:hover, &:focus {
          text-decoration: underline;
        }
      }
    }
    .sub-menu {
      background-color: #22292F;
      padding:0px;
      margin:0px;
      list-style: none;
      position: absolute;
      min-width: 100%;
      max-width:200px;
      top: 100%;
      li {
        padding: 0.5em 1em;
        a {
          color:white;
          text-decoration: none;
          white-space: nowrap;
          &:focus, &:hover {
            text-decoration: underline;
          }
        }
      }
    }
    // The small down arrow next to dropdowns
    .menu-item-toggle {
      margin-left:5px;
      padding:0px;
      background-color:transparent;
      border:none;
      display:inline-flex;
      align-items:center;
      justify-content: center;
      svg {
        width: 10px;
      }
    }
    // Accessibly hidden css class
    .visuallyhidden {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }
  }

  .main-menu.mobile {
    color: white;
    background-color: #22292F;
    flex-direction: column;
    position:fixed;
    right: 0;
    top: 0;
    height: 100%;
    width: 250px;
    transform: translateX(250px);
    transition: 0.3s all ease;
    padding-top: 1em;
    &.active {
      transform: translateX(0px);
    }
    &>li {
      display: block;
    }
    .sub-menu {
      position: static;
      padding-top: 0.5em;
      min-width: auto;
      max-width: none;
      background-color: inherit;
      li {
        a {
          color:inherit;
        }
      }
    }
  }

  button {
    color: inherit;
    background-color: transparent;
    border: none;
  }

  .mobile-open-button {
    svg {
      width: 20px;
    }
  }
  .mobile-close-button {
    position: absolute;
    right:0;
    top:0;
    padding:0.5em;
    z-index:2;
    svg {
      width: 20px;
    }
  }

  .fade-enter-active, .fade-leave-active {
    transition: opacity .2s;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
}
</style>
