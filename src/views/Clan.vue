<template>
  <el-card class="questionbox">
    <h1>C语言 序言</h1>
    <p><span>不熟悉算法竞赛的选手请看这里：</span> </p>
    <p>算法竞赛中要求的输出格式中，<span>不能有多余的内容 ,这也包括了“请输入整数 a 和 b 这一类的提示用户输入信息的内容</span>。若包含了这些内容，将会被认为是 `Wrong Answer`，即洛谷上的 <code style="font-size: larger;">WA</code>。在对比代码输出和标准输出时，系统将忽略每一行结尾的空格，以及最后一行之后多余的换行符。</p>
    <p>若因此类问题出现本机（看起来）<code style="font-size: larger; background-color: rgb(248,248,248);"> AC </code> ，提交 <code style="font-size: larger;background-color: rgb(248,248,248);"> WA </code> 的现象，请勿认为是洛谷评测机出了问题，而是你的代码中可能存在多余的输出信息。用户可以参考在题目末尾提供的代码。</p>
    <p><span>另外请善用应用中的在线 IDE 功能，</span> 以避免不同平台的评测中所产生的一些问题。</p>
    <el-divider></el-divider>
    <h2 style="margin-top: 30px;">C语言 基础题</h2>
    <el-divider></el-divider>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">1. A+B Problem</h3>
      <p>
        <span>题目描述: </span
        >输入两个整数 a, b，输出它们的和    (|a|,|b|&le;10<sup>9</sup> )
      </p>
      <p>好吧，同志们，我们就从这一题开始，向着大牛的路进发。</p>
      <p>
        <span>输入格式: </span>两个以空格分开的整数。
      </p>
      <p>
        <span>输出格式: </span>一个整数。
      </p>
      <pre>

    样例 #

    样例输入 #1        20 30

    样例输出 #1        50  
      </pre>
      <p><span>任何一个伟大的思想，都有一个微不足道的开始😎！</span></p>
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">2.找最小值</h3>
      <p>
        <span>题目描述：</span
        >给出 n 和 n 个整数 a<sub>i</sub> ，求这 n 个整数中最小值是什么。</p>

      <p><span>输入格式：</span>第一行输入一个正整数 n ，表示数字个数。

第二行输入 n 个非负整数，表示 a<sub>1</sub>，a<sub>2</sub> ,... a<sub>n</sub>以空格隔开。</p>
      <p><span>输出格式：</span>输出一个非负整数，表示这 n 个非负整数中的最小值。</p>
      <pre>

    样例输入 #1       8
                      1 9 2 6 0 8 1 7

    样例输出 #1       0
                                
</pre
      >
      <p><span>提示：</span>数据保证，n&le;100 且 0 &le; a<sub>i</sub> &le; 1000。</p>
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">3.塔塔开！</h3>
      <p>
        <span>题目背景：</span
        ><span style="color: #666;">艾伦耶格尔即将发动地鸣灭世！</span> “谈之巨人”阿尔敏表示，或许还能和艾伦好好谈谈。
      </p>
      <p>
        <span>题目描述: </span>阿尔敏需要把和艾伦交涉的话保存下来，再交给你来传话。
于是，你需要完成一个可以将收到的信息完整输出的程序。
      </p>
      <p><span>输入格式: </span>输入任意值</p>
      <p>
        <span>输出格式: </span>输出所输入的任意值
      </p>
      <pre>

    样例 #

         
    样例输入 #1       AILUN ruguo 
                      jiaru lianshidai
                      nijiu buhui 
                      fadong diming ！
                      
        
  
    样例输出 #1       AILUN ruguo 
                      jiaru lianshidai
                      nijiu buhui 
                      fadong diming ！
                      
      </pre>
      <p><span>注意，是啥都能输入哦</span></p>
        <p>PS：关键在于<span>getchar</span> ，与读入结束时的特性</p>
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">4.最大公约数和最小公倍数问题</h3>
      <p>
        <span>题目描述: </span
        >输入两个正整数 x<sub>0</sub> ,y<sub>0</sub>，求出满足下列条件的 P, Q 的个数：

<p>1. P, Q 是正整数。</p>

<p>2. 要求 P, Q 以 x<sub>0</sub> 为最大公约数，以 y<sub>0</sub> 为最小公倍数。</p>

<p>试求：满足条件的所有可能的 P, Q 的个数</p>
      </p>
      <p>
        <span>输入格式: </span>一行两个正整数x<sub>0</sub> ,y<sub>0</sub>
      </p>
      <p>
        <span>输入格式: </span>一行一个数，表示求出满足条件的 P, Q 的个数。
      </p>
      <pre>

    样例 #1

    样例输入 #1       3   60

    样例输出 #1       4        
      </pre>
      <p><span>提示：</span> P, Q 有 4 种：
