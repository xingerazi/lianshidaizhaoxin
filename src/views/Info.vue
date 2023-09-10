<template>
  <div class="info" style="min-height: 100vh;">
    <div class="p1"><img src="../assets/direct/p6.png" alt=""></div>
    <div class="p2"><img src="../assets/direct/p7.png" alt=""></div>
  <div class="infoPC">
    <el-row>
      <el-col :span="12"
        ><div class="grid-content bg-purple">
          <el-card class="web animate__animated animate__backInDown animate__slow" >
            <div class="details">
              <img
                src="../assets/direct/Blockchain_logo_web.jpg"
                alt=""
                width="100"
                height="100"
              />
              <el-descriptions
                class="margin-top"
                title="区块链&网络"
                :column="1"
                :size="size"
                border
              >
                <el-descriptions-item>
                  <div class="txt">区块链是利用块链式数据结构来验证与存储数据、利用分布式节点共识算法来生成和更新数据、利用密码学的技术保证数据传输和访问控制的安全、利用由自动化脚本代码组成的智能合约来编程和操作数据的一种全新的分布式基础架构与计算范式。<br /><br />
                  计算机网络可以使多台计算机实现连接，位于同一个网络中的计算机在进行连接和通信时候需要遵守一定的规则，这就好比在道路中行驶的汽车一定要遵守交通规则一样。在计算机网络中，这些连接和通信的规则被称为网络通信协议，它对数据的传输格式、传输速率、传输步骤等做了统一的规定，通信双方必须同时遵守才能完成数据的交换。</div>
                  <el-button
                    icon="el-icon-search"
                    type="primary"
                    plain
                    @click="dialogTableVisible1 = true"
                    >学习路线</el-button
                  >
                  <el-dialog
                    title="区块链&网络学习路线"
                    :visible.sync="dialogTableVisible1"
                    :modal="false"
                    :append-to-body="true"
                  >
                  <h1 id="-">学习先导</h1>
                  <p>从2008年的比特币由中本聪提出开始，虚拟货币和区块链的概念逐渐的爆火起来。在了解区块链之前必然是要了解一下什么是比特币，甚至是各种虚拟货币（毕竟区块链技术大多发源于，应用于此），由此，让我们打开区块链的学习之路。</p>
                  <p>友情提示</p>
                  <p>习主席教导我们，天上不会掉馅饼，请不要挖矿操作，不然食堂天天白米饭。</p>
                  <h1 id="-">学习路线</h1>
                  <h3 id="-">基础部分</h3>
                  <h5 id="1-">1.虚拟货币</h5>
                  <p>了解区块链之前，可以先了解一下什么是虚拟货币，去相关的网站，比如比特币，泰达币，以太币等网站上去了解一下（但是不要炒币！！！），然后主要是了解一下底层原理，了解区块链技术是什么，里面涉及什么东西，能应用在哪里。</p>
                  <h5 id="2-">2.基础知识</h5>
                  <p>了解这些之后，对于区块链的技术有相关的了解了吧，那让我们正式了解一下区块链里面具有哪些底层知识，建议阅读</p>
                  <p>（见附录图书）</p>
                  <p>1.区块链基础知识25讲（区块链不难懂！25个小知识看懂中本聪发明全过程！了解区块链的底层运行逻辑！无需计算机科学、数学、程序设计、密码学知... (z-lib.org)</p>
                  <p>2.图说区块链（区块链本可以如此通俗易懂，是之前的解释太复杂了！） (徐明星，田颖，李霁月) (z-lib.org)  第一、二章，第四章作为应用发展大概了解</p>
                  <h5 id="3-">3.区块链安全</h5>
                  <p>区块链安全是近几年来非常热门的话题，也是之后在竞赛中非常重要的一个道路，其中密码学尤为重要。</p>
                  <p>建议阅读</p>
                  <p>（见附录图书）</p>
                  <p>3.区块链安全技术指南  </p>
                  <p>4.图解密码技术 第三版 五章5.4，九章9.1到9.6，十章10.1到10.4，10.6，13章15章</p>
                  <p>了解完区块链的基础概念后，也许你已经建立了相关的知识体系。</p>
                  <p>但是或许你会有一个疑问，咋全是概念，区块链难道没有落地实现的内容嘛。</p>
                  <p>并不是，所谓基础不牢地动山摇，只有了解过基础原理后才能更好的理解复杂的落地应用（同时为了防止你们逃跑，哎嘿嘿嘿）</p>
                  <p>接下来是俩个不同的区块链平台（也代表着不同类别的链），建议大家二选一。</p>
                  <h3 id="ethereum-">Ethereum 以太坊（公有链）（选学）</h3>
                  <p>以太网官网</p>
                  <p><a href="https://www.ethereum.org/">Ethereum</a><br>
                  <a href="https://link.zhihu.com/?target=https%3A//github.com/ethereum">ethereu-GitHub</a><br>
                  <a href="https://link.zhihu.com/?target=http%3A//wiki.jikexueyuan.com/project/ethereum/">极客学院版-中文文档</a></p><br>
                  <p>以太坊白皮书</p>
                  <p><a href="https://link.zhihu.com/?target=https%3A//ethfans.org/wikis/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%99%BD%E7%9A%AE%E4%B9%A6">中文版</a><br>
                  <a href="https://link.zhihu.com/?target=https%3A//github.com/ethereum/wiki/wiki/White-Paper">英文原版白皮书</a></p><br>
                  <p>Solidity 语言</p>
                  <p><a href="https://link.zhihu.com/?target=https%3A//solidity.readthedocs.io/en/develop/">官网</a><br>
                  <a href="https://link.zhihu.com/?target=http%3A//wiki.jikexueyuan.com/project/solidity-zh/">中文版</a></p><br>
                  <p>推荐阅读：</p>
                  <p>《Solidity编程：构建以太坊和区块链智能合约的初学者指南 》</p>
                  <h3 id="hyperledger-">Hyperledger 超级账本（联盟链） （必学）</h3>
                  <p>官网：<a href="http://www.hyperledger.org/">http://www.hyperledger.org/</a></p>
                  <p>基础go语言</p>
                  <p><a href="https://huaweicloud.csdn.net/63aab654b878a54545947c8f.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzA1NzM3LCJleHAiOjE2OTMyMjExNjMsImlhdCI6MTY5MjYxNjM2MywidXNlcm5hbWUiOiJxcV83MzYyODQ5OSJ9.Y9SaY4PvB2IokXGXbXUxeVLhjkSEMwksa-Zl3xLNGIM">go</a></p><br>
                  <p>Fabric 学习</p>
                  <p><a href="https://link.zhihu.com/?target=https%3A//github.com/yeasy/hyperledger_code_fabric">源码</a><br>
                  <a href="https://link.zhihu.com/?，出现的是上传存储从dtarget=https%3A//blog.csdn.net/zhaoliang1131/article/details/54896276">安装和部署</a><br>
                  <a href="https://link.zhihu.com/?target=https%3A//github.com/hyperledger-archives/fabric/blob/master/docs/protocol-spec_zh.md">中文文档</a><br>
                  <a href="https://link.zhihu.com/?target=http%3A//www.8btc.com/hyperledger-fabric1-0">Fabric</a></p>
                  <p>推荐阅读：</p>
                  <p>《Hyperledger Fabric菜鸟进阶攻略 》</p>
                  <p> （注意版本安装的问题，里面的教程和代码不一定是完全对的，也不一定是完全永久的）</p>

                  </el-dialog>
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
          <el-card class="java animate__animated animate__backInUp animate__slow">
            <div class="details">
              <img
                src="../assets/direct/machine.png"
                alt=""
                width="100"
                height="100"
              />
              <el-descriptions
                class="margin-top"
                title="机器学习"
                :column="1"
                :size="size"
                border
              >
                <el-descriptions-item>
                  <div class="txt"> 机器学习是人工智能和计算机科学的分支，专注于使用数据和算法来模仿人类学习的方式，逐渐提高其准确性。机器学习是不断成长的数据科学领域的重要组成部分。
                  通过使用统计方法，对算法进行训练，以进行分类或预测，揭示数据挖掘项目中的关键洞察。
                  然后，这些洞察可推动应用和业务中的决策，有效影响关键增长指标。</div>
                  <el-button
                    icon="el-icon-search"
                    type="primary"
                    plain
                    @click="dialogTableVisible2 = true"
                    >学习路线</el-button
                  >
                  <el-dialog
                    title="机器学习路线"
                    :visible.sync="dialogTableVisible2"
                    :modal="false"
                    :append-to-body="true"
                  >
                  </el-dialog>
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card></div
      ></el-col>

      <el-col :span="12"
        ><div class="grid-content bg-purple-light">
          <el-card class="machine animate__animated animate__backInDown animate__slow">
            <div class="details">
              <img
                src="../assets/direct/js.jpg"
                alt=""
                width="100"
                height="100"
              />
              <el-descriptions
                class="margin-top"
                title="前端"
                :column="1"
                :size="size"
                border
              >
                <el-descriptions-item>
                  <div class="txt">前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，最新的高级版本HTML5、CSS3，以及SVG等。前端的发展是互联网自身发展的一个缩影。前端技术指通过浏览器到用户端计算机的统称，存贮于服务器端的统称为后端技术。前端开发主要职能就是把网站的界面更好地呈现给用户。</div>
                  <el-button
                    icon="el-icon-search"
                    type="primary"
                    plain
                    @click="dialogTableVisible3 = true"
                    style="margin-top: 90px;"
                    >学习路线</el-button
                  >
                  <el-dialog
                    title="前端学习路线"
                    :visible.sync="dialogTableVisible3"
                    :modal="false"
                    :append-to-body="true"
                  >
                  <p>在接下来一个月的招新时间内，同学们可以根据以下顺序来学习前端的内容</p>
                  <ol>
                  <li><p>HTML（超文本标记语言）
                  HTML是一种用于描述网页结构的标记语言。它由一系列的元素组成，每个元素都有特定的含义和功能。HTML提供了丰富的标签，用于定义文本、图像、链接、表格等元素，从而构建页面的结构和内容</p>
                  </li>
                  <li><p>CSS（层叠样式表）
                  CSS用于描述网页的样式和布局。它通过选择器和属性来选择HTML元素并定义其外观。CSS可以控制文本的字体、颜色、大小，以及元素的位置、边距、背景等。它提供了强大的样式控制能力，使得开发者可以灵活地设计和美化网页</p>
                  </li>
                  <li><p>JavaScript
                  JavaScript是一种脚本语言，用于实现Web页面的交互功能和动态效果。它可以在浏览器中直接执行，与HTML和CSS配合使用，实现页面的动态更新、表单验证、事件响应等功能。JavaScript具有广泛的应用领域，包括数据处理、动画效果、AJAX等</p>
                  </li>
                  </ol>
                  <h5 id="-">关于学习资料</h5>
                  <ul>
                  <li><p><strong>b站大学</strong>是同学们在大学四年里必不可少的学习网站，在这里大家可以找到很多优质的视频学习资料，不论是<em>课内 or 课外</em></p>
                  <blockquote>
                  <p>给同学们整理一份学习路线，大家可以有选择性地观看</p>
                  <hr>
                  <h5 id="-html">Ⅰ 超文本标记语言 HTML</h5>
                  <ol>
                  <li>HTML 基础知识学习 
                  HTML 全套基础教程: <a href="https://www.bilibili.com/video/BV11t411K74Q" target="_blank">https://www.bilibili.com/video/BV11t411K74Q</a></li>
                  <li>HTML 编写规则和语义化写法 
                  HTML 速成: <a href="https://www.bilibili.com/video/BV1vs411M7aT" target="_blank">https://www.bilibili.com/video/BV1vs411M7aT</a></li>
                  <li>表单和验证
                  htmI5 表单验证: <a href="https://www.bilibili.com/video/BV16K4y1Z7Gb" target="_blank">https://www.bilibili.com/video/BV16K4y1Z7Gb</a></li>
                  <li>公约和最佳实践方法 —— 熟练
                  前端代码规范秘籍: <a href="https://www.bilibili.com/video/BV19P4y147Jz" target="_blank">https://www.bilibili.com/video/BV19P4y147Jz</a></li>
                  </ol>
                  <hr>
                  <h5 id="-css">Ⅱ 层叠样式表 CSS</h5>
                  <ol>
                  <li><p>CSS 基础知识学习</p>
                  <p>CSS3 基础教程: <a href="https://www.bilibili.com/video/BV1Bx411u7cS" target="_blank">https://www.bilibili.com/video/BV1Bx411u7cS</a>
                  CSS3 全套教程: <a href="https://www.bilibili.com/video/BV1et411q74F" target="_blank">https://www.bilibili.com/video/BV1et411q74F</a></p>
                  </li>
                  <li><p>页面切图和布局实现</p>
                  <ul>
                  <li><p>浮动布局
                  浮动布局: <a href="https://www.bilibili.com/video/BV1Zs411j7Z3" target="_blank">https://www.bilibili.com/video/BV1Zs411j7Z3</a></p>
                  </li>
                  <li><p>定位布局
                  CSS 定位布局: <a href="https://www.bilibili.com/video/BV1ni4y1g7tc" target="_blank">https://www.bilibili.com/video/BV1ni4y1g7tc</a></p>
                  </li>
                  <li><p>Display</p>
                  <p>display &amp; visibility : <a href="https://www.bilibili.com/video/BV1HJ411M7CM" target="_blank">https://www.bilibili.com/video/BV1HJ411M7CM</a></p>
                  </li>
                  <li><p>盒子模型
                  CSS 盒子模型与定位: <a href="https://www.bilibili.com/video/BV1P7411G7BW" target="_blank">https://www.bilibili.com/video/BV1P7411G7BW</a></p>
                  </li>
                  <li><p>Grid 布局
                  如何用 grid: <a href="https://www.bilibili.com/video/BV14C4y1W7oA" target="_blank">https://www.bilibili.com/video/BV14C4y1W7oA</a></p>
                  </li>
                  <li><p>Flex 布局
                  Flex 伸缩布局: <a href="https://www.bilibili.com/video/BV1BJ41197XE" target="_blank">https://www.bilibili.com/video/BV1BJ41197XE</a></p>
                  </li>
                  </ul>
                  </li>
                  <li><p>页面响应式布局设计</p>
                  <p>六个案例学会响应式布局: <a href="https://www.bilibili.com/video/BV1ov411k7sm" target="_blank">https://www.bilibili.com/video/BV1ov411k7sm</a></p>
                  </li>
                  </ol>
                  <hr>
                  <h5 id="-javascript">Ⅲ 浏览器脚本语言 JavaScript</h5>
                  <ol>
                  <li>JavaScript 基础语法和知识
                  JavaScript 基础语法: <a href="https://www.bilibili.com/video/BV1Sy4y1C7ha" target="_blank">https://www.bilibili.com/video/BV1Sy4y1C7ha</a></li>
                  <li>使用 JavaScript 操作 DOM 元素
                  JS 必会的 DOM BOM 操作: <a href="https://www.bilibili.com/video/BV1k4411w7sV" target="_blank">https://www.bilibili.com/video/BV1k4411w7sV</a></li>
                  <li>Ajax 异步请求相关知识学习
                  Ajax 入门到精通: <a href="https://www.bilibili.com/video/BV1WC4y1b78y" target="_blank">https://www.bilibili.com/video/BV1WC4y1b78y</a></li>
                  <li>ES6 以上版本的 JavaScript
                  ES6 - ES11 新特性: <a href="https://www.bilibili.com/video/BV1uK411H7on" target="_blank">https://www.bilibili.com/video/BV1uK411H7on</a></li>
                  </ol>
                  </blockquote>
                  </li>
                  <li><p>自学能力很强的同学推荐以下网站进行自学，<strong>文档学习</strong>比视频资料速度要快很多，但会有些枯燥</p>
                  <ul>
                  <li>菜鸟教程</li>
                  <li>MDN</li>
                  <li>w3school</li>
                  </ul>
                  </li>
                  </ul>
                  <h5 id="-">关于学习建议</h5>
                  <ul>
                  <li>学习笔记是不必要但推荐做的，整理好学习笔记可以在将来再次用到的时候快速找到所需内容，避免浪费时间<ul>
                  <li>建议同学们做笔记使用 Markdown 语法，这是一种非常简单易学的语法，你可以在短短几分钟内了解它，并用它记录出格式公正规范的笔记</li>
                  <li>同时推荐的笔记软件 Typora ，所见即所得</li>
                  </ul>
                  </li>
                  <li>书写代码规范，注释清晰，这在以后的团队合作中非常重要</li>
                  <li>以下所有招新题目同学们都量力而行即可，即使没有成功做出来也是没有问题的，我们也会根据同学们的完成度和态度进行打分和评判</li>
                  <li>在学习中遇到任何问题都可以咨询学长学姐，与大学生活有关的问题也可以进行询问哦</li>
                  </ul>
                  <h5 id="-">关于提交方式</h5>
                  <p>将所有要上传的文件，打包成<strong>压缩包</strong>，命名为<strong>前端招新-学号-姓名</strong>，发送至邮箱1015077557@qq.com</p>
                  </el-dialog>
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
          <el-card class="chain animate__animated animate__backInUp animate__slow">
            <div class="details">
              <img
                src="../assets/direct/java.jpg"
                alt=""
                width="100"
                height="100"
              />
              <el-descriptions
                class="margin-top"
                title="后端"
                :column="1"
                :size="size"
                border
              >
                <el-descriptions-item>        
                  <div class="txt">后端开发，是创建完整可运行的Web应用服务端程序（服务端程序和资源合称为后端，即在服务器上运行的、不涉及用户界面的部分）的过程，是Web应用程序开发的一部分。后端开发者使用Java、Golang等语言及其衍生的各种框架、库和解决方案来实现Web应用程序的核心业务逻辑，并向外提供特定的API，使得Web应用能够高效、安全、稳定地运行。</div>
                  <el-button
                    icon="el-icon-search"
                    type="primary"
                    plain
                    @click="dialogTableVisible4 = true"
                    >学习路线</el-button
                  >
                  <el-dialog
                    title="后端学习路线"
                    :visible.sync="dialogTableVisible4"
                    :modal="false"
                    :append-to-body="true"
                  >
                  </el-dialog>
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
  <div class="infoMobile" style="display: none;">
        <div class="grid-content bg-purple">
          <el-card class="web animate__animated animate__backInDown animate__slow" >
            <div class="details">
              <img
                src="../assets/direct/Blockchain_logo_web.jpg"
                alt=""
                width="100"
                height="100"
              />
              <el-descriptions
                class="margin-top"
                title="区块链&网络"
                :column="1"
                :size="size"
                border
              >
                <el-descriptions-item>
                  <div class="txt">区块链是利用块链式数据结构来验证与存储数据、利用分布式节点共识算法来生成和更新数据、利用密码学的技术保证数据传输和访问控制的安全、利用由自动化脚本代码组成的智能合约来编程和操作数据的一种全新的分布式基础架构与计算范式。<br /><br />
                  计算机网络可以使多台计算机实现连接，位于同一个网络中的计算机在进行连接和通信时候需要遵守一定的规则，这就好比在道路中行驶的汽车一定要遵守交通规则一样。在计算机网络中，这些连接和通信的规则被称为网络通信协议，它对数据的传输格式、传输速率、传输步骤等做了统一的规定，通信双方必须同时遵守才能完成数据的交换。</div>
                  <el-button
                    icon="el-icon-search"
                    type="primary"
                    plain
                    @click="dialogTableVisible1 = true"
                    >学习路线</el-button
                  >
                  <el-dialog
                    title="区块链&网络学习路线"
                    :visible.sync="dialogTableVisible1"
                    :modal="false"
                    :append-to-body="true"
                  >
                  <h1 id="-">学习先导</h1>
                  <p>从2008年的比特币由中本聪提出开始，虚拟货币和区块链的概念逐渐的爆火起来。在了解区块链之前必然是要了解一下什么是比特币，甚至是各种虚拟货币（毕竟区块链技术大多发源于，应用于此），由此，让我们打开区块链的学习之路。</p>
                  <p>友情提示</p>
                  <p>习主席教导我们，天上不会掉馅饼，请不要挖矿操作，不然食堂天天白米饭。</p>
                  <h1 id="-">学习路线</h1>
                  <h3 id="-">基础部分</h3>
                  <h5 id="1-">1.虚拟货币</h5>
                  <p>了解区块链之前，可以先了解一下什么是虚拟货币，去相关的网站，比如比特币，泰达币，以太币等网站上去了解一下（但是不要炒币！！！），然后主要是了解一下底层原理，了解区块链技术是什么，里面涉及什么东西，能应用在哪里。</p>
                  <h5 id="2-">2.基础知识</h5>
                  <p>了解这些之后，对于区块链的技术有相关的了解了吧，那让我们正式了解一下区块链里面具有哪些底层知识，建议阅读</p>
                  <p>（见附录图书）</p>
                  <p>1.区块链基础知识25讲（区块链不难懂！25个小知识看懂中本聪发明全过程！了解区块链的底层运行逻辑！无需计算机科学、数学、程序设计、密码学知... (z-lib.org)</p>
                  <p>2.图说区块链（区块链本可以如此通俗易懂，是之前的解释太复杂了！） (徐明星，田颖，李霁月) (z-lib.org)  第一、二章，第四章作为应用发展大概了解</p>
                  <h5 id="3-">3.区块链安全</h5>
                  <p>区块链安全是近几年来非常热门的话题，也是之后在竞赛中非常重要的一个道路，其中密码学尤为重要。</p>
                  <p>建议阅读</p>
                  <p>（见附录图书）</p>
                  <p>3.区块链安全技术指南  </p>
                  <p>4.图解密码技术 第三版 五章5.4，九章9.1到9.6，十章10.1到10.4，10.6，13章15章</p>
                  <p>了解完区块链的基础概念后，也许你已经建立了相关的知识体系。</p>
                  <p>但是或许你会有一个疑问，咋全是概念，区块链难道没有落地实现的内容嘛。</p>
                  <p>并不是，所谓基础不牢地动山摇，只有了解过基础原理后才能更好的理解复杂的落地应用（同时为了防止你们逃跑，哎嘿嘿嘿）</p>
                  <p>接下来是俩个不同的区块链平台（也代表着不同类别的链），建议大家二选一。</p>
                  <h3 id="ethereum-">Ethereum 以太坊（公有链）（选学）</h3>
                  <p>以太网官网</p>
                  <p><a href="https://www.ethereum.org/">Ethereum</a><br>
                  <a href="https://link.zhihu.com/?target=https%3A//github.com/ethereum">ethereu-GitHub</a><br>
                  <a href="https://link.zhihu.com/?target=http%3A//wiki.jikexueyuan.com/project/ethereum/">极客学院版-中文文档</a></p><br>
                  <p>以太坊白皮书</p>
                  <p><a href="https://link.zhihu.com/?target=https%3A//ethfans.org/wikis/%E4%BB%A5%E5%A4%AA%E5%9D%8A%E7%99%BD%E7%9A%AE%E4%B9%A6">中文版</a><br>
                  <a href="https://link.zhihu.com/?target=https%3A//github.com/ethereum/wiki/wiki/White-Paper">英文原版白皮书</a></p><br>
                  <p>Solidity 语言</p>
                  <p><a href="https://link.zhihu.com/?target=https%3A//solidity.readthedocs.io/en/develop/">官网</a><br>
                  <a href="https://link.zhihu.com/?target=http%3A//wiki.jikexueyuan.com/project/solidity-zh/">中文版</a></p><br>
                  <p>推荐阅读：</p>
                  <p>《Solidity编程：构建以太坊和区块链智能合约的初学者指南 》</p>
                  <h3 id="hyperledger-">Hyperledger 超级账本（联盟链） （必学）</h3>
                  <p>官网：<a href="http://www.hyperledger.org/">http://www.hyperledger.org/</a></p>
                  <p>基础go语言</p>
                  <p><a href="https://huaweicloud.csdn.net/63aab654b878a54545947c8f.html?dp_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MzA1NzM3LCJleHAiOjE2OTMyMjExNjMsImlhdCI6MTY5MjYxNjM2MywidXNlcm5hbWUiOiJxcV83MzYyODQ5OSJ9.Y9SaY4PvB2IokXGXbXUxeVLhjkSEMwksa-Zl3xLNGIM">go</a></p><br>
                  <p>Fabric 学习</p>
                  <p><a href="https://link.zhihu.com/?target=https%3A//github.com/yeasy/hyperledger_code_fabric">源码</a><br>
                  <a href="https://link.zhihu.com/?，出现的是上传存储从dtarget=https%3A//blog.csdn.net/zhaoliang1131/article/details/54896276">安装和部署</a><br>
                  <a href="https://link.zhihu.com/?target=https%3A//github.com/hyperledger-archives/fabric/blob/master/docs/protocol-spec_zh.md">中文文档</a><br>
                  <a href="https://link.zhihu.com/?target=http%3A//www.8btc.com/hyperledger-fabric1-0">Fabric</a></p>
                  <p>推荐阅读：</p>
                  <p>《Hyperledger Fabric菜鸟进阶攻略 》</p>
                  <p> （注意版本安装的问题，里面的教程和代码不一定是完全对的，也不一定是完全永久的）</p>

                  </el-dialog>
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
        </div>
        <div class="grid-content bg-purple">
          <el-card class="java animate__animated animate__backInUp animate__slow">
            <div class="details">
              <img
                src="../assets/direct/machine.png"
                alt=""
                width="100"
                height="100"
              />
              <el-descriptions
                class="margin-top"
                title="机器学习"
                :column="1"
                :size="size"
                border
              >
                <el-descriptions-item>
                  <div class="txt"> 机器学习是人工智能和计算机科学的分支，专注于使用数据和算法来模仿人类学习的方式，逐渐提高其准确性。机器学习是不断成长的数据科学领域的重要组成部分。
                  通过使用统计方法，对算法进行训练，以进行分类或预测，揭示数据挖掘项目中的关键洞察。
                  然后，这些洞察可推动应用和业务中的决策，有效影响关键增长指标。</div>
                  <el-button
                    icon="el-icon-search"
                    type="primary"
                    plain
                    @click="dialogTableVisible2 = true"
                    >学习路线</el-button
                  >
                  <el-dialog
                    title="机器学习路线"
                    :visible.sync="dialogTableVisible2"
                    :modal="false"
                    :append-to-body="true"
                  >
                  </el-dialog>
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
        </div>
        <div class="grid-content bg-purple-light">
            <el-card class="machine animate__animated animate__backInDown animate__slow">
              <div class="details">
                <img
                  src="../assets/direct/js.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <el-descriptions
                  class="margin-top"
                  title="前端"
                  :column="1"
                  :size="size"
                  border
                >
                  <el-descriptions-item>
                    <div class="txt">前端技术一般分为前端设计和前端开发，前端设计一般可以理解为网站的视觉设计，前端开发则是网站的前台代码实现，包括基本的HTML和CSS以及JavaScript/ajax，最新的高级版本HTML5、CSS3，以及SVG等。前端的发展是互联网自身发展的一个缩影。前端技术指通过浏览器到用户端计算机的统称，存贮于服务器端的统称为后端技术。前端开发主要职能就是把网站的界面更好地呈现给用户。</div>
                    <el-button
                      icon="el-icon-search"
                      type="primary"
                      plain
                      @click="dialogTableVisible3 = true"
                      style="margin-top: 90px;"
                      >学习路线</el-button
                    >
                    <el-dialog
                      title="前端学习路线"
                      :visible.sync="dialogTableVisible3"
                      :modal="false"
                      :append-to-body="true"
                    >
                    <p>在接下来一个月的招新时间内，同学们可以根据以下顺序来学习前端的内容</p>
                    <ol>
                    <li><p>HTML（超文本标记语言）
                    HTML是一种用于描述网页结构的标记语言。它由一系列的元素组成，每个元素都有特定的含义和功能。HTML提供了丰富的标签，用于定义文本、图像、链接、表格等元素，从而构建页面的结构和内容</p>
                    </li>
                    <li><p>CSS（层叠样式表）
                    CSS用于描述网页的样式和布局。它通过选择器和属性来选择HTML元素并定义其外观。CSS可以控制文本的字体、颜色、大小，以及元素的位置、边距、背景等。它提供了强大的样式控制能力，使得开发者可以灵活地设计和美化网页</p>
                    </li>
                    <li><p>JavaScript
                    JavaScript是一种脚本语言，用于实现Web页面的交互功能和动态效果。它可以在浏览器中直接执行，与HTML和CSS配合使用，实现页面的动态更新、表单验证、事件响应等功能。JavaScript具有广泛的应用领域，包括数据处理、动画效果、AJAX等</p>
                    </li>
                    </ol>
                    <h5 id="-">关于学习资料</h5>
                    <ul>
                    <li><p><strong>b站大学</strong>是同学们在大学四年里必不可少的学习网站，在这里大家可以找到很多优质的视频学习资料，不论是<em>课内 or 课外</em></p>
                    <blockquote>
                    <p>给同学们整理一份学习路线，大家可以有选择性地观看</p>
                    <hr>
                    <h5 id="-html">Ⅰ 超文本标记语言 HTML</h5>
                    <ol>
                    <li>HTML 基础知识学习 
                    HTML 全套基础教程: <a href="https://www.bilibili.com/video/BV11t411K74Q" target="_blank">https://www.bilibili.com/video/BV11t411K74Q</a></li>
                    <li>HTML 编写规则和语义化写法 
                    HTML 速成: <a href="https://www.bilibili.com/video/BV1vs411M7aT" target="_blank">https://www.bilibili.com/video/BV1vs411M7aT</a></li>
                    <li>表单和验证
                    htmI5 表单验证: <a href="https://www.bilibili.com/video/BV16K4y1Z7Gb" target="_blank">https://www.bilibili.com/video/BV16K4y1Z7Gb</a></li>
                    <li>公约和最佳实践方法 —— 熟练
                    前端代码规范秘籍: <a href="https://www.bilibili.com/video/BV19P4y147Jz" target="_blank">https://www.bilibili.com/video/BV19P4y147Jz</a></li>
                    </ol>
                    <hr>
                    <h5 id="-css">Ⅱ 层叠样式表 CSS</h5>
                    <ol>
                    <li><p>CSS 基础知识学习</p>
                    <p>CSS3 基础教程: <a href="https://www.bilibili.com/video/BV1Bx411u7cS" target="_blank">https://www.bilibili.com/video/BV1Bx411u7cS</a>
                    CSS3 全套教程: <a href="https://www.bilibili.com/video/BV1et411q74F" target="_blank">https://www.bilibili.com/video/BV1et411q74F</a></p>
                    </li>
                    <li><p>页面切图和布局实现</p>
                    <ul>
                    <li><p>浮动布局
                    浮动布局: <a href="https://www.bilibili.com/video/BV1Zs411j7Z3" target="_blank">https://www.bilibili.com/video/BV1Zs411j7Z3</a></p>
                    </li>
                    <li><p>定位布局
                    CSS 定位布局: <a href="https://www.bilibili.com/video/BV1ni4y1g7tc" target="_blank">https://www.bilibili.com/video/BV1ni4y1g7tc</a></p>
                    </li>
                    <li><p>Display</p>
                    <p>display &amp; visibility : <a href="https://www.bilibili.com/video/BV1HJ411M7CM" target="_blank">https://www.bilibili.com/video/BV1HJ411M7CM</a></p>
                    </li>
                    <li><p>盒子模型
                    CSS 盒子模型与定位: <a href="https://www.bilibili.com/video/BV1P7411G7BW" target="_blank">https://www.bilibili.com/video/BV1P7411G7BW</a></p>
                    </li>
                    <li><p>Grid 布局
                    如何用 grid: <a href="https://www.bilibili.com/video/BV14C4y1W7oA" target="_blank">https://www.bilibili.com/video/BV14C4y1W7oA</a></p>
                    </li>
                    <li><p>Flex 布局
                    Flex 伸缩布局: <a href="https://www.bilibili.com/video/BV1BJ41197XE" target="_blank">https://www.bilibili.com/video/BV1BJ41197XE</a></p>
                    </li>
                    </ul>
                    </li>
                    <li><p>页面响应式布局设计</p>
                    <p>六个案例学会响应式布局: <a href="https://www.bilibili.com/video/BV1ov411k7sm" target="_blank">https://www.bilibili.com/video/BV1ov411k7sm</a></p>
                    </li>
                    </ol>
                    <hr>
                    <h5 id="-javascript">Ⅲ 浏览器脚本语言 JavaScript</h5>
                    <ol>
                    <li>JavaScript 基础语法和知识
                    JavaScript 基础语法: <a href="https://www.bilibili.com/video/BV1Sy4y1C7ha" target="_blank">https://www.bilibili.com/video/BV1Sy4y1C7ha</a></li>
                    <li>使用 JavaScript 操作 DOM 元素
                    JS 必会的 DOM BOM 操作: <a href="https://www.bilibili.com/video/BV1k4411w7sV" target="_blank">https://www.bilibili.com/video/BV1k4411w7sV</a></li>
                    <li>Ajax 异步请求相关知识学习
                    Ajax 入门到精通: <a href="https://www.bilibili.com/video/BV1WC4y1b78y" target="_blank">https://www.bilibili.com/video/BV1WC4y1b78y</a></li>
                    <li>ES6 以上版本的 JavaScript
                    ES6 - ES11 新特性: <a href="https://www.bilibili.com/video/BV1uK411H7on" target="_blank">https://www.bilibili.com/video/BV1uK411H7on</a></li>
                    </ol>
                    </blockquote>
                    </li>
                    <li><p>自学能力很强的同学推荐以下网站进行自学，<strong>文档学习</strong>比视频资料速度要快很多，但会有些枯燥</p>
                    <ul>
                    <li>菜鸟教程</li>
                    <li>MDN</li>
                    <li>w3school</li>
                    </ul>
                    </li>
                    </ul>
                    <h5 id="-">关于学习建议</h5>
                    <ul>
                    <li>学习笔记是不必要但推荐做的，整理好学习笔记可以在将来再次用到的时候快速找到所需内容，避免浪费时间<ul>
                    <li>建议同学们做笔记使用 Markdown 语法，这是一种非常简单易学的语法，你可以在短短几分钟内了解它，并用它记录出格式公正规范的笔记</li>
                    <li>同时推荐的笔记软件 Typora ，所见即所得</li>
                    </ul>
                    </li>
                    <li>书写代码规范，注释清晰，这在以后的团队合作中非常重要</li>
                    <li>以下所有招新题目同学们都量力而行即可，即使没有成功做出来也是没有问题的，我们也会根据同学们的完成度和态度进行打分和评判</li>
                    <li>在学习中遇到任何问题都可以咨询学长学姐，与大学生活有关的问题也可以进行询问哦</li>
                    </ul>
                    <h5 id="-">关于提交方式</h5>
                    <p>将所有要上传的文件，打包成<strong>压缩包</strong>，命名为<strong>前端招新-学号-姓名</strong>，发送至邮箱1015077557@qq.com</p>
                    </el-dialog>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
            </el-card>
        </div>
        <div class="grid-content bg-purple-light">
          <el-card class="chain animate__animated animate__backInUp animate__slow">
              <div class="details">
                <img
                  src="../assets/direct/java.jpg"
                  alt=""
                  width="100"
                  height="100"
                />
                <el-descriptions
                  class="margin-top"
                  title="后端"
                  :column="1"
                  :size="size"
                  border
                >
                  <el-descriptions-item>        
                    <div class="txt">后端开发，是创建完整可运行的Web应用服务端程序（服务端程序和资源合称为后端，即在服务器上运行的、不涉及用户界面的部分）的过程，是Web应用程序开发的一部分。后端开发者使用Java、Golang等语言及其衍生的各种框架、库和解决方案来实现Web应用程序的核心业务逻辑，并向外提供特定的API，使得Web应用能够高效、安全、稳定地运行。</div>
                    <el-button
                      icon="el-icon-search"
                      type="primary"
                      plain
                      @click="dialogTableVisible4 = true"
                      >学习路线</el-button
                    >
                    <el-dialog
                      title="后端学习路线"
                      :visible.sync="dialogTableVisible4"
                      :modal="false"
                      :append-to-body="true"
                    >
                    </el-dialog>
                  </el-descriptions-item>
                </el-descriptions>
              </div>
          </el-card>
        </div>
  </div>
