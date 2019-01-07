<template>
  <div id="home">
    <app-header :title_header="titlex" @titleChanged="updateTitle($event)"></app-header>
    <users></users>
    <app-footer :title_header="titlex"></app-footer>
  </div>
</template>

<script>
  // import HelloWorld from './components/HelloWorld'
  import Users from './Users'
  import Header from './Header'
  import Footer from './Footer'

  export default {
    name: 'Home',
    data:function(){
      return {
        title: 'Hello World',
        titlex: ''
      }
    },
    components:{
      "users": Users,
      "app-header": Header,
      "app-footer": Footer
    },
    methods:{
      updateTitle: function (title_component) {
        this.titlex = title_component;
      }
    },
    created() {
        //axios
        this.$axios.post("/apis/test/testToken.php", {username:'hello',password: 123456})
          .then(data =>{
            console.log(data);
          })
      }
    }
      // this.$http.get("https://jsonplaceholder.typicode.com/users")
      //   .then((data) =>{
      //     this.titlex = data.body[0].name;
      //   })

      // fetch
      //   fetch("/apis/test/testToken.php",{
      //     method:"post",    // 请求方法
      //     headers:{         // 请求头
      //       ...
      //     },
      //     body:JSON.stringify({...})  // 请求body
      //   }).then(result =>{            // 请求成功回调函数
      //     return result.json();       // JSON解析
      //   }).then(data =>{              // 获取数据
      //     console.log(data);
      //   })
      // }


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
</script>

<style>
  h1{
    background-color: red;
  }
</style>
