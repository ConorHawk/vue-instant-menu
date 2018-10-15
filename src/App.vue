<template>
  <div id="app">
        <vue-instant-menu
        >
            <menu-item menu-title="Home" menu-href="#"></menu-item>
            <menu-item menu-title="Features" menu-href="#">
                <menu-item menu-title="Elements" menu-href="#"></menu-item>
                <menu-item menu-title="Web Design + Development" menu-href="#"></menu-item>
                <menu-item menu-title="Icons" menu-href="#"></menu-item>
            </menu-item>
            <menu-item menu-title="Portfolio" menu-href="#"></menu-item>
        </vue-instant-menu>
  </div>
</template>
 <script>
 export default {
  name: 'app',
  components: {
  }
}
</script>
 <style>
#app {
}
</style>