3,60 ；
15,12 ；
12,15 ；
60,3。</p>
<p><span style="color: #fff;">提示：</span>对于 100% 的数据，x<sub>0</sub> ,y<sub>0</sub>：[2,10<sup>5</sup> ]</p>
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">5.独木桥</h3>
      <p>
        <span>题目背景：</span
        >战争已经进入到紧要时间。你是运输小队长，正在率领运输部队向前线运送物资。运输任务像做题一样的无聊。你希望找些刺激，于是命令你的士兵们到前方的一座独木桥上欣赏风景，而你留在桥下欣赏士兵们。士兵们十分愤怒，因为这座独木桥十分狭窄，只能容纳
        1个人通过。假如有 2 个人相向而行在桥上相遇，那么他们 2
        个人将无法绕过对方，只能有 1
        个人回头下桥，让另一个人先通过。但是，可以有多个人同时呆在同一个位置。
      </p>
      <p>
        <span>题目描述：</span>
        突然，你收到从指挥部发来的信息，敌军的轰炸机正朝着你所在的独木桥飞来！为了安全，你的部队必须撤下独木桥。独木桥的长度为
        L，士兵们只能呆在坐标为整数的地方。所有士兵的速度都为
        1，但一个士兵某一时刻来到了坐标为 0 或 L+1 的位置，他就离开了独木桥。
      </p>
      <p>
        每个士兵都有一个初始面对的方向，他们会以匀速朝着这个方向行走，中途不会自己改变方向。但是，如果两个士兵面对面相遇，他们无法彼此通过对方，于是就分别转身，继续行走。转身不需要任何的时间。
      </p>
      <p>
        由于先前的愤怒，你已不能控制你的士兵。甚至，你连每个士兵初始面对的方向都不知道。因此，你想要知道你的部队最少需要多少时间就可能全部撤离独木桥。另外，总部也在安排阻拦敌人的进攻，因此你还需要知道你的部队最多需要多少时间才能全部撤离独木桥。
      </p>
      <pre>


    输入格式:
    第一行共一个整数 L，表示独木桥的长度。桥上的坐标为 1, 2, ..., L。
    第二行共一个整数 N，表示初始时留在桥上的士兵数目。
    第三行共有 N 个整数，分别表示每个士兵的初始坐标。

    输出格式：
    共一行，输出 2 个整数，分别表示部队撤离独木桥的最小时间和最大时间。2 个整数由一个空格符分开。

    样例输入 #1
    4
    2
    1 3
    样例输出 #1
    2 4                

</pre
      >
      <p>
       <span> 提示：</span>对于 100% 的数据，满足初始时，没有两个士兵同在一个坐标，
          1 &le; L &le; 5 * 10<sup>3</sup>，  0 &le; N &le; 5 * 10<sup>3</sup>，且数据保证 N &le; L。


      </p>
    </el-card>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">6.线性筛素数</h3>
      <p>
        <span>题目背景: </span
        >提示：如果你使用  <code style="font-size: larger;">cin</code> 来读入，建议使用 <code style="font-size: larger;">std::ios::sync_with_stdio(0)</code> 来加速。
      </p>
      <p>
        <span>题目描述: </span
        >如题，给定一个范围 n ，有 q 个询问，每次输出第 k 小的素数。
      </p>

      <p><span>输入格式: </span>第一行包含两个正整数 n,q，分别表示查询的范围和查询的个数，
        接下来 q 行每行一个正整数 k，表示查询第 k 小的素数。</p>
      <p>
        <span>输出格式: </span>输出 q 行，每行一个正整数表示答案。
      </p>
      <pre>

    样例 #

    样例输入 #1       100 5
                      1
                      2
                      3
                      4
                      5

    
    样例输出 #1       2
                      3
                      5
                      7
                      11

      </pre>
      <p><span>提示：</span>【数据范围】对于 100% 的数据 ，n=10<sup>8</sup>, 1 &le; q &le; 10<sup>6</sup>， 保证查询的素数不大于 n。</p>
    </el-card>
   

    <h2 style="margin-top: 30px">C语言 进阶</h2>
    <el-divider></el-divider>
    <el-card class="question">
      <h3 style="margin-bottom: 30px">7.彼岸花开七色天</h3>
      <p>
        <span>题目背景：</span>
        彼岸花开七色天，花开花落一千年
      </p>
      <p><span>题目描述：</span>彼岸花的生长具有特殊规则：</p>
      <p>最开始只有一朵彼岸花，编号为零，奇怪的是，第一天过后，这一朵彼岸花边长出了新的一朵编号为一的彼岸花，为了方便观察，我们定义一号彼岸花为零号彼岸花的“子花”。  </p>
      <p>以后每过一天，每一朵彼岸花边都会生长出新的彼岸花，如第二天零号彼岸花边生长出了二号彼岸花，一号彼岸花边生长出了三号彼岸花。</p>
      <p>当然，为了方便计数，彼岸花的序号各不相同，而新的彼岸花生长是从零号彼岸花边开始，前一天的最后一个彼岸花边结束
