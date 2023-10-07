<template>
    <el-card class="questionbox">
      <h2>后端招新</h2>
      <el-divider></el-divider>
      <el-card class="question">
        <h3 style="margin-bottom: 30px">1.分配零钱</h3>
        <p>
          <span>题目描述：</span>
          给你一个整数 money ，表示你总共有的钱数（单位为美元）和另一个整数 children ，表示你要将钱分配给多少个儿童。
          你需要按照如下规则分配：
          <ol>
            <li>所有的钱都必须被分配。</li>
            <li>每个儿童至少获得 1 美元。</li>
            <li>没有人获得 4 美元。</li>
          </ol>
        </p>
        <p>
            请你按照上述规则分配金钱，并返回 <span>最多</span> 有多少个儿童获得 <span>恰好</span> 8 美元。如果没有任何分配方案，返回 -1 。
        </p>
        <p>            <span>提示：</span>
            1 <= money <= 200</p>
            <p> <span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>2 <= children <= 30</p>
        <pre>

    示例 1：

    输入：money = 20, children = 3
    输出：1

    解释：
    最多获得 8 美元的儿童数为 1 。
    一种分配方案为：
    - 给第一个儿童分配 8 美元。
    - 给第二个儿童分配 9 美元。
    - 给第三个儿童分配 3 美元。
    没有分配方案能让获得 8 美元的儿童数超过1 

    示例 2：
            
    输入：money = 16, children = 2                       
    输出：2                                              
    解释：每个儿童都可以获得 8 美元。 
                                    
  </pre
        >
      </el-card>
      <el-card class="question">
        <h3 style="margin-bottom: 30px">2. 罗马数字转换为整数  </h3>
        <p>
          <span>题目要求: </span
          >罗马数字中，较小的数字写在在较大的数字右边。
        </p>
        <p>
          <span>特例有三种：</span>
         <p> I 可以放在 V (5) 和 X (10) 的左边，来表示 4 和 9。</p>
         <p> X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 </p> 
         <p> X 可以放在 L (50) 和 C (100) 的左边，来表示 40 和 90。 </p>
        </p>
        <p>
          <span>格式: </span>输入一个罗马数字，将其转换为整数并输出。
        </p>
      </el-card>
      <el-card class="question">
        <h3 style="margin-bottom: 30px">3. 判断括号合法性 </h3>
        <p>
          <span>题目描述: </span
          >输入一段由[],{},()六种括号组成的字符串，通过程序判断该字符串是否合法，即是否每个括号都能找到与之匹配的另一半，输出true或false。  
        </p>

        <pre>
  
      样例输入 #1        
      {[]}

      样例输出 #1 
      true

      样例输入 #2       
      {[{}}]

      样例输出 #2
      false
        </pre>
      </el-card>
      <el-card class="question" style="margin-bottom: 30px">
        <h3 style="margin-bottom: 30px">4. 学生管理系统</h3>
        <p>
          <span>题目描述：</span>以使用到ArrayList数据类型为前提，设计一个简易的学生管理系统。包括“添加学生，删除学生，查询学生，退出”四个功能。
<p><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp要求:&nbsp&nbsp</span>① 学生信息包括id，name，age三个信息  ②如果能将存储的信息持久化存储到文件中，那更加好了。  </p>
        </p>
      </el-card>
      <el-card class="question" style="margin-bottom: 30px">
        <h3 style="margin-bottom: 30px">
          5. 文件的加密和解密
        </h3>
        <p>
          <span>题目描述：</span>
          希望你能用IO的知识对一个已有TXT文件进行加密并写到新的文件中，再对新的文件进行解密并打印文件内容，加密的方法由你自己决定。
        </p>
       
      </el-card>
      <el-card class="question">
        <h3 style="margin-bottom: 30px">6. 打印第十行</h3>
        <p>你可以试着用shell脚本或者所学的编程语言来完成这道题：</p>
        <p> <span>题目描述: </span
          >给定一个文本文件 file.txt，请只打印这个文件中的第十行。</p>
        <pre>

            示例:
            假设 file.txt 有如下内容：
            Line 1
            Line 2
            Line 3
            Line 4
            Line 5
            Line 6
            Line 7
            Line 8
            Line 9
            Line 10

            你的脚本应当显示第十行：
            Line 10
        </pre>
<p><span>说明：</span>1. 如果文件少于十行，你应当输出什么？</p>
<p><span>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</span>2. 至少有三种不同的解法，请尝试尽可能多的方法来解题。</p>

      </el-card>
    </el-card>
  </template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {
    C1() {
      this.$message(
        "1. Pascal 使用 `integer` 会爆掉哦！2. 有负数哦！3. C/C++ 的 main 函数必须是 `int` 类型，而且 C 最后要 `return 0`。"
      );
    },
  },
};
</script>
  
  <style lang="less" scoped>
.questionbox {
  margin-top: 20px;
  width: 70%;
  margin-left: 15%;
  margin-bottom: 20px;
  min-height: 90vh;
  border-radius: 1%;
  p {
    margin-bottom: 20px;
    span {
      font-weight: 800;
    }
  }

  .question {
    margin-top: 30px;
  }

  pre {
    margin-top: 20px;
    background-color: rgb(248, 248, 248);
    border-radius: 2%;
    font-size: 15px;
    font-weight: 550;
    color: #999;
  }
}
@media (max-width: 767px) {
  .questionbox {
    width: auto; /* 在小屏幕上设置宽度为100% */
    margin-left: 0;
    img {
      width: 80%;
      margin-left: 10%;
      height: 200px;
    }
  }
}
</style>