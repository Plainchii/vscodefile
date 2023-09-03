<div class="rno-markdown undefined rno-">

        主要是看官方的入门文档（_https://ww2.mathworks.cn/help/matlab/getting-started-with-matlab.html_）写的一些笔记。由于Matlab风骚的语法与我有(hua)限(shui)的时间所制，我只是简单地写了这篇笔记，权当记录与提示，不要指望这样一篇东西可以帮助读者掌握Matlab，该自己查文档还是该去查。
<figure class=""></figure>

**简介**

        MATLAB（矩阵实验室）是MATrix LABoratory的缩写，是一款由美国The MathWorks公司出品的商业数学软件（也是一种语言）。它主要用于数学计算有关的编程，特别是如其名字，用于矩阵运算。类似于Python它也是交互式脚本语言，它是一整套的开发环境，大量的内置函数和独立的编程语言的集结。要使用它最方便的就是直接去Matlab官网进行购买下载，官方有提供详细的使用文档，也有很好的人工客服服务，虽然价格不菲，但是许多高校都有为学生购买Matlab，我在这里使用的便是学校购买给我们学生的Matlab R2018a。

        由于我参考的是官网提供的R2017b版的文档，所以部分内容可能会有出入。

<figure class=""></figure>

**快速开始**

        1.启动Matlab后我们直接就可以在命令行窗口进行类似之前说Python时说到的交互式编程，编程途中内存中的数据会显示在右侧工作区。

        2.每一句语句可以选择以分号(;)结尾或者直接回车结尾。分号结尾的语句会进行运算但不会响应在命令行中。直接回车结尾的语句计算完成后的答案会直接写在命令行中。

        3.显示出来的数据若有指定变量，则会响应那个指定变量，否则会储存在ans变量中并响应ans变量。

        4.在Matlab中类似与Python，是不需要指定变量的类型的。

        5.Matlab中也不需要使用大括号来表示代码块，却也不需要像Python使用缩进来表示，而是使用了很原始的方法，在例如if语句开始后使用end字符表示代码块的结束。(也就是又有点类似于Pascal中的begin-end)

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 23.47%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/zvfps7y9uk.png)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 39.16%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/6m914ib912.png)</div></div></figure><figure class=""></figure>

**矩阵**

        1.矩阵，也就是C里常说的数组，在Matlab中可以非常轻松地进行运算。Matlab中所有变量都是矩阵，与数据类型无关。

        2.在Matlab中，我们使用中括号来创建，元素之间使用逗号或空格来隔开，多维矩阵中维与维用分号隔开。

        3.Matlab中可以使用zeros(x,y)函数快速生成x行y列的全零矩阵，相似的也有ones(x,y)全一矩阵，rand(x,y)得于0~1的均匀分布随机矩阵和randn(x,y)得正态分布的随机矩阵。

        4.Matlab可以使用运算符直接进行矩阵运算

        5.但是矩阵与矩阵之间时，乘号(*)表示的是矩阵的叉乘（内积），想要分别对每个元素进行运算使用点号(.)，例如点乘(.*)

        6.矩阵名加单引号(')表示矩阵转置
<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 39.04%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/up2l9d87n3.png)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 38.78%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/82gpf093gt.jpeg)</div></div></figure>

        7.inv(矩阵)可以得到逆矩阵

        8.次方运算使用^号

        9.数组与数组也可以以上面的规则利用方括号和逗号分号进行合并

        10.复数使用x+yi或x+yj来表示

        11.使用小括号和下标来读取矩阵的元素，也可以使用单个的序号来表示一列为序号进行遍历获取元素。要特别注意Matlab中的矩阵下标是从1开始的，都是正整数值。

        12.不能读取不存在的下标但是可以写入不存在的下标，矩阵会自动进行零扩展

        13.可以使用矩阵(start:step:end)来取矩阵一个范围的内容

        14.可以使用format来规定接下来要以什么格式显示数据，这个操作不会影响数据的内容只影响在命令行的显示。Matlab中数据默认是double双精度储存的。注意，可以使用format compact来取消命令行打印时的默认空行

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 100%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/gzql1wv6i3.jpeg)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 60.72%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/b5idurrbca.png)</div></div></figure>

        15.可以使用sum()函数来计算矩阵元素和，此函数默认是计算矩阵列向量和然后组成为新的行向量。同时，sum函数可以通过第二个参数指定维度进行有限转置。

        16.diag()函数可以获取矩阵的主对角线形成一个列向量，fliplr()函数可以将矩阵左右翻转，这样就可以方便地计算其对角线。

        17.这里我们可以利用自带的幻方矩阵生成函数magic()试一下

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 36.48%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/tvu7uqqyo0.png)</div></div></figure>

        18.还有几个数学计算常用的函数，计算行列式值的det()，参数为矩阵。

        19.计算特征值的eig()

        20.简化矩阵为阶梯型的rref()。（早知道能这么搞线性代数的作业就好做多了嘛（小声
