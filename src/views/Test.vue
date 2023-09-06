<template>
  <div>
    <h1>文件上传</h1>
    <input type="file" ref="fileInput" @change="handleFileChange" />
    <input
      type="text"
      v-model="customHeaderData"
      placeholder="自定义请求头数据"
    />
    <button @click="uploadFile">上传文件</button>
    <a
      ref="downloadLink"
      :href="fileUrl"
      download="c.vue"
      style="display: none"
    ></a>
    <el-button type="primary" @click="downloadFile">下载文件</el-button>
    <a
      href="https://github.com/xingerazi/remote-test/blob/main/2023%E5%90%8E%E7%AB%AF%E6%8B%9B%E6%96%B0.md"
      download="2023后端招新.md"
      >下载</a
    >
    <a
      href="../assets/C.md"
      download="2023后端招新.md"
      >下载Markdown文件</a
    >
    <el-button type="text" icon="el-icon-download" @click="handleDownload"
      >模版下载</el-button
    >
    <a href="../utils/request.js" download="r.js">1111</a>
    <a href="" src="../../public/2023后端招新.md">点击</a>
  </div>
</template>

<script>
import httpsub from "../utils/request2";
export default {
  data() {
    return {
      fileUrl: "../views/Main.vue",
      selectedFile: null,
      customHeaderData: "", // 用户填写的自定义请求头数据
    };
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
        })
        .catch((error) => {
          // 处理上传错误
          console.error("文件上传失败:", error);
        });
    },
    downloadFile() {
      console.log(1);
      const link = this.$refs.downloadLink;
      link.click();
    },
    handleDownload(){
    window.location.href = "../views/Main.vue"
 }
  },
};
</script>