的。</p><p>如：</p>
<p>第一天 0 &rarr; 1 </p>
<p>第二天 0 &rarr; 2  1 &rarr; 3</p>
<p>第三天 0 &rarr; 4  1 &rarr; 5 2 &rarr; 6 3 &rarr; 7</p>
<p>等等</p>
<p>现在给你两朵彼岸花，请你求出最近公共祖先。</p>
      <pre>

    输入格式： 
    一个数n        
    接下来n排，两个数l,r,
    求它们的最近公共祖先

    输出格式：
    输出n排，每排一个数代表询问组数。

    样例输入 #1           
    2
    1 2
    5 7

    样例输出 #1          
    0
    1      
                                             
</pre
      >
      <p> <span>提示：</span> n &le; 10<sup>5</sup>, 0 &le; l,r &le; 2<sup>64</sup>， </p>
    </el-card>

    <el-card class="question">
      <h3 style="margin-bottom: 30px">8.八皇后Checkmate！</h3>
      <p>
        <span>题目背景：</span>
        面对福地与雨御前的围剿，乱步用棋盘想出了绝妙的对策。
        于是，他预知了所有情况下自己能逃命的方案。
      </p>
      <p>一个如下的 6 * 6 的跳棋棋盘，有六个棋子被放置在棋盘上，使得每行、每列有且只有一个，每条对角线（包括两条主对角线的所有平行线）上至多有一个棋子。</p>
      <p><img src="../assets/3h71x0yf.png" alt=""></p>
      <p><span>题目描述：</span>上面的布局可以用序列<span>2 3 4 6 1 3 5</span> 来描述，第 i 个数字表示在第 i 行的相应位置有一个棋子，如下</p>
      <p><span style="color: rgb(255,255,255);">题目描述：</span>行号 1 2 3 4 5 6</p>
      <p><span style="color: rgb(255,255,255);">题目描述：</span>列号 2 4 6 1 3 5</p>
      <p>这只是棋子放置的一个解。请编一个程序找出所有棋子放置的解。  </p>
      <p>并把它们以上面的序列方法输出，解按字典顺序排列。</p>
      <p>请输出前3个解。最后一行是解的总个数。</p>
      <pre>

    输入格式：         
    一行一个正整数 n，表示棋盘是 n * n 大小。

    输出格式：
    前三行为前三个解，每个解的两个数字之间用一个空格隔开。
    第四行只有一个数字，表示解的总数。

    样例输入 #1           
    6

    样例输出 #1           
    2 4 6 1 3 5
    3 6 2 5 1 4
    4 1 5 2 6 3
    4         
                                             
</pre
      >
      <p><span> 提示:</span>   [数据范围]： 对于100%的数据，6 &le; n &le; 13 。试试深度优先搜索！   </p>
    </el-card>
    <el-card class="question" style="margin-bottom: 30px;">
      <h3 style="margin-bottom: 30px">9.镜子密室鲨人事件</h3>
      <p>
        <span>题目背景：</span
        >一个数字，照了照镜子，被自己吓死了。

你,<span>超电子科大级的侦探</span> 目睹了整个事件。

作为名侦探，你下定决心要解决这个奇怪的事件。。
      </p>
      <p>
        <span>题目描述：</span>
        你定义了<span>lsdzx</span>数，给出一个数轴，每个点代表一个数。当一个数为数翻转后与自己的GCD等于1的话，这个数就是lsdzx数。
      </p>
      <p><span>如：gcd(31,13)=1，那么13和31都是lsdzx数。</span>
</p>
<p>
为了保护那些还没找镜子的数字，你需要求出一定区间内lsdzx数的个数，注意，<span>相同数只能算一次</span>

请注意，每个lsdzx数都会小于一个数k

</p>
<p> <span>输入格式：</span>
    三个数n,m,k
    接下来一排n个数， a<sub>1</sub>，a<sub>2</sub> ,... a<sub>n</sub> 代表数轴上每个数的值
    接下来 m 排每排一组 l , r 代表一次询问
</p>
    <p> <span>输出格式：</span>
    m排，每排一个数代表询问结果</p>

      <pre>

    样例输入 #1     6 5 70
                    1 21 31 41 51 61
                    1 6
                    1 5
                    1 4
                    1 3
                    1 2 
                   
    样例输出 #1     4
                    3
                    3
                    2
                    1                       
</pre
      >
      <p><span>提示：</span> n &le; 50000, m &le; 50000, k &le; 50000, </p>
      <p> <span>数字0由于太穷了，家里买不起镜子，所以保证不会有 0 的存在！</span></p>
      <p> <span>PS：实在想不出做法，试试莫队算法！</span></p>
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