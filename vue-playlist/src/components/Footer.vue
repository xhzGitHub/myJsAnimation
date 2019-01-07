<template>
  <div class="app-footer">
    {{f_title}}
    <span>{{title_header}}</span>
  </div>
</template>

<script>
    export default {
        name: "Footer",
        props:['title_header'],
        data: function () {
          return {
            f_title: 'copyRight 2019'
          }
        }
    }
</script>

<style scoped>

</style>
