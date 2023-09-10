<template>
  <el-card class="questionbox">
    <h2>区块链&网络招新</h2>
    <el-divider></el-divider>
    <h3 style="margin-top: 30px">区块链 基础</h3>
    <br />
    <p><span>注意：</span>招新主要是学习的过程，毕竟区块链是一个比较顶层的东西，更多的是考察同学的思考和阅读学习和思辨能力，所以更多的是通过网站，视频，书记学习后的笔记的书写和部分的动手实践</p>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">1.初识区块链</h3>
      <p>
        第一步，你需要知道什么是区块链？<br />
        可以在相关网站上去具体了解相关的区块链的概念，配合相关的书籍阅读（见附件）
        然后用写出自己的学习笔记，分别写出以下问题。
      </p>
      <div>
        1.用自己的语言解释一下什么是区块链，区块链目前的发展和应用，区块链的模型架构
        <br /><br />
        2.在网上查找，根据应用的范围，区分一下现在区块链有几种链？这些链有什么优缺点，在哪些方面适用，了解一下相关的实际应用
        <br /><br />
        3.查阅资料，具体说明一下区块链和比特币的关系，有何相同和区分，并了解一下跟比特币相关的其他虚拟货币
        <br /><br />
        4.听说过web3吗，听说过元宇宙吗，试试在网上了解一下关于web3的东西（DAO，NFT,DeFi），然后由此了解并整理一下区块链的多种创新应用，请你进行市场调研，能自己说出区块链可能会应用在哪里（最好说出区块链+应用）
      </div>
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">2.进阶提升</h3>
      <h4>分布式核心问题（作为了解即可）</h4>
      <div>
        1.一致性问题，去中心化<br /><br />
        2.挖矿和奖励机制<br /><br />
        3.拜占庭问题和解决方法<br /><br />
      </div>
      <h4>密码学安全和相关技术</h4>
      <div>
        1.哈希算法
        <br /><br />
        2.非对称加密
        <br /><br />
        3.数字签名
        <br /><br />
        4.数字证书
        <br /><br />
        5.二叉树和默克尔树
        <br /><br />
        6.51%算力攻击和双花问题
        <br /><br />
        7.P2P协议
        <br /><br />
      </div>
      <h4>共识算法</h4>
      <div>学习完PoW，POS，PBFT和PoVT共识算法，知道用途</div>
      <h4>网络部分</h4>
      <div>
        1.掌握分布式系统的基本原理
        <br /><br />
        2.掌握点对点网络的基础知识，分清楚B/S，C/S架构同P2P架构的区别
        <br /><br />
        3.了解不同的网络协议，如TCP/IP、HTTP、FTP等。
        <br /><br />
      </div>
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">3.落地实操作</h3>
      <p>
        我们要求收Hyperledger
        Fabric方向，其他不要求，当然我们也鼓励大家学习其他的链的技术，比如以太坊等
      </p>
      <h4>(1)go语言基础</h4>
      1.编写代码统计出字符串 "hello亲爱的王学长"中汉字的数量。<br /><br />
      2.编写代码打印9\*9乘法表<br /><br />
      3.编写一个代码，输入对任意给定的不超过 10的正整数n，要求输出 2的n次方<br /><br />
      <h4>(2)Fabric基础</h4>
      1.了解Fabric网络中各个节点的含义
      <br /><br />
      2.了解Fabric的交易流程
      <br /><br />
      3.在网上寻找一个fabric链码的简单案例模仿实现，注明各个方法的作用。
      <br /><br />
      <h4>(3)Fabric环境搭建</h4>
      1.自行查找相关资料视频，在Ubuntu虚拟机上部署好fabric测试环境。（需要图片证实）
      <br /><br />
      2.加分项：使用链码实现Helloworld（需要。。提供代码）
      <br /><br />
      <br /><br />
      <b
        >（请在如果遇到有相关的困难，请在笔记中也出遇到什么相关的问题，有什么解决方法）</b
      >
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">4.扩展技术</h3>
      <p>（请先了解什么是公证人机制，以下提到的主从多链网络，主链是基于PBFT共识算法，从链基于PoVT共识算法）</p>
      <p>1.请了解什么是主从多链技术，此技术比单链技术好在哪里？</p>
      <p>2.小卞老师准备设计一个基于公证人机制的主从多链跨链系统来实现数据之间的共享，请你告诉他该如何实现跨链操作？（需要提供大概的搭建流程和主从链节点数量的设置，并解释为何这么做）</p>
      <p>3.多亏了你的帮助，小卞老师成功搭建好了该主从多链网络，请你想想他在设计的过程中可能出现哪些安全问题，你有什么解决方案嘛？（提示，可以从数据安全，区块链安全，通信安全等多个角度进行分析）</p>
      <p>4.请你分析一下，会不会出现跨链交互过程中数据不一致或合约执行不一致的问题？请解释原因</p>
    </el-card>
    <h3 style="margin-top: 30px">区块链 附加</h3>
    <el-card class="question">
      <h4>附加题一 (必做)</h4>
      <p>
        （请先了解什么是公证人机制，以下提到的主从多链网络，主链是基于PBFT共识算法，从链基于PoVT共识算法）
      </p>
      <p>1.请了解什么是主从多链技术，此技术比单链技术好在哪里？</p>
      <p>
        2.小卞老师准备设计一个基于公证人机制的主从多链跨链系统来实现数据之间的共享，请你告诉他该如何实现跨链操作？（需要提供大概的搭建流程和主从链节点数量的设置，并解释为何这么做）
      </p>
      <p>
        3.多亏了你的帮助，小卞老师成功搭建好了该主从多链网络，请你想想他在设计的过程中可能出现哪些安全问题，你有什么解决方案嘛？（提示，可以从数据安全，区块链安全，通信安全等多个角度进行分析）
      </p>
      <p>
        4.请你分析一下，会不会出现跨链交互过程中数据不一致或合约执行不一致的问题？请解释原因
      </p>
      <h4>附加题二</h4>
      <p>
        区块链安全是现在一个热门的话题，尤其是著名的以太坊黑色情人节事件，在大学里面，这几年的CTF比赛中也不断出现区块链相关的题目
      </p>
      <p>
        （最好是大概学过solidity（或者略懂JavaScript的）以太坊的同学了解一下，很多题都是跟智能合约有关的）
      </p>
      <p>1.请在网上了解一下区块链安全都大多在哪里出问题的</p>
      <p><a href="https://www.bilibili.com/video/BV1Xe4y1e7sQ?vd_source=3b7e462fd9e1b1027a41df80700b88c0" style="color: #888;">【CTF】区块链--合约题入门操作 区块链题型简介 水龙头的对比 remixIDE的基本使用 1——NewStarCTF</a></p>
      <p>
        请学习这个CTF区块链入门视频然后大概复述一下流程，有能力可以复现一下操作，
      </p>
      <p>
        3.简单了解一下CTF简单题的操作，如果有能力可以在ctf-wiki.org/blockchain/introdution/上面了解一下相关的情况
      </p>
      <p>
        （注意由于涉及到测试币的问题，请大家不要挖矿，注意电费，最好是找免费零领取的网站）
      </p>
      <p>如果不方便搞测试币，建议部分实操就可或者只进行复述过程操作。</p>
    </el-card>
  </el-card>
</template>
  
  <script>
export default {
  data() {
    return {};
  },
  methods: {
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
    .animal{
    display: block;
    img{
      width: 60%;
    margin-left: 20%;
    height: 300px;
    }
  }
  }

}
</style>