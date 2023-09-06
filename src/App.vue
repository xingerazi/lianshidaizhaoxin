<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  name: "App",
  //  created() {
  //   // Cookie.set("token", 'login');
  //   const token = Cookie.get("token");
  //   if (!token && this.$router.path !== "/login") {
  //     this.$router.replace("/login");
  //   } else if (token && this.$router.path !== "/home") {
  //     this.$router.replace("/home");
  //   }
  //   else{
  //     console.log(1);
  //   }
  // },
  mounted() {
    window.addEventListener("beforeunload", (e) => {
      window.scroll(0, 0);
    });
  },
};
</script>

<style>
html,
body,
h3,
p {
  margin: 0;
  padding: 0;
}
</style>
