<template>
  <div id="app">
    <transition name="fadeIn">
      <keep-alive>
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
    <tab></tab>
  </div>
</template>

<script>
  import Tab from './base/Tab.vue';

  export default {
    name: 'App',
    components: {
      Tab
    }
  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none
  }

  a {
    text-decoration: none
  }

  input, button {
    -webkit-appearance: none;
  }

  .content {
    position: fixed;
    width: 100%;
    top: 40px;
    bottom: 50px;
    overflow: auto;
  }

  .fadeIn-enter-active {
    transition: all 0.3s linear;
  }

  .fadeIn-leave-active {
    transition: all 0.3s linear;
    opacity: 0;
  }
</style>
