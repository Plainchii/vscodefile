

变量，数据类型

函数

类和对象

文件操作

异常处理






































## 缩进

缩进是指代码行开头的空格。

**在其他编程语言中，代码中的缩进只是为了便于阅读，而 Python 中的缩进非常重要。**

**Python 使用缩进来表示代码块。**

### 例子

```python
if 5 > 2:
	print("hello word!")
```

> 我们有一个误区，就是很多人觉得python的空格数量是固定的，其实空格是由程序员自己决定的，最少要有1个，最常见的是4个（在vim如果没用配置空格数量的话，可能会是8个，所以你需要去`~/.vimrc`配置中配置一下

必须在同一个代码块中使用相同数量的空格


## 注释

> 我很喜欢的一点，注释和命令行中的注释融入一起，又有简洁的语法，💘bash心碎了

```python
print("这个没用注释")
#print("这个是一个注释")
```

**内容多了也可以用字符串注释**

```python
"""
This is a comment
written in
more than just one line
"""
print("Hello, World!")
```

> ipython支持语法高亮，而且还有就是ipython是可以和你的命令行融为一体的



## 输入

Python 允许用户输入。

这意味着我们可以要求用户输入。

Python 3.6 中的方法与 Python 2.7 中的方法有些不同。

Python 3.6 使用该`input()`方法。

Python 2.7 使用该`raw_input()`方法。

以下示例询问用户名，当您输入用户名时，它会打印在屏幕上：

```python
In [140]: username = input("请输入你的名字:")
请输入你的名字:xiongxinwei

In [141]: username
Out[141]: 'xiongxinwei'
```
## 变量

**解释性的动态语言python和JavaScript一样，是不需要指定类型，因为动态语言的纠错是在程序编写完成执行的时候，从上往下解析。**

```python
In [3]: x = 5
   ...: y = "John"
   ...: print(x)
   ...: print(y)
5
John
```

**你可以用类型强转，定义**

```python
In [4]: x = str(3)    # x will be '3'
   ...: y = int(3)    # y will be 3
   ...: z = float(3)  # z will be 3.0

In [5]: type(x)
Out[5]: str

In [6]: type(y)
Out[6]: int

In [7]: type(z)
Out[7]: float
```



### 全局变量

**在函数之外创建的变量 — 称为全局变量。**

每个人都可以使用全局变量，无论是函数内部还是外部。

在函数外部创建一个变量，并在函数内部使用它

```python
x = "awesome"

def myfunc():
 print("Python is " + x)

myfunc()
```



### 函数中创建全局变量

**在函数中创建全局变量可以用`global`关键字来创建。**

```python
In [8]: def myfunc():
   ...:   global x
   ...:   x = "fantastic"
   ...:
   ...: myfunc()
   ...:
   ...: print("Python is " + x)
Python is fantastic

In [9]: x
Out[9]: 'fantastic'
```

### python中的数据类型

默认情况下，Python 在这些类别中内置了以下数据类型：

| 文字类型：   | `str`                              |
| ------------ | ---------------------------------- |
| 数字类型：   | `int`, `float`, `complex`          |
| 序列类型：   | `list`, `tuple`, `range`           |
| 映射类型：   | `dict`                             |
| 套装类型：   | `set`,`frozenset`                  |
| 布尔类型：   | `bool`                             |
| 二进制类型： | `bytes`, `bytearray`, `memoryview` |
| 无 类型：    | `NoneType`                         |

#### bool
In [76]: a == "Hello Word"
Out[76]: True


### 获取数据类型

**获取数据类型在上面我们试过`type(name)`方法**

```python
In [16]: a = bytes(12)

In [17]: type(a)
Out[17]: bytes

In [19]: a
Out[19]: b'\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00'
```

### 设置数据类型

