<template>
    <div id = "clock">
      <div class="bg">
        <!--黑底-->
        <div class="wrapper">
          <!--表盘-->
          <ul class="num-knit">
            <li class="num" ref="num" v-for="timeScale in timeScales">
              <span ref="numSpan">{{ timeScale }}</span>
            </li>
          </ul>

          <div class="clock">
            <!--装载数字的ul-->
            <ul class="num-box">
              <li ref="scales" class="scale" v-for="n in 60"></li>
            </ul>
            <!--圆心-->
            <div class="radio"></div>
            <!--时针-->
            <div ref="hour" class="hour"></div>
            <!--分针-->
            <div ref="minute" class="minute"></div>
            <!--秒针-->
            <div ref="second" class="second"></div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "clock",

      data(){
        return {
          timeScales: [12,3,6,9],  //represent the timescales
          date: '',
          hour: '',
          minute: '',
          second: '',
          mses: ''
        }
      },

      created: function(){

      },

      mounted: function () {
        // rotate each timescale 90deg
        for(var i = 0; i < this.timeScales.length; i++){
          this.$refs.num[i].style.transform = 'rotate(' + (90 * i) + 'deg)';
          this.$refs.numSpan[i].style.transform = 'rotate(' + (-90 * i) + 'deg)';
          this.$refs.numSpan[i].style.display = 'block';
        }

        // rotate each scale 6deg
        this.$refs.scales.forEach(
          (item,index)=>{
            item.style.transform = 'rotate(' + (index * 6) + 'deg)'
          }
        )
       // this.getTime();

      setInterval(this.getTime,16.7);

      },
      methods: {
        // get and compute the degree of each local time
        getTime: function () {

          this.date = new Date();
          this.hour = this.date.getHours();
          this.minute = this.date.getMinutes();
          this.second = this.date.getSeconds();
          this.mses = this.date.getMilliseconds();

          var fillSecond = this.second + this.mses / 1000,
            ds = fillSecond * (360 / 60);   // 每秒的度数
          this.$refs.second.style.transform = 'rotate(' + ds + 'deg)';

          var fillMinute = this.minute + fillSecond / 60,
            dm = fillMinute * (360 / 60);
          this.$refs.minute.style.transform = 'rotate(' + dm + 'deg)';

          var fillHour = this.hour + fillMinute / 60,
            dh = fillHour * (360 / 12);
          this.$refs.hour.style.transform = 'rotate(' + dh + 'deg)';

          // compute which scale starts its animation
          var k = Math.floor(ds / 6);

          if(k > 59){
            k = 0;
          }
          // add Class fo Animation to No.k scale
          this.$refs.scales[k].setAttribute('class','scale changecolor');
        }
      },

    }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    list-style: none;
  }

  #clock{
    /*height: 100vh;*/
    background-color: #26282c;
  }

  .wrapper{
    width: 250px;
    height: 250px;
    border-radius: 50%;
    position: relative;
    left: 50%;
    margin: 10%;
    margin-left: -115px;
    overflow: hidden;
  }

  .clock{
    width: 200px;
    height: 200px;
    border-radius: 50%;
    border: 2px solid rgb(201,201,201);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -100px;
    margin-top: -100px;
  }

  .num-box{
    width: 100%;
    height: 200px;
    border-radius: 50%;
    position: relative;
  }

  .num{
    position: absolute;
    top: 0;
    left: 50%;
    width: 30px;
    height: 12px;
    line-height: 12px;
    margin-left: -15px;
    text-align: center;
    transform-origin: 15px 125px;
    color: black;
  }

  .num span{
    font-size: 16px;
    color: #545454;
    display: inline-block;
  }

  .scale{
    width: 3px;
    height: 10px;
    background-color: #545454;
    position: absolute;
    top: 2%;
    left: 50%;
    transform-origin: 0px 96px;
    /*transform: rotate(30deg);*/
  }

  .radio{
    width: 6px;
    height: 6px;
    border-radius: 50%;
    border: 3px solid #ffffff;
    background-color: #26282c;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -6px;
    margin-top: -6px;
    z-index: 2;
  }

  .hour{
    width: 6px;
    height: 55px;
    background-color: #545454;
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 45px;
    margin-left: -3px;
    transform-origin: center bottom;
  }

  .minute{
    width: 3px;
    height: 70px;
    background-color: #ffffff;
    border-radius: 4px;
    position: absolute;
    left: 100px;
    top: 30px;
    margin-left: -1.5px;
    transform-origin: center bottom;
  }

  .second{
    width: 0;
    height: 0;
    /*background-color: orange;*/
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 8px solid transparent;
    border-bottom: 8px solid orange;
    /*border-radius: 4px;*/
    position: absolute;
    left: 50%;
    top: 10px;
    margin-left: -5px;
    transform-origin: 5px 90px;
  }

  .changecolor{
    animation-name: cc0, cc1, cc2, cc3, cc4, cc5;
    animation-duration: 0.8s,0.8s,0.8s,0.8s,0.8s,0.8s;
    animation-delay: 0s, 0.8s, 1.6s, 2.4s, 3.2s, 4s;
  }

  @keyframes cc0{
    from {background-color: #545454;}
    to {background-color: #0ebeff;}
  }

  @keyframes cc1{
    from {background-color: #0ebeff;}
    to {background-color: #ffdd40;}
  }

  @keyframes cc2{
    from {background-color: #ffdd40;}
    to {background-color: #ae63e4;}
  }

  @keyframes cc3{
    from {background-color: #ae63e4;}
    to {background-color: #47cf73;}
  }

  @keyframes cc4{
    from {background-color: #47cf73;}
    to {background-color: #0ebeff;}
  }

  @keyframes cc5{
    from {background-color: #0ebeff;}
    to {background-color: #545454;}
  }

  .footer{
    /*width: 100%;*/
    /*height: 300px;*/
    /*background-color: red;*/
  }

  .bg{
    /*width: 100vw;*/
    /*height: 100rem;*/
  }
</style>
