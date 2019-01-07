<template>
  <div id="app">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/helloworld">HelloWorld</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

  export default {
    name: 'App',
    data:function(){
      return {

      }
    },

    methods:{

    },
    // 生命周期钩子
    // beforeCreate: function () {
    //   alert('beforeCreate');
    // },
    // created: function () {
    //   alert('created');
    // },
    // beforeMount: function () {
    //   alert('beforeMount');
    // },
    // mounted: function () {
    //   alert('mounted');
    // },
    // beforeUpdate: function () {
    //   alert('beforeUpdate');
    // },
    // updated: function () {
    //   alert('updated')
    // }
  }
</script>

<style>
  h1{
    background-color: red;
  }
</style>
