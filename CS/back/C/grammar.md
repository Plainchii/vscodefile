
 
1.定义程序的目标。2.设计程序。3.编写代码。4.编译。5.运行。6.测试。7.维护和修改程序。
我们在编写C/C++程序时，对于任何函数都必须一个不漏地
指定其类型。如果函数没有返回值，一定要声明为void类
 
void*可以指向任何类型的数据。
 

### 类型转换

#### 自动类型转换
float f = 100;
![r](D:/gitphoto/134S535R-0.png)
average = (double) sum / count
 
 
return(char)('a' + x);
 
crtlku/ctrl kc注释
 
printf（“%d%d\n”）;是个换行，\n是转义字符，表示换行。
printf("%d",a);完整应该这么用，a是你要输出的变量名。%d是个占位符，它为一个int型数据站位，一个printf中可以有多个占位符。如：
printf("%d%d%f",x,y,z);
%f也是占位符，它为float型数据站位，占位符的对应关系是顺序对应的，即第几个占位符给第几个变量站位，与数据类型无关。
 
 
使输出的int型的数值以2位的固定位宽输出。如果不足2位，则在前面补空格；
如果超过2位，则按实际位数输出。
如果输出的数值不是int型，则进行强制类型转换为int，之后按上面的格式输出。
举例如下：
printf("%2d",12); // 输出12
printf("%2d",1); // 输出 _1 (_代表空格)
printf("%2d",102); // 输出102
printf("%2d",12.23); // 输出12 (强制类型转换，即取整数部分)
 
 
while语句创建了一个循环，重复执行直到测试表达式为假或0。while语 句是一种入口条件循环，也就是说，在执行多次循环之前已决定是否执行循 环。因此，循环有可能不被执行。循环体可以是简单语句，也可以是复合语句。
形式： 
while( expression ) 
statement
在expression部分为假或0之前，重复执行statement部分。 
 
关系运算符的优先级比算术运算符（包括+和-）低，比赋值运算符高
优先级：算术运算符>关系运算符>赋值运算符
 
scores += 20 与 scores = scores + 20 相同 
dimes -= 2 与 dimes = dimes - 2 相同
 
printf("%4.2f",1.2 ); //输出结果 1.20
printf("%4.2f",1.195 ); //输出结果 1.20
printf("%4.2f",1.194 ); //输出结果 1.19
printf("%4.2f",12.195 ); //输出结果 12.20
 
%g用来输出实数，它根据数值的大小，自动选f格式或e格式（选择输出时占宽度较小的一种），且不输出无意义的0。即%g是根据结果自动选择科学记数法还是一般的小数记数法
  printf("%g\n",0.00001234);
  printf("%g\n",0.0001234);
  printf("%.2g\n",123.45);
  printf("%.2g\n",23.45);
1.234e-05
0.0001234
1.2e+02
23
对于指数小于-4或者大于给定精度的数值,按照%e的控制输出,否则按照%f的控制输出.
 
 
 
int i = 833;
//对齐不足补空格
printf("%4d-", i);//右对齐
printf("\n");
printf("%-4d-", i);//左对齐
printf("\n");
printf("%d-",i);//默认左对齐
 
 
1.你们现在的条件太好了，有什么印象笔记、有道云笔记、Office365等，这些软件居然还可以多类终端同步。而且还有诸如Visio、UML等大型的工程级工具。
2.想当年，我们在实验室被导师逼着，直接把代码写到书上的空白处。一个简单的程序，要写好几页。要修改或做分析的话，还需要用稿纸粘上去。到了学期末，整本书都是乱七八糟的代码与纸张。不过，这种艰苦环境下，的确锻炼出很多东西，我们那一代的很多大牛也是类似这样苦出来的。
3.现在，我基本上，有3个方法：
--A.看到经典的代码，会先在有道云笔记上贴着。
--B.太经典的，会开一个Visio来进行平面分析。
--C.行数比较多的代码或项目，会动用UML工具来进行层次分析或反向分析。
 
return (char)('a' + x);
 
crtl ku/ctrl kc注释
 
printf（“%d%d\n”）;是个换行，\n是转义字符，表示换行。
printf("%d",a);完整应该这么用，a是你要输出的变量名。%d是个占位符，它为一个int型数据站位，一个printf中可以有多个占位符。如：
printf("%d%d%f",x,y,z);