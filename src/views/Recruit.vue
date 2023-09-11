<template>
  <div class="recruit">
    <p class="title">链时代工作室2023招新题目</p>
    <el-divider>beginning</el-divider>
    <div>
      <div v-show="1">
        <el-card
          style="
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
              0 0 6px rgba(0, 0, 0, 0.04);
          "
        >
          <div class="transition-box">
            <p>链时代 基础题目</p>
            <div class="basic-content" style="margin: 20px 0 20px 10px">
              <i class="el-icon-document-remove"> 提交须知</i>
              <div class="intro">
                <p>
                  1.算法题目可以用C语言或C++进行实现，不能使用其他语言。例如python,java等。
                </p>
                <p>
                  2.这一方向是基础方向，每一位同学都要做至少四道以上，剩余尽力即可，即需要完成“基础题”+“方向题”
                </p>
                <p>
                  3.如果遇到自己无法解决的困难或者疑惑可以咨询算法方向负责人😊。
                </p>
                <p>
                  4.算法题目的提交方式:链时代平台赛。比赛链接为:
                  <a href="https://www.luogu.com.cn/contest/130670#description"
                    >点击跳转</a
                  >请自行注册后报名，提交。
                </p>
                <p>5.招新截止时间为：9.12—10.12</p>
              </div>
              <el-button
                style="margin-top: 20px"
                type="primary"
                @click="$router.push('clan')"
                >Read More</el-button
              >
              <el-button
                style="margin-top: 20px"
                type="info"
                @click="downloadMarkdownFilec"
                >题目下载</el-button
              >
            </div>
            <hr />
          </div>
        </el-card>
        <div class="divider"></div>
        <el-card
          style="
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
              0 0 6px rgba(0, 0, 0, 0.04);
          "
        >
          <div class="transition-box">
            <p>链时代 前端题目</p>
            <div class="basic-content" style="margin: 20px 0 20px 10px">
              <i class="el-icon-document-remove"> 提交须知</i>
              <div class="intro">
                <p>
                  1. 提交内容包括：完成前端招新题的所有文件（每题一个文件夹）+
                  你的学习笔记（markdown 文档，如果有在 md
                  文件中插入图片，请把图片也放在一个文件夹内一并提交）
                </p>
                <p>
                  2.
                  提交格式：第一条所有内容打包成压缩包，命名为：链时代前端招新-学号-姓名，添加至附件并发送至邮箱：1015077557@qq.com
                  邮件主题请与压缩包名称相同
                </p>
                <p>
                  3.
                  如果对于招新题或其他有一切问题，可以咨询群内前端学长学姐进行回答，或加QQ1015077557
                  / 2638874938
                </p>
                <p>4.招新题可以多次提交哦，祝大家好运~</p>
                <p>5.招新截止时间为：9.12—10.12</p>
              </div>
              <el-button
                style="margin-top: 20px"
                type="primary"
                @click="$router.push('front')"
                >Read More</el-button
              >
              <el-button
                style="margin-top: 20px"
                type="info"
                @click="downloadMarkdownFilefront"
                >题目下载</el-button
              >
              <el-button
                class="submitbtn"
                style="margin-top: 20px"
                type="primary"
                @click="
                  (sumbitbox = !sumbitbox),
                    (customHeaderData = '1015077557@qq.com')
                "
              >
                招新题提交</el-button
              >
            </div>
            <hr />
          </div>
        </el-card>
        <div class="divider"></div>
        <el-card
          style="
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
              0 0 6px rgba(0, 0, 0, 0.04);
          "
        >
          <div class="transition-box">
            <p>链时代 后端方向</p>
            <div class="basic-content" style="margin: 20px 0 20px 10px">
              <i class="el-icon-document-remove"> 提交须知</i>
              <div class="intro">
                <p>1.招新题可用Java、C++、Go中任一种编程语言实现😎。</p>
                <p>2.招新题的完成情况量力而行。</p>
                <p>
                  3.招新提请以附件的形式提交，打包成压缩文件并命名为“后端-学号-姓名”发到邮箱lxx18912405977@outlook.com，提交次数不限哦。
                </p>
                <p>4.如果有学习笔记之类的请一并放在压缩包中。</p>
                <p>
                  5.有任何问题请加QQ：2356176435，或直接在群里找学长提问😘。
                </p>
                <p>招新截止时间为：9.12—10.12</p>
              </div>
              <el-button
                style="margin-top: 20px"
                type="primary"
                @click="$router.push('java')"
                >Read More</el-button
              >
              <el-button
                style="margin-top: 20px"
                type="info"
                @click="downloadMarkdownFilejava"
                >题目下载</el-button
              >
              <el-button
                style="margin-top: 20px"
                class="submitbtn"
                type="primary"
                @click="
                  (sumbitbox = !sumbitbox),
                    (customHeaderData = 'lxx18912405977@outlook.com')
                "
              >
                招新题提交</el-button
              >
            </div>
            <hr />
          </div>
        </el-card>
        <div class="divider"></div>
        <el-card
          style="
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
              0 0 6px rgba(0, 0, 0, 0.04);
          "
        >
          <div class="transition-box">
            <p>链时代 机器学习方向</p>
            <div class="basic-content" style="margin: 20px 0 20px 10px">
              <i class="el-icon-document-remove"> 提交须知</i>
              <div class="intro">
                <p>
                  1.请使用markdown提交你的笔记和相关的图片，代码。（建议使用Typora）
                </p>
                <p>2.招新题请发至邮箱1256878984@qq.com</p>
                <p>
                  3.招新题请发送附件进行提交，最好整理完全后交压缩包，如果有图片可以将markdown转化为pdf形式，提交格式请将压缩包命名为“姓名+学号+第几次提交”（中间请空格间隔开）
                </p>
                <p>
                  4.如果有任何问题请加qq：3121571886或1401137731，或者直接在招新群中找相关学长学姐
                </p>
                <p>
                  5.招新截止时间为：9.12—10.12,感谢您的支持与配合，机器学习，启动🤩！！
                </p>
              </div>
              <el-button
                style="margin-top: 20px"
                type="primary"
                @click="$router.push('machine')"
                >Read More</el-button
              >
              <el-button
                style="margin-top: 20px"
                type="info"
                @click="downloadMarkdownFileml"
                >题目下载</el-button
              >
              <el-button
                class="submitbtn"
                style="margin-top: 20px"
                type="primary"
                @click="
                  (sumbitbox = !sumbitbox),
                    (customHeaderData = '1256878984@qq.com')
                "
              >
                招新题提交</el-button
              >
            </div>
            <hr />
          </div>
        </el-card>
        <div class="divider"></div>
        <el-card
          style="
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12),
              0 0 6px rgba(0, 0, 0, 0.04);
          "
        >
          <div class="transition-box">
            <p>链时代 区块链方向</p>
            <div class="basic-content" style="margin: 20px 0 20px 10px">
              <i class="el-icon-document-remove"> 提交须知</i>
              <div class="intro">
                <p>
                  1.请使用markdown提交你的笔记和相关的图片，代码。（建议使用Typora，在网上找破解版即可）
                </p>
                <p>2.招新题请发至邮箱1994589823@qq.com</p>
                <p>
                  3.招新题请发送附件进行提交，最好整理完全后交压缩包，如果有图片可以将markdown转化为pdf形式，提交格式请将压缩包命名为“姓名+学号+第几次提交”（中间请空格间隔开）
                </p>
                <p>
                  4.如果有任何问题请加qq：1994589823或2589815532，或者直接在招新群中找相关学长
                </p>
                <p>
                  5.招新截止时间为：9.12—10.12,感谢您的支持与配合，祝好运！！
                </p>
              </div>
              <el-button
                style="margin-top: 20px"
                type="primary"
                @click="$router.push('chain')"
                >Read More</el-button
              >
              <el-button
                style="margin-top: 20px"
                type="info"
                @click="downloadMarkdownFilechain"
                >题目下载</el-button
              >
              <el-button
                class="submitbtn"
                style="margin-top: 20px"
                type="primary"
                @click="
                  (sumbitbox = !sumbitbox),
                    (customHeaderData = '1994589823@qq.com')
                "
              >
                招新题提交</el-button
              >
            </div>
            <hr />
          </div>
        </el-card>
      </div>
    </div>
    <el-divider>end</el-divider>
    <el-dialog
      title="招新题提交"
      :visible.sync="sumbitbox"
      width="25%"
      center
      class="submitit"
    >
      <h1 style="margin-bottom: 30px">文件上传</h1>
      <div style="width: 30%;">
        <input type="file" ref="fileInput" @change="handleFileChange" />
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="sumbitbox = false" style="margin-left: -10px"
          >取 消</el-button
        >
        <el-button
          type="primary"
          @click="uploadFile"
          style="margin-left: 40px"
          >上 传</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
