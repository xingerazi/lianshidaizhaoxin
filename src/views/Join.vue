<template>
  <div class="Join">
    <el-form
      ref="joinform"
      :inline="true"
      :model="joinform"
      :rules="joinrules"
      class="login_container"
    >
      <h1>欢迎进入链时代</h1>
      <h3 class="login_title">注册账户</h3>
      <el-form-item label="用户名" prop="username" label-width="75px">
        <el-input
          v-model="joinform.username"
          placeholder="请输入账号"
        ></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password" label-width="75px">
        <el-input
          type="password"
          v-model="joinform.password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="确认密码" prop="checkPass">
        <el-input type="password" v-model="joinform.checkPass"  placeholder="请确认密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="plain" @click="$router.push('/login')">返回</el-button>
        <el-button type="primary" @click="submitit">创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
  
  <script>
import http from "../utils/request";
export default {
  data() {
    var validatePass = (rule, value, callback) => {
 if (value !== this.joinform.password) {
              callback(new Error('两次输入密码不一致!'));
          } else {
              callback();
          }
      };

    return {
      joinform: {
        username: "",
        password: "",
        checkPass: "",
      },
      joinrules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 2,
            max: 10,
            message: "长度在 2 到 10 个字符",
            trigger: "blur",
          },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "长度不得小于六位", trigger: "blur" },
        ],
        checkPass: [
          { required: true, message: "请确认密码", trigger: "blur" },
          { min: 6, message: "长度不得小于六位", trigger: "blur" },
          { validator: validatePass, trigger: 'blur', required: true }
        ],
      },
    };
  },

  methods: {
    submitit() {
      this.$refs.joinform.validate((valid) => {
        if (valid) {
          http
            .post("/users", {
              username: this.joinform.username,
              password: this.joinform.password,
            })
            .then((res) => {{
                if(res.data=="注册成功"){
                  console.log(res);
                  this.$message.success("注册成功");
                  this.$router.push("/login");
                }
                else{
                  console.log(res);
                  this.$message.error("用户名已存在");
                }
              }
            })
            .catch((err) => {
              this.$message.error("系统繁忙");
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
.Join {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(-45deg, #23a6d5, #e73c7e);
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
    width: 190px;
  }
  .el-button {
    margin-left: 60px;
    margin-right: 20px;
  }
}
</style>