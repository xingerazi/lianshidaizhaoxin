<template>
  <div class="login">
    <el-form
      ref="form"
      :inline="true"
      :model="form"
      :rules="rules"
      class="login_container"
    >
      <h1>欢迎进入链时代</h1>
      <h3 class="login_title">登录</h3>
      <el-form-item label="用户名" prop="username" label-width="70px">
        <el-input v-model="form.username" placeholder="请输入账号"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="70px">
        <el-input
          type="password"
          v-model="form.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="plain" @click="joinin">注册</el-button>
        <el-button type="primary" @click="sumit">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Cookie from "js-cookie";
import http from "../utils/request";
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 100,
            message: "长度在 2 到 100 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度不得小于六位", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    joinin() {
      this.$router.push("/join");
    },
    sumit() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          http
            .post("/users/login", {
              username: this.form.username,
              password: this.form.password,
            })
            .then((res) => {
              {
                if (res.data == "登录成功") {
                  console.log(res);
                  Cookie.set("token", "login1");
                  this.$message.success("登录成功");
                  this.$router.push("/home");
                } else {
                  this.$message.error("用户不存在或密码错误");
                }
              }
            })
            .catch((err) => {
              this.$message.success("系统繁忙");
            });
        } else {
          console.log("校验不通过");
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
html {
  height: 100%;
}
body {
  height: 100%;
}
.login {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #e73c7e, #23a6d5);
  background-size: 100% 100%;
}
.login_container {
  background-color: #fff;
  width: 350px;
  border: 1px solid #eaeaea;
  padding: 30px 70px 30px 70px;
  border-radius: 10px;
  box-shadow: 0 0 10px #000;
  position: relative;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  h1 {
    overflow: hidden;
    padding: 0 62px 0 62px;
    margin-bottom: 30px;
  }
  .login_title {
    text-align: center;
    margin-bottom: 30px;
    color: #505458;
  }

  .el-input {
    width: 250px;
    margin-bottom: 10px;
  }
  .el-button {
    margin-left: 60px;
    margin-right: 20px;
  }
}
@media screen and (max-width: 568px) {
  .login_container {
    width: 85%;
    padding: 0;
    h1{
      text-align: center;
      font-size: 19px;
    }
    .el-form-item {
      margin-left: 7%;
    }
    .el-input{
      width: 70%;
    }
    .el-button{
      margin-left: 30px;
    }
  }
}
</style>