#提交须知
1. 招新题可用Java、C++、Go中任一种编程语言实现。
2. 招新题的完成情况量力而行。
3. 招新提请以附件的形式提交，打包成压缩文件并命名为“后端-学号-姓名”发到邮箱lxx18912405977@outlook.com，提交次数不限。
4. 如果有学习笔记之类的请一并放在压缩包中。
5. 有任何问题请加QQ：2356176435，或直接在群里找学长提问。



# 后端招新

## 1. 分配零钱

给你一个整数 money ，表示你总共有的钱数（单位为美元）和另一个整数 children ，表示你要将钱分配给多少个儿童。

你需要按照如下规则分配：

- 所有的钱都必须被分配。
- 每个儿童至少获得 1 美元。
- 没有人获得 4 美元。

请你按照上述规则分配金钱，并返回 最多 有多少个儿童获得 恰好 8 美元。如果没有任何分配方案，返回 -1 。

 

示例 1：

输入：money = 20, children = 3
输出：1
解释：
最多获得 8 美元的儿童数为 1 。一种分配方案为：
- 给第一个儿童分配 8 美元。
- 给第二个儿童分配 9 美元。
- 给第三个儿童分配 3 美元。
没有分配方案能让获得 8 美元的儿童数超过 1 。
示例 2：

输入：money = 16, children = 2
输出：2
解释：每个儿童都可以获得 8 美元。


提示：

1 <= money <= 200
2 <= children <= 30

## 2. 罗马数字转换为整数  

罗马数字中，较小的数字写在在较大的数字右边。

特例有三种：

- `I` 可以放在 `V` (5) 和 `X` (10) 的左边，来表示 4 和 9。
- `X` 可以放在 `L` (50) 和 `C` (100) 的左边，来表示 40 和 90。 
- `C` 可以放在 `D` (500) 和 `M` (1000) 的左边，来表示 400 和 900。

输入一个罗马数字，将其转换为整数并输出。

## 3. 判断括号合法性  

输入一段由[]{}()六种括号组成的字符串，通过程序判断该字符串是否合法，即是否每个括号都能找到与之匹配的另一半，输出true或false。  

## 4. 学生管理系统

1、请选择合适的数据结构存储学生信息，设计出一个简易的学生管理系统。包括“添加学生，删除学生，查询学生，退出”四个功能。
要求：①学生信息包括id，name，age三个信息  

2、如果能将存储的信息持久化存储到文件中，那更加好了。

## 5. 文件的加密和解密

希望你能用IO的知识对一个已有TXT文件进行加密并写到新的文件中，再对新的文件进行解密并打印文件内容，加密的方法由你自己决定。

## 6. 打印第十行

你可以试着用shell脚本或者所学的编程语言来完成这道题：

给定一个文本文件 file.txt，请只打印这个文件中的第十行。

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
说明:

1. 如果文件少于十行，你应当输出什么？
2. 至少有三种不同的解法，请尝试尽可能多的方法来解题。





#后端学习路线

## 学习内容

在接下来一个月的招新时间内，同学们可以从这几个方面学习后端的内容：

1. 语言基础
2. Linux操作基础

以编程语言基础为主，顺带了解Linux的基本操作。当然，你可以直接在Linux上开始你的学习。

## 学习路线

### 了解后端

后端是干什么的？后端在网页开发中的主要职责是什么？在开始学习之前，了解后端的基础概念将有助于之后的学习。

### 语言基础部分

#### 选择编程语言

各种语言都可以进行后端开发。在语言基础部分，你可以选择Java、C++、Go中的任意一种编程语言来开始你的学习。招新题是语言无关的，所以请放心选择。当然，在进行选择之前，最好了解一下这些编程语言各自的特性，以帮助你做出更明智的选择。

- [Java 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/java/java-tutorial.html)
- [C++ 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/cplusplus/cpp-tutorial.html)

- [Go 语言教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/go/go-tutorial.html)

#### 选择一个顺手的代码编辑器|IDE

如果不想用记事本编程，那就选择一个好用的代码编辑器或者IDE吧。

最好用的代码编辑器，不过配置可能会花不少脑筋：

- [Visual Studio Code - Code Editing. Redefined](https://code.visualstudio.com/)

不想动脑筋的话，Jetbrains的各种IDE是你的又一个老师：

- [IntelliJ IDEA – 领先的 Java 和 Kotlin IDE (jetbrains.com)](https://www.jetbrains.com/zh-cn/idea/)
- [CLion: A Cross-Platform IDE for C and C++ by JetBrains](https://www.jetbrains.com/clion/)
- [GoLand by JetBrains: More than just a Go IDE](https://www.jetbrains.com/go/)

### Linux操作基础部分

熟悉了解Linux当然是越早越好。关于Linux，你可以从这几个方面进行了解：

1. Linux的操作指令
2. Linux的重要概念
3. 使用shell脚本

[Linux 教程 | 菜鸟教程 (runoob.com)](https://www.runoob.com/linux/linux-tutorial.html)

实操才是最好的学习方式。你可以用这样几种方式上手使用Linux系统：

1. 在虚拟机上安装Linux 下载 [VMware Workstation Pro | CN](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

2. 使用wsl在windows上安装Linux [安装 WSL | Microsoft Learn](https://learn.microsoft.com/zh-cn/windows/wsl/install)

3. 一台远程Linux服务器，哪个便宜选哪个，资本家的羊毛就要狠狠地薅：

    [腾讯云 产业智变·云启未来 - 腾讯 (tencent.com)](https://cloud.tencent.com/) 

   [阿里云-计算，为了无法计算的价值 (aliyun.com)](https://www.aliyun.com/?spm=5176.28340310.J_4VYgf18xNlTAyFFbOuOQe.1.66355027KbcesU)

   [共建智能世界云底座-华为云 (huaweicloud.com)](https://www.huaweicloud.com/)

## 一些建议

- 关于学习笔记
  - Markdown是一个很好的记录形式
  - Typora很好用，如果想支持国产软件可以买一个

- 学会使用搜索引擎也是很重要的，千万别被广告骗了！！！

- 如果想看视频的话就是B站.

- 如果想通过文档学习的话，菜鸟可以快速入门.
- 耐下性子看看英文文档也是很推荐的.



