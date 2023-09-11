<template>
    <el-card class="questionbox">
      <h1>前端招新</h1>
      <p><span>注：Ⅰ~Ⅲ为基础题，Ⅳ~Ⅵ为进阶题。所有选择前端方向的同学都要至少完成三道基础题，学有余力的同学可以尝试后三道进阶题</span> </p>
     <el-divider></el-divider>
     <h2 style="margin-top: 30px">前端 基础题🍋</h2>
      <el-card class="question">
        <h3 id="-">Ⅰ开干，我玩的就是真实</h3>
        <p>上了大学当然少不了一场甜甜的恋爱啦😍，而全方面的收集信息更有助于找到适合自己的朋友，在本题中，你将设计一个表单收集信息，并且加上好看的 CSS 动画背景，尽你所能复刻一份如图所示的表单吧</p>
        <p><span>题目要求：</span>如图所示复刻 </p>
        <p><img src="../assets/frontimg/表单背景GIF.gif" alt=""></p>
        <hr>
      </el-card>
      <el-card class="question">
        <h3 id="-">Ⅱ 旋转盒子</h3>
        <p style="margin-top: 20px;"><span>题目要求：</span> CSS3 可以让我们实现很多动画效果，有时这些效果甚至比 JS 还要丝滑😋。在本题中，你需要用 HTML 和 CSS 创造一个透明盒子并使其旋转起来</p>
        <p><span>题目描述：</span> 使用 HTML 和 CSS 创建两个透明盒子，并通过 CSS3 动画使其旋转起来。其中大盒子为了便于区分六个面，可以分别在六个面上标注<em>前后左右上下</em>，而小盒子应该在大盒子里，当鼠标移动到盒子的位置时，大盒子顶面打开同时旋转，小盒子也旋转飞出，具体范例如图</p>
        <p><img src="../assets/frontimg/盒子GIF.gif" style="width: 30%; margin-left: 35%;"></p>
        <hr>
      </el-card>
      <el-card class="question">
        <h3 id="-" style="margin-bottom: 30px;">Ⅲ 自学软件</h3>
        <p>大学大学，大不了自学，相信大家每天的自学中一定会打开一个名为 Steam 的软件，在本题中，你需要模仿 Steam 游戏平台的界面设计一个网页</p>
        <p><strong>题目要求：</strong>使用 HTML 与 CSS 创建一个模仿 Steam 库界面的网页，至少包含以下内容：</p>
        <p><img src="../assets/frontimg/微信图片_20230829210817.png" alt=""></p>
        <ol>
        <li>一个顶部导航栏，包括 Steam 的 logo、菜单选项（如查看，好友，游戏，帮助，以及下方的商店，库，社区，用户名称等）以及用户登录信息，和必要的图标</li>
        <li>在页面主体部分的左侧，需要有必要的分类栏，搜索栏，以及库中的游戏，其中需要包括小图标和游戏名称</li>
        <li>在页面主体部分的右侧，需要展示一些热门游戏的封面图片和名称。这些游戏可以是虚构的，你可以使用任意的图片占位</li>
        <li>在页面底部，创建一个简单的页脚，包括一些文字信息</li>
        </ol>
      </el-card>
      <h2 style="margin-top: 30px">前端 进阶题😵‍💫</h2>
      <el-card class="question" style="margin-bottom: 30px">
        <h3 id="-">Ⅳ 完善 Steam</h3>
        <p style="margin-top: 20px;"><strong>进阶挑战（加分项）：</strong></p>
        <p>如果你觉得还有能力可以把第三题做得更好,那么可以根据以下提示来完成这一部分：</p>
        <ol>
        <li><p>实现顶部导航栏的下拉表单</p>
        <p><img src="../assets/frontimg/微信图片_20230829210905.png" style="zoom: 80%; width: 30%;" /></p>
        </li>
        <li><p>当鼠标移动到部分文字或图标上时，实现它的高亮</p>
        <p><img src="../assets/frontimg/微信图片_20230829210930.png" alt="" style="width: 30%;"></p>
        </li>
        <li><p>实现左侧，右侧主体部分的滚动,搜索栏内可以输入文字</p>
        <p><img src="../assets/frontimg/微信图片_20230829211012.png" style="zoom: 50%; width: 30%;" /></p>
        </li>
        <li><p>当鼠标移动到右侧图片上时，图片可以浮动或显示更多信息</p>
        <p><img src="../assets/frontimg/微信图片_20230829211201.png" style="zoom:67%;width: 60%;" /></p>
        </li>
        <li><p>当鼠标移动到左侧游戏上时，变换背景颜色</p>
        <p><img src="../assets/frontimg/微信图片_20230829211232.png" style="zoom:67%;width: 60%;" alt=""></p>
        </li>
        <li><p>尽力去还原更多的细节，与原版 Steam 越相似越好哦</p>
        </li>
        </ol>
        <p>请注意，这只是一个笔试题目，你不需要实现完整的功能，而是展示你在前端开发方面的能力和创造力。如果你有任何问题，可以联系学长们进行解答。祝你好运！</p>
        <hr>
      </el-card>
      <el-card class="question" style="margin-bottom: 30px">
        <h3 id="-">Ⅴ 轮播图</h3>
        <p style="margin-top: 20px;"><strong>题目要求：</strong>实现一个轮播图，图片内容不做要求</p>
        <p><img src="../assets/frontimg/轮播图.png" style="width: 100%;" alt=""></p>
        <p><strong>基本要求：</strong></p>
        <ul>
        <li>图片展示区定时切换下一张照片</li>
        <li>具有左右切换按钮和底部切换栏</li>
        </ul>
        <hr>
      </el-card>
      <el-card class="question" style="margin-bottom: 30px">
        <h3 id="-">Ⅵ 备忘录</h3>
        <p style="margin-top: 20px;"><strong>题目要求：</strong>本题需要完成一个能够记录事情的备忘录，必须具备增加，删除等基本功能。</p>
        <p><img src="../assets/frontimg/备忘录.png" alt=""></p>
        <p><strong>提示：</strong></p>
        <ul>
        <li>可以用自己所学知识去完善它的功能，例如修改要做的事情，标注要做的事情完成进度等等。</li>
        </ul>
        <p><strong>进阶：</strong></p>
        <ul>
        <li>vue 是一套用于构建用户界面的渐进式 Javascript 框架，如果学有余力可以学习并使用vue框架来实现本功能。</li>
        </ul>
      </el-card>
    </el-card>
  </template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {
  },
};
</script>
  
  <style lang="less" scoped>

  img{
    width: 100%;
  }
.questionbox {
  margin-top: 20px;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 20px;
  min-height: 90vh;
  border-radius: 1%;
  p {
    margin-bottom: 20px;
    span {
      font-weight: 800;
    }
  }

  .question {
    margin-top: 30px;
  }

  pre {
    margin-top: 20px;
    background-color: rgb(248, 248, 248);
    border-radius: 2%;
    font-size: 15px;
    font-weight: 550;
    color: #999;
  }
}
@media (max-width: 767px) {
  .questionbox {
    width: auto; /* 在小屏幕上设置宽度为100% */
    margin-left: 0;
    .animal{
    display: block;
    img{
      width: 60%;
    margin-left: 20%;
    height: 300px;
    }
  }
  }

}

</style>