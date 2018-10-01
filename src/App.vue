<template>
  <div id="app">
      <vue-instant-menu :mobile-breakpoint="992">
        <menu-item menu-title="Home" menu-href="#"></menu-item>
        <menu-item menu-title="Features" menu-href="#">
            <menu-item menu-title="Elements" menu-href="#"></menu-item>
            <menu-item menu-title="Pricing Tables" menu-href="#"></menu-item>
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