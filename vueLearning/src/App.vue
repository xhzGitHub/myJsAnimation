<template>
  <div id="app">
    <h1>Welcome to VUE</h1>
    <ul>
      <li><router-link to="/clock">Clock特效</router-link></li>
      <li><router-link to="/setinterval">定时器</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>

</style>
