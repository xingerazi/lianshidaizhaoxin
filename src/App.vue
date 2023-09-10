<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Cookie from "js-cookie";
export default {
  name: "App",
  created() {
    // Cookie.set("token", 'login');
    // const token = Cookie.get("token");
    if (this.$route.path !== "/home") {
      this.$router.push("/home");
    }
  },
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