</div>
</template>
  
  <script>
export default {
  data() {
    return {
      size: "medium",
      dialogTableVisible1:false,
      dialogTableVisible2:false,
      dialogTableVisible3:false,
      dialogTableVisible4:false,
    };
  },
};
</script>
  
  <style lang="less" scoped>
img {
  margin-right: 20px;
}

.el-button {
  margin: 10px;
}
.el-row {
  margin: 10px 50px 20px 50px;

  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  padding-top:8% ;
  min-height: 90vh;
  border-radius: 4px;
    .web {
    position: relative;
    margin-bottom:30px ;
    width: 70%;
    left: 20%;
    .details {
      display: flex;
    }
  }
  .java {
    position: relative;
    width: 70%;
    left: 20%;
    top: 30px;
    .details {
      display: flex;
    }
  }
  .machine {
    margin-bottom:30px ;
    position: relative;
    width: 70%;
    left: 5%;

    .details {
      display: flex;
    }
  }
  .chain {
    position: relative;
    width: 70%;
    left: 5%;
    top: 30px;
    .details {
      display: flex;
    }
  }
  }
  .info:not(.el-card){
    width:100%;
    height: 100%;
    background:  linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);;
    background-size: 500% 500%;
    animation:gradientBG 5s ease infinite;
  }
  @keyframes gradientBG{
	    0% {
	    background-position: 0% 50%;
	    }
	    50% {
	        background-position: 100% 50%;
	    }
	    100% {
	        background-position: 0% 50%;
	    }
	}
  .p1, .p2{
  width: 200px;
    height: 200px;
    position: absolute;
    animation-name: move1;
    animation-timing-function: ease-in-out;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    float: right;
    img {
    max-width: 98%;
    height: auto;
  }
}
.p1{
  right: 50px;
    top: 200px;
}
.p2{
  left: 50px;
    top: 400px;
}
@keyframes move1 {
    0% {
        transform: translateY(0px);
        opacity: 0;
    }

    33% {
        opacity: 1;
    }

    66% {
        opacity: 1;
    }

    100% {
        transform: translateY(300px);
        opacity: 0;
    }
}
.txt{
  font-size: 16px;
}
   @media screen and (max-width:768px) {
    .infoPC{
      display: none;
    }
    .infoMobile{
      display: block !important;
      .grid-content{
        margin: 40px ;
      }
      .grid-content:nth-child(1){
        margin-top:0px;
      }
      .grid-content:nth-child(4){
        margin-bottom: 0px;
      }
    }
   }
</style>