import httpsub from "../utils/request2";
import YZhanWeather from "yzhanweather";
import { saveAs } from "file-saver";
// import http from "../utils/request";
export default {
  data() {
    return {
      sumbitbox: false,

      selectedFile: null,
      customHeaderData: "", // 用户填写的邮箱
    };
  },
  computed: {
    collapse() {
      return this.$store.state.collapse;
    },
  },
  methods: {
    handleFileChange(event) {
      // 处理文件选择事件
      this.selectedFile = event.target.files[0];
    },
    uploadFile() {
      if (!this.selectedFile) {
        return;
      }

      // 创建一个 FormData 对象来包装文件
      const formData = new FormData();
      formData.append("file", this.selectedFile);

      // 动态设置请求头
      //     const headers = {
      //     'X-Custom-Data': this.customHeaderData, // 使用用户填写的数据
      //     'Content-Type': 'multipart', // 设置请求的 Content-Type 为 "multipart"
      //   };

      // 使用 Axios 发送 POST 请求上传文件，并将请求头传递给 Axios 的配置
      httpsub
        .post("/FileUpload", {
          file: this.selectedFile,
          email: this.customHeaderData,
        })
        .then((response) => {
          // 处理成功响应
          console.log("文件上传成功:", response.data);
          this.$message.success("文件上传成功");
        })
        .catch((error) => {
          // 处理上传错误
          console.error("文件上传失败:", error);
          this.$message.error("文件上传失败");
        });
      this.sumbitbox = false;
    },

    //下载
    downloadMarkdownFilec() {
      // 构建Markdown文件的完整URL，假设文件位于public目录下
      const markdownFileUrl = process.env.BASE_URL + "C.md";

      // 使用FileSaver.js下载Markdown文件
      fetch(markdownFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, "C.md");
          this.$message.success("下载成功");
        })
        .catch((error) => {
          this.$message.error("下载失败");
        });
    },
    downloadMarkdownFilefront() {
      // 构建Markdown文件的完整URL，假设文件位于public目录下
      const markdownFileUrl = process.env.BASE_URL + "前端招新.pdf";

      // 使用FileSaver.js下载Markdown文件
      fetch(markdownFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, "前端招新.pdf");
          this.$message.success("下载成功");
        })
        .catch((error) => {
          this.$message.error("下载失败");
        });
    },
    downloadMarkdownFilejava() {
      const markdownFileUrl = process.env.BASE_URL + "Java.md";
      fetch(markdownFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, "Java.md");
          this.$message.success("下载成功");
        })
        .catch((error) => {
          this.$message.error("下载失败");
        });
    },
    downloadMarkdownFileml() {
      const markdownFileUrl = process.env.BASE_URL + "ML.md";
      fetch(markdownFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, "ML.md");
          this.$message.success("下载成功");
        })
        .catch((error) => {
          this.$message.error("下载失败");
        });
    },
    downloadMarkdownFilechain() {
      const markdownFileUrl = process.env.BASE_URL + "Chain.md";
      fetch(markdownFileUrl)
        .then((response) => response.blob())
        .then((blob) => {
          saveAs(blob, "Chain.md");
          this.$message.success("下载成功");
        })
        .catch((error) => {
          this.$message.error("下载失败");
        });
    },
  },
  mounted() {
    const yzhanweather = new YZhanWeather();
    yzhanweather.run("sakura"); // Options: sakura | snow | firefly | rain | butterfly
    yzhanweather.run("sakura", {
      maxDuration: 15, // Default: 10s, this option can determine the speed of animations
    });
    setTimeout(() => {
      yzhanweather.destory(); // Destory the instance and free up memory
    }, 10000);
  },
};
</script>

