<template>
  <div class="app-footer" @click="changeTitle">
    {{title_header}}
  </div>
</template>

<script>
    export default {
      name: "Header",
      props: ['title_header'],
      data:function () {
        return {
          // title: 'VUE真是太有趣啦'
        }
      },
      methods:{
        changeTitle: function () {
          this.$emit('titleChanged','title被我改变了');
        }
      }
    }
</script>

<style scoped>

</style>