<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 32.15%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/03p2ldv5dn.png)</div></div></figure><figure class=""></figure>

**工作区**

        1.在Matlab运行时产生或引入的变量会显示在右侧的工作区中。

        2.除了直接查看工作区，也可以利用whos *来在命令行中显示工作区的变量们。（星号指想要查看的变量，省略时打印全部变量）

        3.通过命令save fileName.mat来保存当前的工作区，通过load fileName.mat来读取之前保存的工作区 
<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 66.84%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/6sw5txumss.png)</div></div></figure>

        4.那么既然说到了工作区，工作区其实类似于其他语言的作用域的概念，在Matlab中变量分为全局变量，局部变量，局部静态变量。其中局部变量和其他语言没什么区别。全局变量指被global关键字修饰的变量，它们要先声明再赋值，且所有声明过的工作区都会保有相同的那一份变量直到被clear释放，习惯上全局变量都是全大写字母组成的。然后局部静态变量比较特殊，是指被函数初始化却又希望可以不随着函数结束而被清除的变量，用persistent关键词声明，它们只能在函数中声明，然后初始化，他就不会离开工作区直到被clear。

        5.下面的例子可以看到，一开始没有被赋值的全局变量是一个空矩阵，然后由于脚本对其赋值了，所以变成了10

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 29.21%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/yqx6ftbb7c.png)</div></div></figure><figure class=""></figure>

**字符串相关**

        1.Matlab中字符串使用单引号括住。若本来就存在括号，使用双引号替换字符串中的单引号即可。

        2.和之前说的一样，所有变量都是矩阵，字符串也是。所以可以以处理矩阵的方式处理字符串中的字符。

        3.若需要进行类型转换，使用num2str()函数或int2str()等等

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 31.13%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/uyajsxnf84.png)</div></div></figure>

        4.若想要将字符串转换为ASCII码数组，直接对其用double()转换就可以。相对的，若想逆向转换，使用char()就可以。

        5.由于字符串实际上就是字符数组，所以也可以类似普通矩阵用方括号来拼接。相应的，当要把字符串用分号竖向连接时，要么注意保持字符串长度相同，要么使用char()函数拼接，函数会自动在较短的字符串的尾部补上空格。

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 35.46%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/0pdjkxee66.png)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 23.73%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/lytl1q2si1.png)</div></div></figure><figure class=""></figure>

**函数**

        1.Matlab调用函数的方式和其他的语言相似，函数名(参数1,参数2...)，然后函数执行后返回返回值。

        2.和其他语言不同的是，由于一切变量都是矩阵，Matlab的函数可以有多个返回值，类似矩阵形式返回，返回值被括在中括号中用方括号隔开

        3.对于没有参数也没有返回值的函数，可以直接写函数来调用，类似清空命令行用的函数clc，创建空结构体所用的struct

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 34.7%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/e4cdoxyymh.png)</div></div></figure>

        4.在使用函数的时候，有时候我们可能希望将其他函数作为参数传递给别的参数，可以使用@运算符（Matlab的语法真奇特）获取函数句柄，句柄可以将这个函数转为一个自定义名字的可被调用的函数变量。使用方法和正常的函数是一样的。

        5.而上面的这个骚操作的用途就是因为有些函数被称为功能函数，常常用于计算非线性函数。例如有一个fminsearch()函数就接收第一个参数为目标函数句柄，第二个参数为估计位置，会寻找估计位置旁的局部最小值的位置。

        6.例如下面这样就能寻找sin()的最小值位置    
<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 27.05%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/3s95i314wr.png)</div></div></figure>

        7.但是说到了寻找函数的最小值，一定要说如何创建函数了。在Matlab中函数的创建使用function关键字。仍然是Matlab神奇的语法：

function [返回值1,返回值2...]=函数名(参数1,参数2...) 函数体 end

