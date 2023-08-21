<template>
  <div class="main">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  data() {
    return {};
  },
  components: {
    Header,
    Footer,
  },
};
</script>

<style>
.el-header{
  padding: 0 0 10px;
} 
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-main {
  min-height: 100vh;
}

body > .el-container {
    margin-bottom: 40px;
  }
</style>