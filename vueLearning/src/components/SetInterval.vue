<template>
    <div class="setinterval">
      <div class="wrapper">
        {{timex}}
      </div>
    </div>
</template>

<script>
    export default {
        name: "setInterval",
        data(){
          return {
            timex: 0
          }
        },
        created: function () {
          setInterval(this.havetime,1000);
        },
        methods: {
          havetime: function () {
            this.timex ++;
            console.log(this.timex);
          }
        }

    }
</script>

<style scoped>
  .wrapper{
    width: 200px;
    height: 200px;
    color:white;
    background-color: black;
    margin: 20px 0 0 30px;
    font-size:30px;
    line-height: 200px;
    text-align: center;
  }
</style>
