<template>
  <div>
    <div class="nav" v-if="!isMobile">
      <div class="title" style="margin-left: 50px">
        <h3>链时代工作室</h3>
      </div>
      <div style="display: flex; margin-left: 100px">
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
        >
          <el-menu-item
            v-for="item in maininfo"
            :index="item.index"
            :key="item.index"
            @click="changePage(item)"
            >{{ item.name }}</el-menu-item
          >
        </el-menu>
        <el-dropdown class="imgbox">
          <span
            class="el-dropdown-link"
            style="position: relative; top: 60px; right: 20px"
          >
            <div style="width: 80px; height: 30px">遇到问题？</div>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              >若网页出现bug或问题，请联系群内前端学长❤</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
    <div class="nav" v-else>
      <div
        class="title"
        style="margin-left: 20px; min-width: 70px; line-height: 50px"
      >
        <h3>链时代</h3>
      </div>
      <div class="menu" style="padding-top : 30px;">
        <el-dropdown>
          <span class="el-dropdown-link">
            了解更多<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item
              v-for="item in maininfo"
              :index="item.index"
              :key="item.index"
              @click.native="logit(item)"
              >{{ item.name }}</el-dropdown-item
            >
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      maininfo: [
        {
          index: "1",
          name: "主页",
          label: "home",
        },
        {
          index: "2",
          name: "方向介绍",
          label: "info",
        },
        {
          index: "3",
          name: "招新",
          label: "recruit",
        },
        {
          index: "4",
          name: "荣誉墙",
          label: "honor",
        },
      ],
      isMobile: false,
    };
  },
  created() {
    window.addEventListener("resize", this.updateIsMobile);
    this.updateIsMobile();
  },
  methods: {
    changePage(item) {
      console.log(item.label);
      console.log(this.$route.path);
      if (this.$route.path !== `/${item.label}`) {
        this.$router.push(item.label);
      }
    },
    updateIsMobile() {
      // 根据窗口大小设置 isMobile 变量
      this.isMobile = window.innerWidth <= 767;
    },
    logit(item) {
      console.log(item.label);
      console.log(this.$route.path);
      if (this.$route.path !== `/${item.label}`) {
        this.$router.push(item.label);
      }
    },
  },
  beforeDestroy() {
    // 在组件销毁前移除窗口大小变化的监听器
    window.removeEventListener("resize", this.updateIsMobile);
  },
};
</script>

<style lang="less" scoped>
.nav {
  position: fixed;
  top: 0%;
  z-index: 100;
  width: 100%;
  height: 9%;
  // background-color: antiquewhite;
  display: flex;
  justify-content: space-around;
  box-shadow: 0 0 10px #000;
  background-color: rgb(255, 255, 255);
  .title {
    height: 100%;
    h3 {
      text-align: center;
      height: 100%;
      line-height: 84px;
      font-size: 23px;
    }
  }

  .el-menu-demo {
    height: 99%;
    .el-menu-item {
      height: 100%;
      line-height: 80px;
      text-align: center;
      font-size: 17px;
    }
    .is-active {
      border-bottom: 2px solid #2f6ce5;
    }
  }

  .imgbox {
    position: relative;
    // top: 50px;
    right: -330px;
  }
  // .menu{
  //   margin-top: 30px;
  //   margin-right: 70px;
  // }
}
</style>