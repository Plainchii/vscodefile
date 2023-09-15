## 包  
> 因为面对对象的特性，我们需要用package来管理项目，称之为包管理工具
> 
**package表示当前的包**

**import表示导入包，当你的类需要导入另一个类时候使用，此时需要判断**

一般包名的规则为：公司域名反写 + 包的作用，而且全部都要用英文小写。
> 有规定，类名必须大写，大写表示public,而小写表示private

```
假设曹操的 PublicUtil 类代码如下：

// 申明包名
package caocao;
public class PublicUtil{
    ……
}
周瑜的 PublicUtil 类代码如下：

// 申明包名
package zhouyu;
public class PublicUtil{
    ……
}
```
此时，如果诸葛亮要同时使用他们俩代码中的 PublicUtil 类，此时就可以通过引入他们俩的包，然后通过使用 包名.类名 的引用方式来进行区分即可。
```
package zhugeliang;
import caocao;
import zhouyu;
public class Util{
    // 使用周瑜代码
    zhouyu.PublicUtil.xxx();
    ……
    // 使用曹操代码
    caocao.PublicUtil.xxx();
    ……
}
```

通过使用包，可以达到以下的作用：

将功能类似或或相关的类以及接口组织放在同一个包中，方便类的查找与使用。
包也像文件夹一样，采用了树形目录的存储方式。同一个包中的类名不同，不同包中的类名可以相同。当同时调用两个不同包中的同一类名的类时，通过加上完整的包名就可以加以区分，从而避免类名冲突。
同时包也限定了访问权限，只有拥有包访问权限的类才能间接去访问包中的类。  

### Java API

Java 中的包用于对相关类进行分组。将其视为 **文件目录中的文件夹**。我们使用包来避免名称冲突，并编写更好的可维护代码。包分为两类：

- 内置包（来自 Java API 的包）
- 用户定义的包（创建自己的包）


#### 内置包

Java API 是一个预先编写的类库，可以免费使用，包含在 Java 开发环境中。

该库包含用于管理输入、数据库编程等的组件。

该库分为**包**和**类**。这意味着您可以导入单个类（及其方法和属性），也可以导入包含属于指定包的所有类的整个包。

要使用库中的类或包，您需要使用`import` 关键字：

##### 句法

```java
import package.name.Class;   // Import a single class
import package.name.*;   // Import the whole package
```

##### 导入一个类

如果你找到一个你想使用的`Scanner`类，例如**用于获取用户输入**的类，请编写以下代码：

```java
import java.util.Scanner;
```

在上面的例子中，`java.util`是一个包，而是包`Scanner`的一个类`java.util`。

要使用`Scanner`该类，请创建该类的一个对象并使用`Scanner`类文档中的任何可用方法。在我们的示例中，我们将使用`nextLine()`用于读取完整行的方法：

###### 例子

使用`Scanner`类获取用户输入：

```java
import java.util.Scanner;

class MyClass {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);
    System.out.println("Enter username");

    String userName = myObj.nextLine();
    System.out.println("Username is: " + userName);
  }
}
```

##### 导入包

有很多套餐可供选择。在前面的示例中，我们使用`Scanner`了包中的类`java.util`。这个包还包含日期和时间工具、随机数生成器和其他实用程序类。

要导入整个包，请以星号 ( `*`) 结束句子。以下示例将导入`java.util`包中的所有类：

###### 例子

```java
import java.util.*;
```

#### 用户自定义包

要创建自己的包，您需要了解 Java 使用文件系统目录来存储它们。就像您计算机上的文件夹一样：

**例子：**

```
└── root  └── mypack    └── MyPackageClass.java 
```

要创建包，请使用`package`关键字：

```java
package mypack;
class MyPackageClass {
  public static void main(String[] args) {
    System.out.println("This is my package!");
  }
}
```

将文件保存为**MyPackageClass.java**并编译它：

```
C:\Users\Your Name>javac MyPackageClass.java
```

然后编译包：

```
C:\Users\Your Name>javac -d . MyPackageClass.java
```

> 这会强制编译器创建“mypack”包。
>
> `-d`关键字指定保存类文件的目的地。您可以使用任何目录名称，例如 c:/user (windows)，或者，如果您想将包保存在同一目录中，您可以使用点号“ `.`”，如上例所示。

**注意：**包名要小写，避免与类名冲突。

当我们在上面的示例中编译包时，会创建一个名为“mypack”的新文件夹。

要运行**MyPackageClass.java**文件，请编写以下内容：

```
C:\Users\Your Name>java mypack.MyPackageClass
```

输出将是：

```
This is my package!
```

## jar:包的发布

**我们同样需要将包发布出去，需要用到jar工具**

> JAR 文件以 ZIP 文件格式打包，因此您可以将它们用于无损数据压缩，归档，解压缩和归档解压缩等任务。 这些任务是 JAR 文件最常见的用途之一，您只需使用这些基本功能即可实现许多 JAR 文件的优点。

| Operation                              | Command                          |
| -------------------------------------- | -------------------------------- |
| 创建 jar                               | jar cf jar-file input-file(s)    |
| 查看 jar 文件内容                      | jar tf jar-file                  |
| 提取/解压 jar 文件内容                 | jar xf jar-file                  |
| 提取指定文件                           | jar xf jar-file archived-file(s) |
| 运行 jar（需要 Main-class 清单头文件） | java -jar app.jar                |



###  创建 Jar 文件

创建 JAR 文件的基本格式是：

```bash
jar cf jar-file input-file(s)
```

参数解释：

- c : 表示要创建一个 jar 文件
- f : 表示要输出到一个文件中
- jar-file : 生成 jar 文件的具体名称。惯例是 xxx.jar，后缀名称不是强制的
- input-file(s) : 可以输入一个或多个文件，包含 `*` 通配符，如果是一个目录则递归添加到 jar 归档中

c 和 f 选项可以按任意顺序出现，但是它们之间不应该有任何空格。

这个命令将生成一个压缩 JAR 文件并将其放入当前目录中。该命令还将为 JAR 存档生成一个默认的清单文件。

**注意:** JAR 文件中的元数据，例如条目名称、注释和清单的内容，必须是 UTF8 编码。