其中若函数的返回值只有一个可以不用加中括号。

        8.任何非匿名函数都需要在文件中定义，而这样的函数文件中每个文件都需要有一个主函数，在文件中它是第一个函数，它有很广的作用域，被文件外的函数直接调用，相比之下写在主函数后面的函数都是局部的子函数，只能被文件内部调用。和其他语言一样每个函数都有自己的局部作用域(工作区)。

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 27.81%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/pvuwhdwo0u.png)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 15.82%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/43c0h1bod8.png)</div></div></figure>

        9.上面说到匿名函数，就像Lambda表达式，Matlab中也有，用法类似于Python，只能当作return语句用。只不过在Matlab函数需要在文件中定义这个麻烦的要求下，匿名函数变得十分重要。格式是：

函数名=@(参数1,参数2)表达式
<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 38.14%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/egejwfzxya.png)</div></div></figure>

        10.局部函数

<figure class=""></figure>

**作图**

        1.在Matlab中我们可以非常方便地作图，主要是利用plot()进行二维图作图和利用surf()进行三维图作图。

        2.在plot()中可输入三个参数，分别是x轴取值函数，y轴取值函数，线条设定。其中线条设定是一个字符串，由颜色，样式，标记组成。例如'r--'代表红色虚线，'g:*'代表绿色星号组成的线。

        3.可以通过在plot中重复输入多次参数来同时绘制多条线在一幅图中，也可以在创建图后使用hold on指令来保留图像不被擦除从而绘制多条线。

        4.可以在绘制中使用xlabel()和ylabel和title()函数来标记轴和标题。

        5.对于三维曲面画图，使用surf()和三个轴的参数，其中通常Z轴是xy的函数。创建Z请先使用meshgrid()在此图的域中创建一组 (x,y) 点，然后再利用这个xy矩阵来计算z。

        6.对于三维曲线，可以使用plot3()来绘制

        7.可以使用subplot来绘制子图，用法查文档

        8.通常来说关闭绘图窗口会导致图被清空

        9.Matlab有复杂但非常完善的作图函数和数学分析函数，很值得在需要的时候查询官方文档学习使用，可以很轻松地处理大量的数据并做出想要做出来的图，也可以用于[图像处理](https://cloud.tencent.com/product/tiia?from_column=20065&amp;from=20065)的学习，Matlab可以很方便地读取图像像素值并转换为矩阵来处理。

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 83.42%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/m99vv32en1.jpeg)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 84.95%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/byl5euyktc.jpeg)</div></div></figure><figure class=""></figure>

**脚本编程**

        1.和别的语言编程一样将准备好的命令写入文件自动运行成为脚本。在命令行中使用edit fileName可以新建脚本进行编辑，脚本中命令的语法与上面交互式编程的说明是相同的。而运行脚本的方法是直接输入脚本文件的名字

        2.Matlab脚本中注释使用百分号(%)开始，也就是因为这样Matlab的求余为mod()。

        3.for循环条件不需要括号，类似Python不需要冒号，但是由于Matlab没有大括号所以要以end结尾。例如写for n=1:10代表从n从1到10进行遍历

        4.while循环也类似，要以end结束

        5.可以使用break和continue操作

        6.当误入无限循环时可使用ctrl+C跳出

        7.一样有ifelse和elseif语句，要类似于for用end结束语句块

        8.也有switch语句，case写在end块中，可以有otherwise代替default

        9.连续的三个点(...)在一行的结尾代表行继续在下一行

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 32.15%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/19d65q55kn.png)</div></div></figure>

        10.这里来稍微详细说下冒号运算符(:)。冒号运算符在之前【Python入门】里面其实就有出现过，在Matlab里这也是相当重要的符号。在Matlab中，冒号运算符的完整格式是 (start:step:end)这点和Python的(start:end:step)稍有不同需要注意。冒号运算符执行代表从start到end的区域内按照start+step*0迭代得到全部数据。值得注意的还有一点就是当只有一个冒号时，表示的是(start:end)，此时的step默认为1。且当只有运算符没有指定数字类似( : )时，代表从此数据的开始到结束以1开始迭代。

        11.刚才上面说到的冒号运算符自然就可以很方便地用来给矩阵赋值或删除矩阵的内容。这里要提到删除矩阵的行或列的方法是利用冒号运算符之类的方法取得矩阵的行或列向量然后将整个向量赋值为空的方括号 [ ] 。

        12.在这里再稍微说个新引入的运算符，Matlab除了我们常用的/表示除法外，还支持使用反斜杠(\)表示左除，也就是小学教的除和除以的关系。

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 72.96%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/88azxge21k.png)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 72.2%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/pgcu8f200z.png)</div></div></figure><figure class=""></figure>

