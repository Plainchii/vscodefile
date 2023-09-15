## 输入

```java
jshell> var scanner = new Scanner(System.in)
scanner ==> java.util.Scanner[delimiters=\p{javaWhitespace}+] ... \E][infinity string=\Q∞\E]

jshell> scanner.nextInt()
123
$2 ==> 123

jshell> scanner.nextInt()
1241254
$3 ==> 1241254

jshell> scanner.nextInt()
123
$4 ==> 123

jshell> $2 + $4
$5 ==> 246
```



### 用户输入

该类`Scanner`用于获取用户输入，可在`java.util`包中找到。

要使用`Scanner`该类，请创建该类的一个对象并使用`Scanner`类文档中的任何可用方法。在我们的示例中，我们将使用`nextLine()`用于读取字符串的方法：

### 例子

```java
import java.util.Scanner;  // Import the Scanner class

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);  
    // Create a Scanner object
    System.out.println("Enter username");

    String userName = myObj.nextLine();  
    // Read user input
    System.out.println("Username is: " + userName);  // Output user input
  }
}
```

------

### 输入类型

在上面的示例中，我们使用了`nextLine()`用于读取字符串的方法。要阅读其他类型，请查看下表：

| Method          | Description                           |
| :-------------- | :------------------------------------ |
| `nextBoolean()` | Reads a `boolean` value from the user |
| `nextByte()`    | Reads a `byte` value from the user    |
| `nextDouble()`  | Reads a `double` value from the user  |
| `nextFloat()`   | Reads a `float` value from the user   |
| `nextInt()`     | Reads a `int` value from the user     |
| `nextLine()`    | Reads a `String` value from the user  |
| `nextLong()`    | Reads a `long` value from the user    |
| `nextShort()`   | Reads a `short` value from the user   |

在下面的示例中，我们使用不同的方法来读取各种类型的数据：

```java
import java.util.Scanner;

class Main {
  public static void main(String[] args) {
    Scanner myObj = new Scanner(System.in);

    System.out.println("Enter name, age and salary:");

    // String input
    String name = myObj.nextLine();

    // Numerical input
    int age = myObj.nextInt();
    double salary = myObj.nextDouble();

    // Output input by user
    System.out.println("Name: " + name);
    System.out.println("Age: " + age);
    System.out.println("Salary: " + salary);
  }
}
```

> double浮点型可能会出现浮点数精度丢失问题（这是计算机底层的问题），普片用的IEE754的标准