<style lang="less" scoped>
.recruit {
  margin-top: 2%;
  margin-left: 20%;
  width: 60%;
  // background-color: antiquewhite;
  min-height: 90vh;
  .intro {
    p {
      margin-top: 10px;
    }
  }
  .title {
    font-size: 1.4em;
    color: #2e2e2e;
  }
  padding: 10px;

  .transition-box {
    margin-bottom: 10px;
    width: 90%;
    min-height: 100px;
    border-radius: 4px;
    // background-color: #409EFF;
    // text-align: center;
    // color: #fff;
    padding: 20px 20px;
    box-sizing: border-box;
    margin-right: 20px;
    p {
      font-size: 1.2em;
      color: #2e2e2e;
      border-bottom: 1px solid #eee;
    }
    i {
      color: #344c67;
      font-weight: bold;
    }

    .basic-content {
      p {
        font-size: 1em;
        color: #777;
      }
      .intro {
        margin-top: 15px;
        p {
          font-size: 15px;
          color: #515151;
        }
      }
    }
    hr {
      border: 2px dashed #a4d8fa;
      background: #fff;
    }
  }
  .divider {
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #ccc, transparent);
    animation: pulse 2s infinite;
    margin: 20px 0;
  }

  @keyframes pulse {
    0% {
      background-position: 200%;
    }
    100% {
      background-position: -200%;
    }
  }
  input {
    transition: border-color 0.3s;
    margin-right: 20px;
  }
  input:focus {
    outline: #555; /* 焦点状态下的边框颜色 */
  }
}
@media screen and (max-width: 768px) {
  .recruit {
    margin: 0px;
    width: 100%;
  }
  .submitit {
    width: 80%;
  }
  .submitbtn {
    display: none;
  }
}
</style>