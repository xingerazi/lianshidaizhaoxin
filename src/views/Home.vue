<template>
  <div class="home">
    <div class="p1"><img src="../assets/direct/p1.webp" alt=""></div>
    <div class="p2"><img src="../assets/direct/p2.webp" alt=""></div>
    <div class="p3"><img src="../assets/direct/p5.png" alt=""></div>
    <div class="p4"><img src="../assets/direct//p6.png" alt=""></div>
    <div class="bgimage">
      <div class="title">
        <h3 class="animate__animated animate__flipInX animate__slow">链时代工作室</h3>
      </div>
    </div>
    <div>
        <el-card shadow="hover">
                <h1 class="content-title">关于我们<img class="icon" src="../assets/direct/p9.svg" alt="research directions"></h1>
                <div class="text">链时代工作室 由主攻量子网络安全方向的王老师和现已直博北大的邱学长共同创建，成立于2017年，是信软学院最年轻的工作室之一。 经过六年不断地壮大，有许多优秀的学长学姐走出链时代，走出成电，在各自的专业领域发光发热。 工作室17级—22级成员约有100余人，其中多人去国内外顶尖大学进修，亦有多人拿到阿里、百度、华为、字节跳动等互联网大厂的offer。</div>     
                  <el-carousel :interval="3000" type="card" height="18vw">
                  <el-carousel-item v-for="item in imgList" :key="item.id">
                    <img :src="item.url" width="100%" height="100%" alt="">
                  </el-carousel-item>
                </el-carousel>
        </el-card>
        <el-card shadow="hover">
                <h1 class="content-title">研究方向<img class="icon" src="../assets/direct/p10.svg" alt="research directions"></h1>
                <div class="imgcon">
                   <div id="imgcons1" class="wow animate__zoomInLeft" data-wow-duration="1s" data-wow-delay="0s"><img src="../assets/direct/Blockchain_logo_web.jpg" alt="" class="imgcard1"><div class="imgtxt">网络&区块链</div></div>
                   <div id="imgcons1"  class="wow animate__zoomInLeft" data-wow-duration="1s" data-wow-delay="0.5s"><img src="../assets/direct/js.jpg" alt="" class="imgcard1"><div class="imgtxt">前端</div></div>
                   <div id="imgcons1"  class="wow animate__zoomInLeft" data-wow-duration="1s" data-wow-delay="1s"><img src="../assets/direct/machine.png" alt="" class="imgcard1"><div class="imgtxt">机器学习</div></div>
                   <div id="imgcons1"  class="wow animate__zoomInLeft" data-wow-duration="1s" data-wow-delay="1.5s"><img src="../assets/direct/java.jpg" alt="" class="imgcard1"><div class="imgtxt">后端</div></div>
              
                </div>                    
        </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgList: [
        //图片路径不能写为这种形式
        // {
        //   id: '1',
        //   url: '../assets/test1.jpg'
        // },
        //需要使用require获取
        {
          id: '1',
          url: require('../assets/direct/home1.png')
        },
        {
          id: '2',
          url: require('../assets/direct/home2.png')
        },
        {
          id: '3',
          url: require('../assets/direct/home3.png')
        },
        {
          id: '4',
          url: require('../assets/direct/home4.png')
        }
      ]
    };
  },
  methods: {},
  mounted() {
    new this.$wow.WOW().init()
  },
};
</script>

<style lang="less" scoped>
.home {
  .bgimage {
    background-image: url(../assets/bg.png);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 100%;
    height: 300px;
    
    .title {
      font-size: 50px;
      color: rgb(238, 238, 238);
      position: relative;
      top: 38%;
      margin-left: calc(50% - 150px);
    }
  }
  .bgimage::before{
      content: "";
      position: absolute;
      width: 100%;
      height: 300px;
      backdrop-filter: blur(8px);
    }
  .el-card{
    margin: 30px 300px 0px 300px;
  }
  h1{
   font-size:40px; 
  }
  .icon{
    float: left;
    height: 50px;
    margin-right: 10px;
  }
  .text{
    font-size: 20px;
    letter-spacing: 4px;
    margin:0 40px 0 40px;
  }
  li{
    font-size: 20px;
    margin-bottom: 10px;
  }
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  .el-carousel{
    margin-top: 50px;
  }
  .home:not(.el-card){
    width:100%;
    height: 100%;
    background:  linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);;
    background-size: 500% 500%;
    animation:gradientBG 5s ease infinite;
  }
  @keyframes gradientBG{
	    0% {
	    background-position: 0% 50%;
	    }
	    50% {
	        background-position: 100% 50%;
	    }
	    100% {
	        background-position: 0% 50%;
	    }
	}
  .imgcon{
    display: flex;
  }
  .clearfix:after {
      clear: both
  }
  .image {
    width: 300px;
    height: 250px;
    display: block;
  }
 
 .el-col{
  margin: 30px 0 30px 0;
 }
.imgcon{
  display: flex;
 }
 .imgcard1{
  width: 100%;
  height: 70%;
 }
 .imgtxt{
  text-align: center;
  margin-top: 10px;
  font-size:20px;
 }
 #imgcons1{
  flex: 1;
  margin: 10px;
 }
 .p1, .p2, .p3, .p4{
  width: 200px;
    height: 200px;
    position: absolute;
    animation-name: move1;
    animation-timing-function: ease-in-out;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    float: right;
    img {
    max-width: 98%;
    height: auto;
  }
}
.p1{
  right: 50px;
    top: 400px;
}
.p2{
  left: 50px;
    top: 600px;
}
.p3{
  right: 40px;
    top: 1000px;
}
.p4{
  left: 30px;
    top: 1200px;
}
@keyframes move1 {
    0% {
        transform: translateY(0px);
        opacity: 0;
    }

    33% {
        opacity: 1;
    }

    66% {
        opacity: 1;
    }

    100% {
        transform: translateY(300px);
        opacity: 0;
    }
}
</style>