<template>
    <div class="users">
      <ul>
        <li v-for="user in users">
          <h1>{{user}}</h1>
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "users",
        data:function () {
          return{
            users:['xhz','zz','wx']
          }
        }
    }
</script>

<style scoped>
  h1{
    background-color: green;
  }
</style>
