<template>
  <div class="footer">
    <h3 v-if="!isMobile">©2023  链时代工作室 &nbsp&nbsp&nbsp &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp Developed by vue2</h3>
    <h3 v-else>©2023  链时代工作室</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMobile: false ,
    }
  },
  created() {
    window.addEventListener('resize', this.updateIsMobile);
    this.updateIsMobile();
  },
  methods: {
    updateIsMobile() {
      // 根据窗口大小设置 isMobile 变量
      this.isMobile = window.innerWidth <= 767;
    }
  },
  beforeDestroy() {
    // 在组件销毁前移除窗口大小变化的监听器
    window.removeEventListener('resize', this.updateIsMobile);
  }
}
</script>

<style>

</style>