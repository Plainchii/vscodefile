## 编程语言的概念

### 编程

**编程**：让计算机为解决特定的问题而使用某种程序设计语言编写程序代码，并最终得到结果的过程。

**计算机程序**：就是计算机所执行的一系列的**指令集合**，而程序全部都是用我们所掌握的语言来编写的，所以如果我们要控制计算机，就需要通过计算机语言向计算机发出指令。

### 计算机语言

**计算机语言**：人与计算机之间通信的语言。它是人与计算机之间传递信息的媒介。它通过特定的语法规则和语义约定，将人类可理解的指令转化为计算机可以执行的机器指令。

计算机语言的种类非常多，总的来说可以分成三大类：机器语言、汇编语言和高级语言。

计算机最终所执行的都是机器语言，它是由“0”和“1”组成的二进制数，二进制是计算机语言的基础。

**计算机语言**的范围比**编程语言**的范围更广，后者是前者的子集。比如：

- HTML 是**标记语言**，CSS 是**样式语言**，这两个是属于**计算机语言**；但不属于**编程语言**，因为它们编写出来的不是**程序**，只是简单的标记和样式。
- JavaScript 是属于**编程语言**，自然也属于**计算机语言**。

### 编程语言

编程语言是一种用于编写计算机**程序**的形式化语言。它定义了一套语法和规则，用来描述计算机程序的结构和逻辑，并精确定义了在不同情况下需要执行的行为。编程语言通过编写程序代码，将人类的思想和需求转化为计算机可以理解和执行的指令。不同的编程语言有不同的特点和用途，如JavaScript、Java、C++、Python等。这些特点至少有：

- 数据结构和算法、数据处理
- 流程控制（if语句、循环语句等）
- 引用机制和重用机制
- 设计思想

不同的编程语言，有不同的语法，必须遵守。

如今通用的编程语言有两种形式：汇编语言和高级语言。

- **汇编语言**：与机器语言实质是相同的，都是直接对硬件操作，只不过指令采用了英文缩写的标识符，容易识别和记忆。

- **高级语言**：主要是相对于低级语言而言，它并不是特指某一种具体的语言，而是包括了很多编程语言，比如：C 语言、C++、Java、C#、PHP、JavaScript、Python、Objective-C、Swift、Go 语言等。

## 编程语言的分类

### 翻译器

计算机不能直接理解任何除机器语言以外的语言，所以必须要把程序员所编写的高级语言翻译成机器语言，计算机才能执行程序。为此，我们需要一个翻译器。**程序语言翻译成机器语言的工具，被称为翻译器**。

由此可见，所谓的“翻译”，指的是将人类所编写的源代码转换（翻译）为机器能够执行的指令，这也被称为二进制化。

翻译器翻译的方式有两种：一种是**编译**，另一种是**解释**。两种方式之间的区别在于**翻译的时机**不同。

- **编译器**：在代码执行之前，事前把所有的代码一次性翻译好，生成中间代码文件，然后整体执行。

- **解释器**：边翻译，边执行（在代码执行时进行及时翻译，并立即执行）。当编译器以解释的方式运行时，也称之为解释器。

对应的语言，称之为“编译型语言”、“解释型语言”。

### 1、编译型语言

- 定义：需要事先通过编译器**把所有的代码一次性翻译（编译/转换）好**，然后整体执行。比如 exe 文件。

- 优点：执行效率高，运行更快。

- 不足：移植性不好，不跨平台；编译之后如果需要修改就需要整个模块重新编译。

- 编译型语言举例：C、C++

比如说，c 语言的代码文件是`.c`后缀，翻译之后文件是`.obj`后缀，系统执行的是 obj 文件；再比如， java 语言的代码文件是`.java`后缀，翻译之后的文件是`.class`后缀。（但是，Java 语言不是严格的 编译型语言，这个一会儿会讲）

以 C 语言的`hello.c`来举例：

```c
#include <stdio.h>
int main(int argc, char const *argv[])
{
  printf("Hello world!");
  return 0;
}
```

对于以上 C 代码，main 是程序入口，实现的功能是打印字符串`hello world`到屏幕上，编译和执行过程如下：

1. C 语言代码经过预处理（比如依赖处理、宏替换）。以上方代码示例，`#include<stdio.h>`会在预处理阶段被替换。
2. 编译：编译器会把 C 语言翻译成汇编程序。一条 C 语言通常被编译为多条汇编代码，同时编译器会对程序进行优化，生成目标汇编程序。
3. 汇编语言通过汇编器再汇编成目标程序`hello.o`。
4. 链接：程序中往往包含一些共享目标文件，如示例代码中的`printf()`函数位于静态库，需要经过链接器进行链接。

![20211030-0031-2](https://img.smyhvae.com/20211030-0031-2.png)

（上方图片的来源：[JavaScript 基础-基本概念](https://www.jianshu.com/p/230093183f47) ）

![20211030-0026-2](http://img.smyhvae.com/20211030-0026-2.png)

（上方图片的来源：[编译型语言](https://p.0x06.cn/zh/program/) ）

### 2、解释型语言

- 定义：在运行过程中（runtime）通过解释器**边翻译边执行**（也就是逐行翻译：翻译一行，执行一行），不需要事先一次性翻译。

- 优点：移植性好，跨平台。

- 缺点：运行速度不如编译型语言。

- 解释型语言举例：JavaScript、PHP、Python。

### Java 语言

Java 语言是属于半编译半解释型语言。翻译过程：

（1）编译：`.java`代码文件先通过 javac 命令编译成`.class`文件。

（2）执行：`.class`文件再通过 jvm 虚拟机，解释执行。有了 jvm 的存在，让 java 跨平台了。

### 对注释的认知

很多人认为：代码注释是多余的。他们的理由是：如果注释太多，说明代码写得不清晰；而且，代码更新的同时，如果注释没更新，那段注释就成了磁盘上的垃圾，误导他人。

还有人认为：注释应该尽可能详细，就像写小作文一样。

上面这样的理由，都不具有说服力。我告诉你为什么要写注释：

1. 所有注释都是必要的吗？当然不是。注释不应该用来解释某些代码正在做什么。如果代码无法清楚到去解释自己时，那么代码需要变得更简单。有一些例外，比如正则表达式和复杂算法通常会从解释他们正在做什么事情的注释中获益很多。

2. 注释用于解释为什么某些代码存在时很有用。大多数注释都是针对代码本身无法包含的信息，例如决策背后的推理、业务流程、业务逻辑、注意事项、防踩坑指南、参考链接。

3. 注释即文档，需要持续更新维护，新陈代谢。文档也会过期，但不能因噎废食。即便文档过期，至少它记载了曾经的开发记录。

