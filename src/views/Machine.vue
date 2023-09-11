<template>
  <el-card class="questionbox">
    <h2>机器学习招新</h2>
    <el-divider></el-divider>
    <p style="color: #999">
      科学领域最好由它所研究的中心问题来界定。机器学习领域试图回答以下问题：
      “我们怎样才能建立一个随着经验而自动改进的计算机系统，而支配所有学习过程的基本法则是什么？🤕
    </p>

    <p><strong>引言(what? how? and why?)</strong></p>
    <p>
      所以什么是机器学习?我想大致如下<strong
        >:“机器学习是让计算机像人类一样学习和行动的科学，通过以观察和现实世界互动的形式向他们提供数据和信息，以<span
          style="background-color: rgb(255, 255, 0)"
        >
          自主</span
        >
        的方式改善它们的学习。”</strong
      >那么机器学习的专家们又如何让这个和人们下意识主关思维不同的想法变为可能呢?大概是从线性,逻辑回归到SVM算法再到重换新生的深度学习,我想通过下面的这些题目,你将有所了解.最后的最后就是why?这大概源于一个个灵感迸发吧.想想看你所接触这么久的数学,物理等等等等,或多或少都具有些许宗教性,些许可知论,但机器学习的学者们,便早早跳出这个思维,我们试着创造不同的机器,使其具备自主改善它们的学习,<span>我们创造自己的“宗教”,我们让机器自我可知.</span>😎
    </p>
    <el-divider></el-divider>
    <el-card class="question">
      <h2 id="1-">1做不完的热身题😤</h2>
      <p>出题人：陈津旭</p>
      <p>QQ：3121571886（欢迎讨论与交流）</p>
      <h3 id="1-1-">1.1写在前面✒️</h3>
      <p>
        很高兴在这里见到你,欢迎你来到机器学习的世界🙉!
        <span>“做不完”</span>的热身题?
        别紧张,或许它会是最轻松的一道题.热身题,顾名思义其目的是为了让大家更快的了解机器学习是什么,怎么学,并为下面的题目打下基础.我们会在下面提供相关的学习资料，当然也希望你可以善于使用<span>搜索引擎</span>，自己动手丰衣足食.
      </p>
      <p>
        所以,开始热热身吧,希望这道题可以伴随你的学习生涯,成为一道做不完的题目😁🎉.
      </p>
      <h3 id="1-2-">1.2题目</h3>
      <p>
        1.学会编写markdown格式的文件,<span
          >注意此后大部分题目题目均需提交为Markdown格式.</span
        >
      </p>
      <p>
        2.阅读但<span>不限于</span> 我们所给出的资料,<span>尽可能多的</span>
        ==了解机器学习的相关概念(可以参照后续题目进行关键词搜索)，并编写markdown格式的文件记录你的学习笔记.如:
      </p>
      <ul>
        <li>机器学习发展史?</li>
        <li>
          机器学习算法有哪些分类?(监督学习，无监督学习，强化学习都是什么?)
        </li>
        <li>机器学习的流程?</li>
        <li>gpt到底是什么???</li>
        <li>…(还有更多等你补充捏😋)</li>
      </ul>
      <p>
        <img
          src="https://picx.zhimg.com/80/f6736d27c4dc0256f1c9dbfb61c2c5dc_1440w.webp?source=1940ef5c"
          alt="img"
          style="zoom: 67%"
        />
      </p>
      <h2 id="1-3-">1.3相关资料💡</h2>
      <ol>
        <li>
          <p>
            <a href="https://zhuanlan.zhihu.com/p/43833351"
              >机器学习发展历史回顾 - 知乎 (zhihu.com)</a
            >
          </p>
        </li>
        <li>
          <p>
            <a
              href="https://www.bilibili.com/video/BV1Pa411X76s/?spm_id_from=333.337.search-card.all.click&amp;vd_source=9996fc4a466cb25c78a24664ce4381e5"
              >(强推|双字)2022吴恩达机器学习Deeplearning.ai课程_哔哩哔哩_bilibili</a
            >
          </p>
        </li>
        <li>
          <p>
            周志华《机器学习》<a
              href="https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1oTJjTkxK0PuV2nRExq1wcA"
              >链接</a
            >
            提取码:odp0
          </p>
        </li>
        <li>
          <p>
            推荐一个知乎博主
            <span>‘化简可得’</span
            >,他的文章都很通俗易懂(线性回归,逻辑回归,svm…都有涵盖),况且他的文章在csdn要开会员(😾狠狠白嫖😾)
          </p>
          <p>
            <a href="https://www.zhihu.com/people/huajiankede"
              >(2 条消息) 化简可得 - 知乎 (zhihu.com)</a
            >
          </p>
        </li>
        <li>
          <p>
            一个用简单的话语描述机器学习部分数学理论知识的up，svm，梯度下降，正则化都有讲捏<a
              href="https://space.bilibili.com/504715181?spm_id_from=333.337.0.0"
              >王木头学科学的个人空间_哔哩哔哩_bilibili</a
            >
          </p>
        </li>
      </ol>
    </el-card>
    <el-card class="question">
      <h2 id="2python-">2python基础</h2>
      <p>出题人：曹新</p>
      <p>QQ：2738824383（欢迎提问和交流）</p>
      <h3 id="2-1-">2.1引入</h3>
      <p>
        Python是一种面向对象的解释型计算机程序设计语言，具有丰富和强大的库。随着互联网的迅猛发展，Python也被看做是人工智能时代最佳的编程语言。Python提供大量机器学习的代码库和框架，在数学运算方面有NumPy，结构化数据操作可以通过Pandas，针对各种垂直领域比如图像、语音、文本在预处理阶段都有成熟的库可以调用。
      </p>
      <h3 id="2-2-">2.2题目</h3>
      <h4 id="2-2-1-">2.2.1 基础要求</h4>
      <ol>
        <li><p>安装python相关编程环境（不推荐廖雪峰博客上的环境配置）</p></li>
        <li>
          <p>
            掌握python基础语法，廖雪峰的个人网站学到函数式编程之前（即高级特性学完）
          </p>
        </li>
        <li>
          <p>女人的秘密</p>
          <p>
            年龄是女人最大的秘密，直男小y在和他的crush玩猜年龄小游戏，每次猜完一次年龄如果输入的年龄错误的话，可以再次输入，最多只能输入三次，大于三次的话还是可以拥有机会（提问是否继续），输入字母Y或者y的话就是继续猜年龄，输入N或者n的话就退出本次循环，当你输入字符不是Y或者N的话，会提示：请输入正确字符！
          </p>
        </li>
        <li>
          <p>
            采用递归和非递归两种方式实现将所输入的5个字符，以相反顺序打印出来。
          </p>
          <blockquote>
            <p>提示：非递归利用字符串的切片方法</p>
          </blockquote>
        </li>
        <li>
          <p>敏感的纪念日</p>
          <p>
            一月一日是小y和他女朋友在一起的纪念日，为了不忘记买纪念礼物，请帮他做一个程序：输入某月某日，判断这一天是他们在一起的第几天?
          </p>
          <blockquote>
            <p>提示：要考虑是不是闰年在一起的哦</p>
          </blockquote>
        </li>
      </ol>
      <h3 id="2-3-">2.3 相关资料</h3>
      <h4 id="2-3-1-">2.3.1 学习资料</h4>
      <ol>
        <li>
          <p>pyhton之父之中国分父 廖雪峰 的个人网站（简单易懂，快速上手）</p>
          <p>
            <a href="https://www.liaoxuefeng.com/wiki/1016959663602400"
              >Python教程 - 廖雪峰的官方网站 (liaoxuefeng.com)</a
            >
          </p>
        </li>
        <li>
          <p>菜鸟教程</p>
          <p>
            <a href="https://www.runoob.com/python/python-tutorial.html"
              >Python 基础教程 | 菜鸟教程 (runoob.com)</a
            >
          </p>
        </li>
        <li>
          <p>马士兵 Python基础版2020年全新教程</p>
          <p>
            <a
              href="https://www.bilibili.com/video/BV1wD4y1o7AS/?spm_id_from=333.337.search-card.all.click&amp;vd_source=d4c17aa371e79e6e6536727d550cb72b"
              >Python 入门基础版|基础语法</a
            >
          </p>
        </li>
      </ol>
      <blockquote>
        <p>
          遇到理解不了的可以在CSDN、知乎、博客园上查询，有能力可以去提前掌握翻墙技巧
        </p>
      </blockquote>
      <hr />
    </el-card>
    <el-card class="question">
      <h2 id="3-">3线性回归</h2>
      <p>出题人：邓皓文<br />QQ：2207976948</p>
      <h3 id="3-1-">3.1 什么是线性回归</h3>
      <p>
        什么是<strong>线性</strong>，什么是<strong>回归</strong>？<strong>线性回归</strong>的作用是什么？将你的理解写在markdown学习笔记中。
      </p>
      <h3 id="3-2-">3.2 初识线性回归</h3>
      <p>
        机器学习是不断发展的数据科学领域的重要组成部分。在机器学习的发展过程中，计算机的大规模运算具有不可或缺的作用。所以，<strong>熟练运用代码</strong>进行拟合回归是极为重要的。
      </p>
      <h4 id="3-2-1-">3.2.1 小试牛刀</h4>
      <p>
        使用python，自行创建一组数据集，尝试调用sklearn库中的线性回归模型进行训练，并调用matplotlib库输出。结果类似于下图：
      </p>
      <p><img src="../assets/machine/r.png" style="width: 40%" /></p>
      <h3 id="3-3-">3.3 理论理解</h3>
      <p>
        现在的第三方库已经提供了多样化的工具来直接实现线性回归，但是<strong>自己理解</strong>这个过程是也非常重要的。
      </p>
      <h4 id="3-3-1-">3.3.1 基础学习</h4>
      <p>
        自行推导一遍梯度下降法进行线性回归的过程，理解各个参数是如何变化的。使用python，自主编写线性回归的代码，并将其中的参数的关系以可视化的形式展现出来，如迭代次数n与损失函数的关系，不同学习率α对损失函数有什么影响（至少三种关系）。
      </p>
      <h4 id="3-3-2-">3.3.2 进阶学习</h4>
      <p>
        怎么对多变量的数据集进行线性回归？学习基本的线性代数知识，使用最小二乘法自行编写算法，调用sklearn库中的波士顿房价数据集，将一部分数据进行训练，另一部分数据进行测试，输出拟合图像结果。（若代码编写有困难，可以直接调用库函数，但是要理解其中原理）
      </p>
      <h3 id="3-4-">3.4 思考题（选做）</h3>
      <p>
        假如多变量中的某些变量线性相关，运用最小二乘法求解会发生什么？岭回归的作用是什么？它相比于普通线性回归解决了什么问题？Lasso和岭回归的区别是什么？将你的理解写在markdown学习笔记中。
      </p>
    </el-card>
    <el-card class="question">
      <h2 id="4-">4逻辑回归</h2>
      <p>出题人:陈津旭</p>
      <p>QQ:3121571886(欢迎讨论与交流)</p>
      <h3 id="4-0-">4.0万事开头难✒️</h3>
      <p>
        相信你看到这里时已经完成了线性回归的绝大部分习题🎉🎉🎉,一行行的数学公式,奇形怪状的符号,可能让你头痛欲裂.不如我们先缓解缓解压力,静下心来做一个小小的思考与回顾:
      </p>
      <p>
        回顾: 在线性回归里面你学到了哪些概念呢?线性回归究竟用来解决什么问题呢?
      </p>
      <p>
        思考:
        什么是逻辑回归呢?逻辑回归为什么产生呢?再往下想想线性回归和逻辑回归有什么联系呢?它们本质上有区别吗?
      </p>
      <p>
        <span>注意：</span>回顾部分无硬性要求,但思考部分请你编写<span
          >markdown</span
        >
        记录你的学习历程及做题时的遇到的问题.
      </p>
      <h3 id="4-1-">4.1正式引入</h3>
      <h4 id="4-1-1-">4.1.1工欲善其事,必先利其器</h4>
      <p>
        相信你在完成之前题目时已经或多或少的安装了matplotlib、sklearn等python库,接下来你还要安装<span
          >numpy、pandas</span
        >
        这两个库并学习其基本用法(<span>针对题目去专项学习</span>即可),为后续的数据处理、图像绘制、模型导入做准备.
      </p>
      <h3 id="4-2-">4.2动手试试实现二分类吧🌌 .</h3>
      <h4 id="4-2-1-">4.2.1小试牛刀</h4>
      <p>题目要求:</p>
      <p>
        使用我们给出的数据,<span>调库</span> 进行逻辑回归分类，输出<span>
          拟合效果最佳</span
        >的直线的<span> 斜率k和截距b</span
        >，并画出包含决策边界与数据的散点图,大致如下(当然也可以画出具有自己风格的图像)(注意所给数据拥有分类,记得用不同颜色将其区分):
      </p>
      <p>
        <img
          src="../assets/machine/ml_imgage.png"
          alt="image-20230827145525448"
          style="zoom: 50%"
        />
      </p>
      <p>tips:我们所给出的数据有玄机哦……</p>
      <h4 id="4-2-2-">4.2.2代码填空</h4>
      <p>题目要求:</p>
      <p>
        首先<span>熟悉逻辑回归的数学推导</span>
        ,并尝试自己动手看看是否真正理解其思路.(或许你会对压根没听过的数学概念感到头疼,但不必担心,<span
          style="background-color: rgb(255, 255, 0)"
          >重点理解其思路即可</span
        >),可以参考资料中的第一个知乎文章.
      </p>
      <p>
        其次完成下列代码填空,实现手动的逻辑回归(当然如果你有信心也可以自己编写代码,不必完成填空)(<span>共十个</span>)
      </p>
      <p><span>注意使用上一题中我们所给的数据即可.</span></p>

      <pre><code class="lang-python"><span class="hljs-comment">#代码中theta为权重,b为截距,eta为学习率</span>
        <span class="hljs-comment">#导入所需的库</span>

        <span class="hljs-comment"># 读取数据,使用上一题中我们所给的数据即可</span>
        train_data = _<span class="hljs-number">_</span>(<span class="hljs-number">1</span>)
        <span class="hljs-comment"># 坐标</span>
        feature = _<span class="hljs-number">_</span>(<span class="hljs-number">2</span>)
        <span class="hljs-comment"># 类别</span>
        label = _<span class="hljs-number">_</span>(<span class="hljs-number">3</span>)

        <span class="hljs-comment"># 定义逻辑函数</span>
        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">sigmoid</span><span class="hljs-params">(x)</span></span>:
            <span class="hljs-keyword">return</span> ______<span class="hljs-number">_</span>(<span class="hljs-number">4</span>)


        <span class="hljs-comment"># 定义逻辑回归训练模型</span>
        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">fit</span><span class="hljs-params">(x, y, eta= ___<span class="hljs-number">_</span>)</span></span>: (<span class="hljs-number">5</span>) <span class="hljs-comment">#eta为学习率</span>
            n_iters = ___<span class="hljs-number">_</span> (<span class="hljs-number">6</span>) <span class="hljs-comment">#n_iters为训练次数</span>
            theta1 = <span class="hljs-number">1.0</span><span class="hljs-comment"> #随机生成一个theta1</span>
            theta2 = -<span class="hljs-number">1.0</span><span class="hljs-comment"> #随机生成一个theta2</span>
            b = <span class="hljs-number">0</span>.<span class="hljs-number">0</span> 
            <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> range(n_iters):
                <span class="hljs-comment">#预测逻辑函数,即计算Y_hat</span>
                (<span class="hljs-number">7</span>)
                <span class="hljs-comment"># 计算权重,截距的偏导,并最后输出</span>
                (<span class="hljs-number">8</span>)
            <span class="hljs-keyword">return</span> [theta1, theta2, b]


        <span class="hljs-comment"># 用逻辑回归模型拟合构造的数据集</span>
        theta = fit(feature, label)

        <span class="hljs-comment">#定义决策边界的计算</span>
        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">decision</span><span class="hljs-params">(x)</span></span>:
            <span class="hljs-keyword">return</span> ______<span class="hljs-number">_</span>(<span class="hljs-number">9</span>)

        <span class="hljs-comment"># 计算决策边界</span>
        <span class="hljs-comment"># 完成可视化画出数据散点图与决策边界</span>
        ____<span class="hljs-number">_</span>(<span class="hljs-number">10</span>)
        </code></pre>
      <h3 id="4-3-">4.3相关资料及数据💡</h3>
      <h4 id="4-3-1-">4.3.1数据</h4>
      <p>
        链接:
        <a href="https://pan.baidu.com/s/12YF31ecJjVkdB5YeqWztIw?pwd=r4wy"
          >https://pan.baidu.com/s/12YF31ecJjVkdB5YeqWztIw?pwd=r4wy</a
        >
        提取码: r4wy 复制这段内容后打开百度网盘手机App，操作更方便哦
      </p>
      <h4 id="4-3-2-">4.3.2资料</h4>
      <ol>
        <li>
          <a href="https://zhuanlan.zhihu.com/p/139122386"
            >用人话讲明白逻辑回归Logistic regression - 知乎 (zhihu.com)</a
          >
        </li>
        <li>
          <a
            href="https://www.bilibili.com/video/BV1Pa411X76s/?spm_id_from=333.337.search-card.all.click&amp;vd_source=9996fc4a466cb25c78a24664ce4381e5"
            >(强推|双字)2022吴恩达机器学习Deeplearning.ai课程_哔哩哔哩_bilibili</a
          >
        </li>
      </ol>
    </el-card>
    <el-card class="question" style="margin-bottom: 30px">
      <h2 id="5-damn-mushroom-">5. Damn！mushroom~🍄</h2>
      <blockquote>
        <p><strong>出题人：刘富临</strong></p>
        <p><strong>QQ：3061114306(欢迎经过思考后的提问)</strong></p>
      </blockquote>
      <h3 id="5-1-">5.1 引入🚦：</h3>
      <p>
        从1956年夏季首次提出“人工智能”这一术语开始，科学家们尝试了各种方法来实现它。如专家系统，决策树、归纳逻辑、聚类等等，但这些都是假智能。直到人工神经网络技术的出现，才让机器拥有了“真智能”。
      </p>
      <h3 id="5-2-">5.2 基础题✨</h3>
      <p>1.初步了解神经网络工作的基本原理</p>
      <p>
        2.学习梯度下降算法用并完成所给数据用梯度下降法寻找
        <span>0.3*(x+y) <sup>2</sup>-x*y+1</span>
        的极小值
      </p>
      <p>3.运行结果要求打印类似如下的图</p>
      <div>
        <img src="../assets/machine/w.png" style="width: 40%; height: 40%" />
      </div>
      <h3 id="5-3-">5.3 进阶要求🔥</h3>
      <p>
        1.对所给蘑菇数据进行<strong>预处理</strong>(数据缺失<strong>30%</strong>以上可以删去该特征，其余可选择用<strong>众数</strong>填补)
      </p>
      <p>2.不调用库函数，手动搭建一个<strong>没有隐藏层</strong>的神经网络</p>
      <p>
        3.在完成以上两题的基础上手动搭建一个拥有一层隐藏层的浅层神经网络，要求隐藏层的神经元为<strong
          >十个</strong
        >
      </p>
      <p>
        4.要求在markdown上写出<strong>详细的特征工程</strong>(遇到的问题以及怎么解决的也可以写在上面)
      </p>
      <p><strong>数据处理后搭建神经网络的格式：</strong></p>
      <pre><code class="lang-python"><span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">sigmoid</span><span class="hljs-params">(x)</span>:</span>


            <span class="hljs-keyword">return</span>

        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">deriv_sigmoid</span><span class="hljs-params">(x)</span>:</span>


            <span class="hljs-keyword">return</span> 

        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">initial_parameters</span> <span class="hljs-params">(in_, hidden_, out_)</span>:</span>
            <span class="hljs-string">"""
            in_ : 输入层神经元个数
            hidden_:隐藏层神经元个数
            out_: 输出层神经元个数
            w1: 隐藏层权重参数weights_1
            w2: 输出层权重参数weights_2
            b1: 隐藏层偏置参数bias_1
            b2: 输出层偏置参数bias_2
            设计思路:w,b的规模应当满足前向传播
            计算中矩阵乘法的计算要求
            """</span>
            parameters = {
                <span class="hljs-string">'w1'</span>:
                <span class="hljs-string">'w2'</span>:
                <span class="hljs-string">'b1'</span>:
                <span class="hljs-string">'b2'</span>:
            }
            <span class="hljs-keyword">return</span> parameters  
            <span class="hljs-comment"># 该函数返回初始化好的权重参数字典</span>

        <span class="hljs-comment"># 本函数为前向传播</span>
        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">feed_forward</span><span class="hljs-params">(parameters, X)</span>:</span>
            <span class="hljs-string">"""
            parameters: 参数字典,即初始化的权重参数
            X: 输入值
            y_pred: 预测值
            设计思路:利用参数字典中的w,b和输入值X，先进性线性变换，再进行激活，完成前向传播。将得到的y_pred添加保存至参数字典中。
            """</span>


            <span class="hljs-keyword">return</span> parameters  
            <span class="hljs-comment"># 该函数返回通过前向传播求出的y_pred字典</span>

        <span class="hljs-comment"># 本函数为反向传播求梯度</span>
        <span class="hljs-comment"># 通过链式法则求出梯度</span>
        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">gradient</span><span class="hljs-params">(parameters, X, y)</span>:</span>
            <span class="hljs-string">"""
            parameters: 参数字典
            X: 输入数据
            y: 输入数据
            dw: 权重参数的梯度
            db: 偏置参数的梯度
            设计思路:通过链式法则，得到w,b对损失函数的偏导数，得出dw,db。
            """</span>


            <span class="hljs-keyword">return</span> grad  
         <span class="hljs-comment"># 该函数返回通过反向传播求出的梯度字典</span>

        <span class="hljs-comment"># 本函数通过梯度下降更新参数</span>
        <span class="hljs-function"><span class="hljs-keyword">def</span> <span class="hljs-title">update</span><span class="hljs-params">(grad, parameters, lr)</span>:</span>
            <span class="hljs-string">"""
            grad: 通过反向传播求出的梯度,保存了当前的dw,db
            parameters: 参数字典,保存了当前的w,b
            lr: 学习率,影响梯度下降的速度
            """</span>


            <span class="hljs-keyword">return</span> parameters

        <span class="hljs-comment">#接下来是调用以上函数并用自己处理好的数据画出损失函数所计算的值随更新次数下降的趋势图</span>
        </code></pre>
      <p>
        <strong
          >📌ps：这里以有隐藏层为例，搭建无隐藏层时函数initial<em
            >parameters里只有in</em
          >
          ,out_
          两个参数,而在initial_parameters返回的字典里也没有w2和b2。</strong
        >
      </p>
      <p>
        ​
        <strong
          >格式中已给出要求激活函数用sigmoid，损失函数用交叉熵损失函数</strong
        >
      </p>
      <h4 id="5-3-1-tips-">5.3.1 Tips🎗️</h4>
      <ul>
        <li>
          <p>
            在分析特征时，<strong>删去与毒性无关的特征</strong>，并<strong>合并某一特征中对有无毒性作用基本相似的特征类型</strong>。(比如手机是否流畅中的不同品牌这一特征，苹果和三星都不流畅，但华为流畅，则可将苹果三星合并为一个品牌，则就只剩苹果三星，华为两个特征类型了)
          </p>
        </li>
        <li>
          <p>
            删去特征和合并特征类型时判断依据是<strong>画出柱状图</strong>并分析，可只用分析
          </p>
        </li>
      </ul>
      <p>
        ​
        ’cap_color‘，’gill_attachment‘，’gill_color’，‘has_ring’，‘habitat’，‘season’这几个特征，并选分别选则删去一个特征和合并一个特征中的某两个类型
      </p>
      <h3 id="5-4-">5.4 相关学习资料📚</h3>
      <p>
        1.B站上吴恩达老师机器学习课程<a
          href="https://www.bilibili.com/video/BV164411b7dx?p=51"
          >https://www.bilibili.com/video/BV164411b7dx?p=51</a
        >
      </p>
      <p>
        2.知乎和CSDN等网站上搜索关键字如：梯度下降算法 反向传播算法
        手动搭建浅层神经网络
      </p>
      <p>
        3.神经网络具体计算原理推荐看<a
          href="https://zhuanlan.zhihu.com/p/96046514"
          >https://zhuanlan.zhihu.com/p/96046514</a
        >
      </p>
      <p>
        3.周志华《机器学习》<a
          href="https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1oTJjTkxK0PuV2nRExq1wcA"
          >链接</a
        >
        提取码:odp0
      </p>
      <h3 id="5-5-">5.5 数据📃</h3>
      <p>
        链接：<a href="https://pan.baidu.com/s/1v0oEPdBgOrX0DlEtukNn8Q?pwd=yfta"
          >https://pan.baidu.com/s/1v0oEPdBgOrX0DlEtukNn8Q?pwd=yfta</a
        >
        提取码：yfta
      </p>
    </el-card>
    <el-card class="question" style="margin-bottom: 30px">
      <h2 id="6-x2753-svm-">6&#x2753; 啥么是SVM(支持向量机)</h2>
      <p>出题人：陈文琦 联系方式(QQ): 1401137731</p>
      <h3 id="6-0-">6.0前置知识</h3>
      <p>
        &#x1F4E3;在线性回归的题目之后，我们会发现遇到一些更复杂的问题时，需要一种更powerful的模型来解决。
        &#x1F44D;在2012年 深度学习流行之前，最主流的机器学习方法其实是SVM
        支持向量机，就算是现在学习机器学习，SVM也是很多课程和教材绕不过的内容。
        &#x1F4CA;这一部分的题目学习可能会比较偏向数学，在简单地建立一点框架之后，若想要更进一步，就可能需要学习最优化理论相关的东西了。
      </p>
      <h3 id="dive-into-svm">Dive into SVM</h3>
      <p>&#x1F332; 或许我们可以带着三个problems进入SVM的世界：</p>
      <ol>
        <li><strong>Evaluation</strong>: 我们要找的函数F(x,y)大概长什么样子</li>
        <li>
          <strong>Infenrence</strong
          >：如何才能确定这个函数F(x,y)的参数就是所求的最优解
        </li>
        <li>
          <strong>Training</strong>：如何利用给出的数据很好地进行训练/迭代
        </li>
      </ol>
      <h3 id="-"><em>附赠</em> ♨️学习“饮料”：</h3>
      <ol>
        <li>
          &#x1F449;
          <a
            href="https://speech.ee.ntu.edu.tw/~tlkagk/courses/ML_2016/Lecture/SVM%20(v5"
            >Support Vector Machine PDF/李宏毅ML2016FALL</a
          >.pdf)
        </li>
        <li>
          &#x1F449;
          <a href="https://www.youtube.com/watch?v=QSEPStBgwRQ"
            >Support Vector Machine Video/李宏毅ML2016FALL</a
          >
        </li>
        <li>
          &#x1F449;：周志华《机器学习》<a
            href="https://link.zhihu.com/?target=https%3A//pan.baidu.com/s/1oTJjTkxK0PuV2nRExq1wcA"
            >链接</a
          >
          提取码:odp0
        </li>
        <li>
          :metal:Highly Recommended：<a
            href="https://zhuanlan.zhihu.com/p/30971899"
            >SVM原理推导(数学推导) </a
          >（数学的部分讲得很清楚）
        </li>
        <li>
          <p>
            :clap:Highly Recommended：<a
              href="https://www.bilibili.com/video/BV1mE411p7HE/?spm_id_from=333.337.search-card.all.click&amp;vd_source=81015d40886a554d633a523ab9ec6db5"
              >SVM原理推导(数学推导) </a
            >（逻辑清晰，时间不够可以和上面一个选挑着看）
          </p>
        </li>
        <li>
          <p>
            &#x1F449;<em>(参考)</em>：
            <a
              href="https://www.bilibili.com/video/BV1vJ41187hk?p=47&amp;vd_source=81015d40886a554d633a523ab9ec6db5"
              >SVM bilibili 菜菜的机器学习sklearn</a
            >
          </p>
        </li>
        <li>
          &#x1F449;<em>(参考)</em>：
          <a href="https://speech.ee.ntu.edu.tw/~hylee/ml/2016-fall.php"
            >李宏毅ML2016FALL</a
          >
        </li>
        <li>
          &#x1F449;<em>(参考)</em>：
          <a
            href="https://space.bilibili.com/1567748478/channel/seriesdetail?sid=358497"
            >动手学深度学习 PyTorch版 bilibili</a
          >
        </li>
        <li>
          &#x1F449;<em>(参考)</em>：
          <a href="https://speech.ee.ntu.edu.tw/~hylee/ml/2023-spring.php"
            >李宏毅ML2023FALL</a
          >
          较为前沿的课程，可以了解一下
        </li>
      </ol>
      <h2 id="-x1f463-6-1-">
        &#x1F463;6.1在了解了这三个问题之后，我们可以开始着手解决题目了
      </h2>
      <h3 id="-warm-up">📌Warm up</h3>
      <p>
        🫥
        把你在学习支持向量机过程中的一些笔记和思考记录下来，可以是文字，也可以是图片或截图（提交时请插入markdown文件中），只要能够清晰地表达你的想法就可以。这个过程可以帮助你更好地理解SVM的原理，也可以帮助你更好地完成后面的任务。
      </p>
      <p>
        <strong>题目要求</strong>： 尽量使用markdown格式，如果不会的话可以参考<a
          href="https://www.jianshu.com/p/191d1e21f7ed"
          >这里</a
        >。
      </p>
      <h2 id="6-2-task1-">6.2📌Task1：线性可分的情况</h2>
      <h3 id="task1-1">Task1.1</h3>
      <p>小试牛刀 ~</p>
      <p>
        我们先从一个简单的二分类问题开始，稍稍了解一下各种框架和库的使用方法吧。
      </p>
      <p>
        数据集<a href="https://pan.baidu.com/s/1PSM9WwJFJH5N06QvDvuzkg?pwd=lian"
          >链接(这里)</a
        >
        提取码：lian
      </p>
      <p>
        <strong>题目要求</strong
        >：文档中给出了一个简单二分类数据集，请对其进行处理，并利用SVM算法进行分类，可以自选深度学习代码框架（pytorch/tensorflow/keras），也可利用sklearn等库进行实现；当然学有余力的keen
        learner也可以自己手动实现SVM算法。
      </p>
      <h3 id="task1-2">Task1.2</h3>
      <p>
        :tanabata_tree:
        iris数据集是机器学习入门绕不开的经典（bushi打卡点。作为一个沾花惹草的人，你将扮演一个花匠的角色去总结花的特征，将其分为三类，分别是山鸢尾，变色鸢尾，维吉尼亚鸢尾，具体的数据集可以参考<a
          href="https://archive.ics.uci.edu/ml/datasets/iris"
          >链接(这里)</a
        >。当然你也可以直接使用sklearn中的iris数据集或者下载在<a
          href="https://pan.baidu.com/s/16rkfb79BlgypxgDVaZCfgA#list/path=%2F"
          >链接(这里)</a
        >提供的iris数据集文件(提取码：8eev)。
      </p>
      <p>
        <strong>题目要求</strong
        >：在初窥SVM门路后，在二分类SVM算法的框架下，尝试对iris数据集进行分类，可以自选深度学习代码框架（pytorch/tensorflow/keras），也可利用sklearn等库进行实现。
      </p>
      <h2 id="6-3-task2-">6.3📌Task2：线性不可分的情况</h2>
      <p>
        🫠:<strong style="background-color: rgb(255, 255, 0)"
          >思考题</strong
        >：不做硬性要求(选做)
      </p>
      <ol>
        <li>
          <p>
            当一个任务不是线性可分的时候，神经网络是能够通过增加隐藏层来解决的；<strong>那么SVM是如何做到呢？他们之间又有什么联系和不同呢?</strong>（如果还不是那么了解神经网络/感知机的话，第二个问号可以暂不用回答）。
          </p>
        </li>
        <li>
          <p>
            <strong>通过VC维度 如何来理解SVM的损失函数?</strong> <em>hint</em>:
            <em>经验风险/结构风险</em>
          </p>
        </li>
      </ol>
      <p><strong>题目要求</strong>： 将回答写在你的Warm_up学习笔记中。</p>

      <h2 id="6-4-">6.4提交方式</h2>
      <p><strong>SVM部分的题目提交为文件夹形式，包含以下内容：</strong></p>
      <p>
 Warm_up和Task2的提交格式合为同一个markdown文件
        Task1的两个任务则都需要提交可运行的python代码文件、分别的运行结果截图。当然，相信你在环境配置和代码修改过程中遇到了很多掉头发的问题吧，也可以把问题和解决方案附记录在一个markdown文件中，分享让痛苦减半~
      </p>
      <blockquote>
        <p>
          <strong style="background-color: rgb(255, 255, 0)">Tips</strong
          >：有关于题目不明白不清楚的地方，欢迎找出题人询问；不明就里的库函数、数学知识点等等，用好搜索引擎大概率能找到答案。如果还是不明白，可以在群里提问，或者在群里发起讨论，也可以在自己的学习笔记中记录下来，等待后面的学习;
          当然，也欢迎找出题人进行讨论:smile:~~
        </p>
      </blockquote>
    </el-card>
    <el-card>
      <h1 id="-">附加题📚</h1>
      <h2 id="7-you-only-look-once">7【猫猫和胖鸟】You only look once</h2>
      <p>
        ​
        在美丽的成电校园，有可爱的猫猫，还有一群讨厌的胖鸟，你骑着小黄车路过时它们也不理会你。可是有时候猫猫和胖鸟会藏在草丛里，你偶然路过的时候不能发现憨憨的它们。没有关系！钰涵姐姐会帮助你。（钰涵姐姐是链时代工作室的专属机器人，她只听你的话，所以你必须告诉她该如何判断噢。）
      </p>
      <p>Q1:学习yolo算法，了解其基本结构和实现流程。</p>
      <p>Q2:比较yolo算法各个版本的区别和新版本的优化。</p>
      <p>Q3:运用yolov5实现猫猫和胖鸟的识别。效果demo如下：</p>
      <div class="animal">
        <p>
          <img
            src="../assets/machine/3121571886-3336332998-314A312FF21F8CB33592E0EF01118E3E.jpg"
          />
        </p>
        <p>
          <img src="../assets/machine/1.png" alt="1" />
        </p>
      </div>
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
  img {
    width: 60%;
    margin-left: 20%;
  }
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
  a {
    color: #666;
  }
  .animal {
    display: flex;
    justify-content: space-around;
    img {
      width: 80%;
      height: 500px;
      margin-left: 10%;
    }
  }
}
@media (max-width: 767px) {
  .questionbox {
    width: auto; /* 在小屏幕上设置宽度为100% */
    margin-left: 0;
    .animal {
      display: block;
      img {
        width: 80%;
        margin-left: 10%;
        height: 300px;
      }
    }
  }
}
@media screen and (max-width: 450px) {
  .questionbox {
    width: auto; /* 在小屏幕上设置宽度为100% */
    margin-left: 0;
    .animal {
      display: block;
      img {
        width: 80%;
        margin-left: 10%;
        height: 300px;
      }
      pre{
        font-size: 6px;
      }
    }
  }
}
</style>