**元胞数组与结构体**

        1.元胞(cell)是Matlab一个新的设计，类似于C语言的结构体，它允许将不同数据类型的数据放在同一个数组中看待。

        2.元胞的新建方法是使用大括号括住元素，各个元素之间用逗号隔开。若是多维的元胞矩阵，则各位间用分号隔开，这点和矩阵其实是一样。

        3.元胞数组元素的引用使用的是大括号括住的下标，和矩阵一样，各种矩阵类似的操作都可以在元胞数组中使用，例如写入不存在的位置会自动新建元素

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 44.78%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/us9vjwfn0a.png)</div></div></figure>

        4.而结构体就更类似C中的struct了，它比起元胞更好的地方在于可以给各个元素命名。结构体利用struct函数来创建，struct函数可以带好几个参数，详细的使用在官方文档都有介绍。

        5.构建出结构体后利用点运算符直接写入想要的数据就可以了，很方便。

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 29.98%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/nj0qmi4g22.png)</div></div></figure><figure class=""></figure>

**面向对象**

        1.作为现代语言Matlab自然也有面向对象的设计(2008a以后加入)，只不过还不够完善，感觉很混乱，简单记记吧

        2.首先，Matlab中若想要定义类的话，有两种办法，一种是新建文件夹@类名，然后在文件夹内写成员函数文件；另一种也更实用的方法是在和类名相同的文件中用classdef来进行类的定义。

        3.在Matlab中类的定义从classdef关键字开始到end结束，与其他语言不同的是Matlab各种不同的方法变量又要分别放在不同的块中，最主要的块：变量放在属性定义块properties中，end结束；函数放在方法定义块methods中，end结束。没那么重要的块：想被事件监听器响应的事件变量放在事件定义块events中，end结束；枚举成员放在枚举定义块enumeration中，end结束。

        4.Matlab中类的继承是利用小于号(&lt;)区分的，在类定义的时候在类名后面用小于号继承父类，Matlab中一切类的父类是handle类。

        5.关于类的访问控制，Matlab有四种访问属性：public,private,protected和只能在构造函数中访问的immutable。通过在定义块的后面用括号带入参数，对于属性定义块写入SetAccess=访问符可以进行控制，对于方法定义块，需要写入的是Access=访问符。也是很神奇。

        6.关于面向对象我写的很少，因为实际上真的不好用，语法蛮奇怪的，凑合着吧

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 39.8%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/rv0we8t5j5.png)</div></div></figure><figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 24.49%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/ihzg2spvrd.png)</div></div></figure><figure class=""></figure>

**导入**

        1.那么最后是如何导入外部的包，Matlab的导入其实相对比较简单，只要指定好系统的搜索路径就可以了

        2.设置搜索路径很方便，只要在工具栏-主页-环境-设置路径设置就好，然后Matlab可以引入java的jar包（也可以将Matlab导出为jar包），把jar包放进自定义的路径里

        3.最后利用import关键词，和java一样的写法就可以引入Java的类了

<figure class=""><div class="rno-markdown-img-url" style="text-align: center;"><div class="rno-markdown-img-url-inner" style="width: 42.48%;">![](https://ask.qcloudimg.com/http-save/yehe-7604580/9g59ln23x9.jpeg)</div></div></figure><figure class=""></figure>

**后记**

        1.这篇写了很久，看了很多文档才勉强写完，实际上也蛮不满意的，摸了

        2.能一行一行看到这里还顺手点了个赞的一定是真爱了

        3.Matlab的官方文档虽然中英混杂，但是真的非常非常详细，在整体没有什么好的教程的情况下，官方的快速入门文档和整个完整文档库确实就是最好的教程了

        4.官方的快速入门文档我看了下2018a的版本编排更加合理了，可惜还没有中文翻译，只能勉强啃了

        5.快速入门_https://ww2.mathworks.cn/help/matlab/getting-started-with-matlab.html_

 6.完整文档_https://ww2.mathworks.cn/help/matlab/index.html_

        7.就酱，谢谢阅读！
</div>