| Example                                      | Data Type  | Try it                                                       |
| :------------------------------------------- | :--------- | :----------------------------------------------------------- |
| x = "Hello World"                            | str        | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_str) |
| x = 20                                       | int        | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_int) |
| x = 20.5                                     | float      | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_float) |
| x = 1j                                       | complex    | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_complex) |
| x = ["apple", "banana", "cherry"]            | list       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_list) |
| x = ("apple", "banana", "cherry")            | tuple      | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_tuple) |
| x = range(6)                                 | range      | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_range) |
| x = {"name" : "John", "age" : 36}            | dict       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_dict) |
| x = {"apple", "banana", "cherry"}            | set        | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_set) |
| x = frozenset({"apple", "banana", "cherry"}) | frozenset  | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_frozenset) |
| x = True                                     | bool       | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_bool) |
| x = b"Hello"                                 | bytes      | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_bytes) |
| x = bytearray(5)                             | bytearray  | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_bytearray) |
| x = memoryview(bytes(5))                     | memoryview | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_memoryview) |
| x = None                                     | NoneType   | [Try it »](https://www.w3schools.com/python/trypython.asp?filename=demo_type_nonetype) |



### 设置特定数据类型

如果要指定数据类型，可以使用以下构造函数：

| Example                                  | Data Type |
| :--------------------------------------- | :-------- |
| x = str("Hello World")                   | str       |
| x = int(20)                              | int       |
| x = float(20.5)                          | float     |
| x = complex(1j)                          | complex   |
| x = list(("apple", "banana", "cherry"))  | list      |
| x = tuple(("apple", "banana", "cherry")) | tuple     |
| x = range(6)                             | range     |
| x = dict(name="John", age=36)            | dict      |
| x = set(("apple", "banana", "cherry"))   | set       |



# 字符串

python中的字符串用单引号或双引号括起来。

'hello'与"hello"相同。

您可以使用以下函数显示字符串文字`print()`：

```python
In [20]: str(12)
Out[20]: '12'

In [21]: a = "smile"+"hello"

In [22]: type(a)
Out[22]: str

In [23]: a
Out[23]: 'smilehello'
```

> 字符串输出多方数据有两种方式：
>
> + 可以使用三个双引号
> + 可以使用三个单引号

```python
In [24]: a = """Lorem ipsum dolor sit amet,
    ...: consectetur adipiscing elit,
    ...: sed do eiusmod tempor incididunt
    ...: ut labore et dolore magna aliqua."""
    ...: print(a)
Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.
```


### 字符切片
**在python中，字符串是作为数组的形式存在的，方括号可用于访问字符串的元素。**

> 可以使用切片截取字符串的范围

```python
a = Lorem ipsum dolor sit amet,
consectetur adipiscing elit,
sed do eiusmod tempor incididunt
ut labore et dolore magna aliqua.

In [28]: a[10:30]
Out[28]: 'm dolor sit amet,\nco'

In [29]: a[10:20]
Out[29]: 'm dolor si'

In [30]: a[10]
Out[30]: 'm'
```

```python
In [41]: a = "hello word"

In [42]: print(a[2:])
llo word

In [43]: print(a[:2])
he

In [49]: print(a[-6:-2])
o wo

In [51]: print(a[-6:-1])
o wor
```

## 方法

### 字符串的长度

**字符串的长度可以用`len()`求出，这在很多语言中是一样的**

```python
In [31]: len(a)
Out[31]: 123
```

### 检查字符串中是否包含某个字母

**使用`in`关键字检查是否包含**

```python
In [32]: 'a' in a
Out[32]: True

In [33]: 'asd' in a
Out[33]: False

In [34]: print('a' in a[10:30])  #是否包含在a字符串中10~30序列里面
True
```

**甚至，你可以使用`if`或者`for`判读**

```python
txt = "The best things in life are free!"
if "free" in txt:
  print("Yes, 'free' is present.")

if "free" not in txt:
  print("No, ")
```

### 大写
该`upper()`方法以大写形式返回字符串：

```python
a = "Hello, World!"
print(a.upper())
```

### 小写
该`lower()`方法以小写形式返回字符串：

```python
a = "Hello, World!"
print(a.lower())
```

### 删除空格

空白是实际文本之前和/或之后的空格，您通常希望删除该空格。
```python
a = " Hello, World! "
print(a.strip()) # returns "Hello, World!"
```

### 替换字符串

该`replace()`方法用另一个字符串替换一个字符串：

```python
a = "Hello, World!"
print(a.replace("H", "J"))
```

### 拆分字符串
该`split()`方法返回一个列表，其中指定分隔符之间的文本成为列表项。

如果找到分隔符的实例，该`split()`方法会将字符串拆分为子字符串：

```python
a = "Hello, World!"
print(a.split(",")) # returns ['Hello', ' World!']
```

### 字符串组合数字

可以通过使用方法来组合字符串和数字`format()`！

该`format()`方法接受传递的参数，格式化它们，并将它们放在占位符所在的字符串中 `{}`：

使用`format()`方法将数字插入字符串：

```python
age = 36
txt = "My name is John, and I am {}"
print(txt.format(age))
```

**format里面可以直接传入数字**

```python
In [63]: age = 12

In [64]: x = "我的名字叫xiongxinwei，我的年龄是{}"

In [65]: x.format(age)
Out[65]: '我的名字叫xiongxinwei，我的年龄是12'

In [66]: x.format(18)
Out[66]: '我的名字叫xiongxinwei，我的年龄是18'
```

**可以接收无限次数的参数**

```python
quantity = 3
itemno = 567
price = 49.95
myorder = "I want {} pieces of item {} for {} dollars."
print(myorder.format(quantity, itemno, price))
```


# 分支循环

## if基本语法
python 中的分支语句的部分靠**缩进**来确定该语句是否属于该分支，同时 if 或 else 后有一个冒号。
**注意: python 中 elif 即 else if ，如果写 else if 会出现错误。**

```python
#第一种结构
if(1>0):
    print("属于该分支")
    print("还属于该分支")
print("不属于if分支")

#第2种结构
if(1<0):
    print("结构2")
else:
    print("结构2")
    
#结构三
if(1<0):
    print("结构三")
elif(3>2):
    print("结构三")
else:
    print("当上面的条件均不成立执行该语句")
```

> 结果：
> 属于该分支
> 还属于该分支
> 不属于if分支
> 结构2
> 结构三

**if 语句写成表达式：**
In [62]: c = a if(a<b) else b

**if 语句的嵌套**
```python
a=1
b=2
c=3
if(a==1):
    if(b==2):
        if(c==3):
            print("嵌套")
```

## 循环

**💡 注意：python 中是没有 ++ 和–-运算符的**

> 可以类比Go语言：
>
> + Go语言没有三元运算符
>
> + Go语言只有`i++` ，不可以写成`++i`
>
> + python可以写成 `++a`赋值
>
>   ```python
>   In [73]: a
>   Out[73]: 11
>   
>   In [74]: ++a
>   Out[74]: 11
>   
>   In [75]: a = ++a
>   
>   In [76]: a
>   Out[76]: 11
>   ```


### while循环

```python
#while循环
i=1
while(i<3):
    print("while循环")
    i+=1
```

**break 和 continue**
break 是**跳出当前**的循环结构，continue 是**跳过本次**循环，执行下一次循环

**while 与 else**
在 python 中，else 还可以和 while 配合使用，**当循环条件为假时执行 else 语句**内的内容，所以，如果是 break 跳出的循环，由于循环条件还可能为真，那就可能不执行 else 语句的内容。
示例：

```python
i=1
while(i<5):
    if(i==3):
        break
    print("while循环 ",i)
    i+=1
else:
    print("循环条件为假")

```
> while循环  1
> while循环  2

**从结果我们可以看到，由于跳出循环时循环条件还为真，并没有执行 else 语句**




### for 循环

格式：**for 变量 in 可迭代对象**
例子：

```
for a in "abcde" :
    print(a)

```
> a
> b
> c
> d
> e

如果想实现 C 语言中的 `for(int i=0;i<10;i++)` 这一语句，那我们则要使用 range 函数帮我们生成一个可迭代的数字序列

一般有三种情况：

1. **range(x) 即从 0 到 x，不包含 x，每次加一**

2. **range(start,stop,step) 表示从 start 开始，间隔为 step，结束于 stop，若没有 step 则默认加一
   类似于 for(int i=start,i<stop;i+=step)**

   ```python
   In [8]: for a in range(5):  #01234
      ...:     print(a)
      ...: for b in range(5,1,-2):  #531
      ...:     print(b)
      ...: for c in range(1,5):	#1234
      ...:     print(c)
      ...:
   ```




# python函数
> 函数是一段代码，只有在被调用时才会运行。
> 您可以将数据（称为参数）传递给函数。
> 函数可以返回数据作为结果。

## 语法
要调用函数，请使用函数名称后跟括号：

```python
def my_function():
  print("Hello from a function")

my_function()
```

要让函数返回值，请使用以下`return` 语句：

```python
In [26]: def my_function(x):
    ...:   return 5 * x
    ...:

In [27]: my_function(132)
Out[27]: 660

In [28]: my_function(0)
Out[28]: 0

In [29]: my_function(-10)
Out[29]: -50
```

## 参数
**默认参数**

```python
In [5]: def my_function(fname,lname):
   ...:     print(fname + " " + lname)
   ...:

In [6]:

In [6]: my_function("Emil","Refsnes")
Emil Refsnes
```
### 任意参数*args

如果您不知道将传递给函数`*`的参数数量，请在函数定义中的参数名称前添加一个`*`。
这样，该函数将接收一个参数*元组*，并可以相应地访问这些项目：

```python
In [8]: def my_function(*kids):
   ...:   print("The youngest child is " + kids[2])
   ...:
   ...: my_function("Emil", "Tobias", "Linus")
The youngest child is Linus

In [9]: def my_function(*kids):
   ...:   print("The youngest child is " + kids[2])
   ...:
   ...: my_function("Emil", "Tobias")
---------------------------------------------------------------------------
IndexError                                Traceback (most recent call last)
```

### 关键字参数

您还可以使用*key* = *value*语法发送参数。

这样，参数的顺序就无关紧要了。

```python
In [11]: def my_function(child3, child2, child1):
    ...:   print("The youngest child is " + child3)
    ...:

In [12]: my_function(child1 = "Emil", child2 = "Tobias", child3 = "Linus")
The youngest child is Linus
```

### 任意关键字参数，**kwargs

如果您不知道将传递给函数的关键字参数的数量，请`**`在函数定义中的参数名称之前添加两个星号：

这样，函数将接收参数字典，并可以相应地访问项目：

```python
In [13]: def my_function(**kid):
    ...:   print("His last name is " + kid["lname"])
    ...:

In [14]: my_function(fname = "Tobias", lname = "Refsnes")
His last name is Refsnes
```
> 当你传入的是python的数据结构而不是某一个数字，用任意关键字参数或许是一个很好的办法



### 默认参数值

以下示例显示如何使用默认参数值。

如果我们调用不带参数的函数，它使用默认值：

```python
In [15]: def my_function(country = "Norway"):
    ...:   print("I am from " + country)
    ...:

In [16]: my_function("smile")
I am from smile

In [17]: my_function()
I am from Norway

In [18]: my_function("bell,email:3293172751@qq.com")
I am from bell,email:3293172751@qq.com
```



### 将列表作为参数传递

您可以将任何数据类型的参数发送给函数（字符串、数字、列表、字典等），它将在函数内部被视为相同的数据类型。

例如，如果你发送一个 List 作为参数，当它到达函数时它仍然是一个 List：

```python
In [19]: def my_function(food):
    ...:   for x in food:
    ...:     print(x)
    ...:

In [20]: fruits = ["apple", "banana", "cherry", "kiwi", "mango"]

In [21]: my_function(fruits)
apple
banana
cherry
kiwi
mango
```



## 通行证声明

`function`定义不能为空，但如果您出于某种原因有一个`function`没有内容的定义，请放入`pass`语句以避免出错。

```python
In [34]: def myfunction2():
    ...:   pass
    ...:
    ...:

In [35]: my_function2(1)
```



## 递归

Python 还接受函数递归，这意味着定义的函数可以调用自身。

递归是一个常见的数学和编程概念。这意味着一个函数调用自己。这样做的好处是，您可以遍历数据以得出结果。

开发人员应该非常小心递归，因为很容易陷入编写一个永不终止的函数，或者一个使用过多内存或处理器能力的函数。但是，如果编写正确，递归可能是一种非常有效且数学上优雅的编程方法。

在此示例中，tri_recursion()是我们定义为调用自身（“recurse”）的函数。我们使用k变量作为数据，每次递归时都会递减（ -1 ）。当条件不大于0时（即为0时）递归结束。

> 在递归中，一定要设置一个出口！

对于新开发人员来说，可能需要一些时间来弄清楚它是如何工作的，最好的方法是测试和修改它。

```python
In [37]: def tri_recursion(k):
    ...:   if(k > 0):
    ...:     result = k + tri_recursion(k - 1)
    ...:     print(result)
    ...:   else:
    ...:     result = 0
    ...:   return result
    ...:

In [38]: tri_recursion(6)
1
3
6
10
15
21
```
> 上面的递归可以理解为函数入栈，先进后出，事实上也是这样，在操作系统中我们学习到程序产生中断，当前的软件和硬件保存当前的状态，然后后面恢复程序，我们以为的顺序是下降的，实际上是上升的。

## 匿名函数

lambda 函数是一个小的匿名函数。

一个 lambda 函数可以接受任意数量的参数，但只能有一个表达式。

```
lambda arguments : expression
```

将 10 添加到参数`a`，并返回结果：

```python
In [39]: x = lambda a : a + 10
    ...: print(x(5))
15

In [40]: x = lambda a : a + 10

In [41]: x(1)
Out[41]: 11

In [42]: x(2)
Out[42]: 12

In [43]: x(x(3))
Out[43]: 23
```

> 前面很容易理解，我们看下后面调用`x(x(3))`：
> `x(3)` = 3 + 10 = 13
>
> `x(13)` = 13 + 10 = 23

**匿名函数可以有多个参数**
```python
In [46]: x = lambda a,b,c : a * b * c

In [47]: x(2,3,4)
Out[47]: 24
```


# Python类和对象

## 面对对象

Python 是一种面向对象的编程语言。

Python 中几乎所有的东西都是一个对象，有它的属性和方法。

一个类就像一个对象构造器，或者一个用于创建对象的“蓝图”。

要创建一个类，请使用关键字`class`：

```python
In [58]: class MyClass:
    ...:     x = 10
    ...:

In [59]: MyClass
Out[59]: __main__.MyClass

In [60]: MyClass.x
Out[60]: 10
```
**提议：建议对类名以大写为公有，小写为私有。**

## __init__() 函数
上面的示例是最简单形式的类和对象，在现实生活中的应用程序中并没有真正的用处。

要理解类的含义，我们必须了解内置的 __init__() 函数。

**所有类都有一个名为 init() 的函数，该函数总是在类启动时执行。**

使用 __init__() 函数将值分配给对象属性或创建对象时必须执行的其他操作：

```python
In [2]: class A:
   ...:     def __init__(self,age):
   ...:         self.age = 10
   ...:

In [7]: a = A(10)

In [8]: a.age
Out[8]: 10
```
> 参数`self`是对当前类实例的引用，用于访问属于该类的变量。

### self参数

参数是对当前类实例的`self`引用，用于访问属于该类的变量。

它不必命名`self`，你可以随意调用它，但它必须是类中任何函数的第一个参数：

> 使用*mysillyobject*和*abc*代替*self*：
>
> + 如果你需要参数的话，你知道怎么做了把，一定要把第一个流出来，记住，那不是参数

```python
In [12]: class Person:
    ...:   def __init__(mysillyobject, name, age):
    ...:     mysillyobject.name = name
    ...:     mysillyobject.age = age
    ...:
    ...:   def myfunc(abc):
    ...:     print("Hello my name is " + abc.name)
    ...:

NameError: name 'person' is not defined

In [14]: person = Person("张三",20)

In [15]: person.name
Out[15]: '张三'

In [16]: person.age
Out[16]: 20

In [18]: person.myfunc()
Hello my name is 张三
```

## 对象的一系列操作

### 修改对象属性
```python
In [23]: person.name = "李四"

In [24]: person.myfunc()
Hello my name is 李四
```

### 删除对象属性
```
del person.name
```

### 删除对象
```
del person
```

## 通行证声明
不仅仅函数是可以为空，甚至`class`也可以为空，如果你没有放入任何东西，请务必放入class Person:
 pass

```python
In [29]: class Person:
    ...:   pass
    ...:

In [30]: Person
Out[30]: __main__.Person
```

# python继承


## 继承

```python
In [48]: class Person:
    ...:   def __init__(self, fname, lname):
    ...:     self.firstname = fname
    ...:     self.lastname = lname
    ...:
    ...:   def printname(self):
    ...:     print(self.firstname, self.lastname)
    ...:

In [51]: person = Person("张三",100)

In [53]: person.printname()
张三 100
```

> 上面是父类

我们在上面的基础上创建子类，就可以体现出python的继承

创建一个名为 的类`Student`，它将继承该类的属性和方法`Person`：

```
class Student(Person):
  pass
```



## 添加 __init__() 函数

到目前为止，我们已经创建了一个从其父类继承属性和方法的子类。

我们想将`__init__()`函数添加到子类（而不是`pass`关键字）。

```python
class Student(Person):
  def __init__(self, fname, lname):
    #add properties etc.
```

添加`__init__()`函数后，子类将不再继承父类的`__init__()`函数。

**注意：**子函数**覆盖**`__init__()`父 函数的继承。` __init__()`

为了保持父函数的继承`__init__()` ，添加对父`__init__()`函数的调用：



为了保持父函数的继承`__init__()` ，添加对父`__init__()`函数的调用：

```python
class Student(Person):
  def __init__(self, fname, lname):
    Person.__init__(self, fname, lname)
```



## super()
让子类继承其父类的所有方法和属性：

```python
class Student(Person):
  def __init__(self, fname, lname):
    super().__init__(fname, lname)
```



## 添加属性
添加一个名为该类`graduationyear`的 属性：`Student`

```python
In [74]: class Student(Person):
    ...:   def __init__(self, fname, lname):
    ...:     super().__init__(fname, lname)
    ...:     self.graduationyear = 2019
    ...:

In [75]: student.firstname
Out[75]: '子类'
```

添加一个`year`参数，并在创建对象时传递正确的年份：

```python
In [76]: class Student(Person):
    ...:   def __init__(self, fname, lname, year):
    ...:     super().__init__(fname, lname)
    ...:     self.graduationyear = year
    ...:

In [77]: x = Student("Mike", "Olsen", 2019)

In [78]: x.graduationyear
Out[78]: 2019

In [79]: x.firstname
Out[79]: 'Mike'
```

添加一个调用类`welcome`的 方法`Student`：

```python
In [80]: class Student(Person):
    ...:   def __init__(self, fname, lname, year):
    ...:     super().__init__(fname, lname)
    ...:     self.graduationyear = year
    ...:
    ...:   def welcome(self):
    ...:     print("Welcome", self.firstname, self.lastname, "to the class of", self.graduationyear)
    ...:

In [81]: a = Student("张三","张三丰",1999)

In [82]: a.welcome()
Welcome 张三 张三丰 to the class of 1999
```

# python迭代器和python的范围


## python迭代器

迭代器是一个包含可数个值的**对象**。

迭代器是可以迭代的对象，这意味着您可以遍历所有值。

从技术上讲，在 Python 中，迭代器是一个实现迭代器协议的对象，它由方法`__iter__()` 和`__next__()`.

### 迭代器和可迭代
列表、元组、字典和集合都是可迭代的对象。它们是可迭代的 *容器*，您可以从中获取迭代器。

所有这些对象都有一个`iter()`用于获取迭代器的方法：

```python
In [83]: mytuple = ("apple", "banana", "cherry")
    ...: myit = iter(mytuple)
    ...:
    ...: print(next(myit))
    ...: print(next(myit))
    ...: print(next(myit))
apple
banana
cherry
```

甚至字符串也是可迭代的对象，并且可以返回一个迭代器：
```python
In [84]: mystr = "banana"
    ...: myit = iter(mystr)
    ...:
    ...: print(next(myit))
    ...: print(next(myit))
    ...: print(next(myit))
    ...: print(next(myit))
    ...: print(next(myit))
    ...: print(next(myit))
b
a
n
a
n
a
```

### 创建一个迭代器
要将对象/类创建为迭代器，您必须实现方法 `__iter__()`和` __next__()`对象。

正如您在[Python 类/对象](https://www.w3schools.com/python/python_classes.asp)一章中所了解的，所有类都有一个名为 的函数 `__init__()`，它允许您在创建对象时进行一些初始化。

该`__iter__()`方法的作用类似，您可以进行操作（初始化等），但必须始终返回迭代器对象本身。

该`__next__()`方法还允许您执行操作，并且必须返回序列中的下一项。

```python
In [89]: class MyNumbers:
    ...:   def __iter__(self):
    ...:     self.a = 1
    ...:     return self
    ...:
    ...:   def __next__(self):
    ...:     x = self.a
    ...:     self.a += 1
    ...:     return x
    ...:

In [90]: myclass = MyNumbers()
    ...: myiter = iter(myclass)

In [91]: print(next(myiter))
1

In [92]: print(next(myiter))
2

In [93]: print(next(myiter))
3

In [94]: print(next(myiter))
4

In [95]: print(next(myiter))
```

### 停止迭代
如果您有足够的 next() 语句，或者如果它在 `for`循环中使用，上面的示例将永远持续下去。

为了防止迭代永远进行，我们可以使用 `StopIteration`语句。

在该`__next__()`方法中，如果迭代完成指定次数，我们可以添加终止条件以引发错误：

```python
In [103]: class MyNumbers:
     ...:   def __iter__(self):
     ...:     self.a = 1
     ...:     return self
     ...:
     ...:   def __next__(self):
     ...:     if self.a <= 20:
     ...:       x = self.a
     ...:       self.a += 1
     ...:       return x
     ...:     else:
     ...:       raise StopIteration
     ...:

In [104]: myclass = MyNumbers()

In [105]: myiter = iter(myclass)

In [106]: for x in myiter:
     ...:   print(x)
     ...:
1
2
3
4
5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
```

## python范围
量只能在它创建的区域内使用。这称为**范围**。

> 和其他语言一样，在本类中创建的变量只能在本类中使用，在本函数中创建的函数只能在本函数中使用

### 全部范围
在 Python 代码主体中创建的变量是全局变量，属于全局范围。

全局变量可在任何范围内使用，全局和本地。

```python
In [108]: a = 112

In [110]: def afunc():
     ...:     print(a)
     ...:

In [112]: afunc()
112

In [113]: a
```

### 命名变量
```python
In [114]: x = 300
     ...:
     ...: def myfunc():
     ...:   x = 200
     ...:   print(x)
     ...:
     ...: myfunc()
     ...:
     ...: print(x)
200
300
```

### 全局关键字
如果需要创建全局变量，但又卡在局部范围内，可以使用 `global`关键字。

`global`关键字使变量成为全局变量。

```python
In [118]: x = 300
     ...:
     ...: def myfunc():
     ...:   global c
     ...:   c = 200
     ...:   print(c)
     ...:   print(x)
     ...:
     ...: myfunc()
     ...: print(c)
     ...: print(x)
200
300
200
300
```

# Python模块
将模块视为与代码库相同。
包含一组要包含在应用程序中的函数的文件。

## 创建一个模块
要创建一个模块，只需将所需的代码保存在文件扩展名为的文件中`.py`：

将此代码保存在名为`mymodule.py`

```python
def greeting(name):
  print("Hello, " + name)
```

## 使用模块

现在我们可以使用我们刚刚创建的模块，通过使用以下`import`语句：

导入名为 mymodule 的模块，并调用 greeting 函数：

```python
import mymodule
mymodule.greeting("Jonathan")
```

## 模块的变量

将此代码保存在文件中`mymodule.py`

```
person1 = {
  "name": "John",
  "age": 36,
  "country": "Norway"
}
```

导入名为 mymodule 的模块，并访问 person1 字典：
```python
import mymodule

a = mymodule.person1["age"]
print(a)
```


## 方法
### 重命名模块

`mymodule`为被调用创建一个别名`mx`：

```python
import mymodule as mx

a = mx.person1["age"]
print(a)
```



### 列出平台所有模块

```python
In [119]: import platform
     ...:
     ...: x = dir(platform)
     ...: print(x)
['_Processor', '_WIN32_CLIENT_RELEASES', '_WIN32_SERVER_RELEASES', '__builtins__', '__cached__', '__copyright__', '__doc__', '__file__', '__loader__', '__name__', '__package__', '__spec__', '__version__', '_comparable_version', '_component_re', '_default_architecture', '_follow_symlinks', '_get_machine_win32', '_ironpython26_sys_version_parser', '_ironpython_sys_version_parser', '_java_getprop', '_libc_search', '_mac_ver_xml', '_node', '_norm_version', '_os_release_cache', '_os_release_candidates', '_os_release_line', '_os_release_unescape', '_parse_os_release', '_platform', '_platform_cache', '_pypy_sys_version_parser', '_sys_version', '_sys_version_cache', '_sys_version_parser', '_syscmd_file', '_syscmd_ver', '_uname_cache', '_unknown_as_blank', '_ver_output', '_ver_stages', 'architecture', 'collections', 'freedesktop_os_release', 'functools', 'itertools', 'java_ver', 'libc_ver', 'mac_ver', 'machine', 'node', 'os', 'platform', 'processor', 'python_branch', 'python_build', 'python_compiler', 'python_implementation', 'python_revision', 'python_version', 'python_version_tuple', 're', 'release', 'subprocess', 'sys', 'system', 'system_alias', 'uname', 'uname_result', 'version', 'win32_edition', 'win32_is_iot', 'win32_ver']
```

### 使用平台内置模块

```python
import platform

x = platform.system()
print(x)
```


# 异常

> python的异常和Java类似

------

+ `try`块允许您测试代码块的错误。

+ `except`块允许您处理错误。

except Exception as e://e异常实例
        print("Exception :", e)

+ `else`块允许您在没有错误时执行代码。

+ `finally`块允许您执行代码，而不管 try- 和 except 块的结果如何。

```python
In [134]: try:
     ...:     print(notX)
     ...: except:
     ...:     print("抱歉，你没有定义notX，你没有办法使用它")
     ...:
抱歉，你没有定义notX，你没有办法使用它
```

由于 try 块引发错误，因此将执行 except 块。
如果没有 try 块，程序将崩溃并引发错误


```python
In [135]: try:   
     ...:   print("Hello")  # 没有发生错误
     ...: except:
     ...:   print("Something went wrong")
     ...: else:
     ...:   print("Nothing went wrong")
     ...:
Hello
Nothing went wrong

In [136]: try:
     ...:   print(notX)  # 发生错误了
     ...: except:
     ...:   print("Something went wrong")
     ...: else:
     ...:   print("Nothing went wrong")
     ...:
Something went wrong
```

```python
In [138]: try:
     ...:   print("aa")
     ...: except:
     ...:   print("Something went wrong")
     ...: finally:
     ...:   print("The 'try except' is finished")
     ...:
aa
The 'try except' is finished

In [139]: try:
     ...:   print(notX)
     ...: except:
     ...:   print("Something went wrong")
     ...: finally:
     ...:   print("The 'try except' is finished")
     ...:
Something went wrong
The 'try except' is finished
```

## 抛出异常

要抛出（或引发）异常，请使用`raise`关键字。

如果 x 小于 0，则引发错误并停止程序：

```python
x = -1
if x < 0:
 raise Exception("Sorry, no numbers below zero")
```