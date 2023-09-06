<template>
  <div class="nav">
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
    };
  },
  methods: {
    changePage(item) {
      // console.log(item.label);
      // console.log(this.$route.path);
      if (this.$route.path !== `/${item.label}`) {
        this.$router.push(item.label);
      }
    },
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
}
</style>