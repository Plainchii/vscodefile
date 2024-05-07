
# 第19节 Java Lambda 表达式

`Lambda` 表达式是在 Java 8 中添加的。

- Lambda 表达式，也可称为**闭包**，它是推动 Java 8 发布的最重要新特性。
- Lambda 允许把函数作为一个方法的参数（函数作为参数传递进方法中）。
- 使用 Lambda 表达式可以使代码变的更加简洁紧凑。

**`Lambda` 表达式是一小段代码，它接受参数并返回一个值。`Lambda` 表达式类似于方法，但它们不需要名称，并且可以直接在方法体中实现。**

> 在其他语言中，比如说Go语言和python都有对应的闭包

## 语法

最简单的 `Lambda` 表达式包含一个参数和一个表达式：

```java
parameter -> expression

(parameter1, parameter2) -> expression
```

表达方式有限。它们必须立即返回一个值，并且它们不能包含变量、赋值或语句，例如`if`or `for`。为了进行更复杂的操作，可以使用带有花括号的代码块。如果 `Lambda` 表达式需要返回一个值，那么代码块应该有一个`return`语句。

- **可选类型声明：** 不需要声明参数类型，编译器可以统一识别参数值。
- **可选的参数圆括号：** 一个参数无需定义圆括号，但多个参数需要定义圆括号。
- **可选的大括号：** 如果主体包含了一个语句，就不需要使用大括号。
- **可选的返回关键字：** 如果主体只有一个表达式返回值则编译器会自动返回值，大括号需要指定表达式返回了一个数值。

```java
(parameter1, parameter2) -> { sentense; }
```

Lambda 表达式的简单例子:

```java
// 1. 不需要参数,返回值为 5  
() -> 5  
  
// 2. 接收一个参数(数字类型),返回其2倍的值  
x -> 2 * x  
  
// 3. 接受2个参数(数字),并返回他们的差值  
(x, y) -> x – y  
  
// 4. 接收2个int型整数,返回他们的和  
(int x, int y) -> x + y  
  
// 5. 接受一个 string 对象,并在控制台打印,不返回任何值(看起来像是返回void)  
(String s) -> System.out.print(s)
```

## 使用

`Lambda` 表达式通常作为参数传递给函数：

`ArrayList`使用 `Lambda` 表达式与`forEach()`方法来打印列表中的每个项目：

```java
import java.util.ArrayList;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(5);
    numbers.add(9);
    numbers.add(8);
    numbers.add(1);
    numbers.forEach( (n) -> { System.out.println(n); } );
 // numbers.forEach( (Integer n) -> { System.out.println(n); } );
  }
}
```

```
5
9
8
1
```

如果变量的类型是只有一个方法的接口，则 `Lambda` 表达式可以存储在变量中。`Lambda` 表达式应具有与该方法相同数量的参数和相同的返回类型。Java 内置了许多此类接口，例如列表使用的`Consumer`接口（在`java.util`包中找到）。

使用 Java 的`Consumer`接口将 `Lambda` 表达式存储在变量中：

```java
import java.util.ArrayList;
import java.util.function.Consumer;

public class Main {
  public static void main(String[] args) {
    ArrayList<Integer> numbers = new ArrayList<Integer>();
    numbers.add(5);
    numbers.add(9);
    numbers.add(8);
    numbers.add(1);
    Consumer<Integer> method = (n) -> { System.out.println(n); };
    numbers.forEach( method );
  }
}
```

要在方法中使用 `Lambda` 表达式，该方法应该有一个参数，其类型为单方法接口。调用接口的方法将运行 `Lambda` 表达式：

创建一个将 `Lambda` 表达式作为参数的方法：

```java
interface StringFunction {
  String run(String str);
}

public class Main {
  public static void main(String[] args) {
    StringFunction exclaim = (s) -> s + "!";
    StringFunction ask = (s) -> s + "?";
    printFormatted("Hello", exclaim);
    printFormatted("Hello", ask);
  }
  public static void printFormatted(String str, StringFunction format) {
    String result = format.run(str);
    System.out.println(result);
  }
}
```

### Lambda 表达式实例

```java
public class labda {
    public static void main(String args[]){
       labda tester = new labda();
         
       // 类型声明
       MathOperation addition = (int a, int b) -> a + b;
         
       // 不用类型声明
       MathOperation subtraction = (a, b) -> a - b;
         
       // 大括号中的返回语句
       MathOperation multiplication = (int a, int b) -> { return a * b; };
         
       // 没有大括号及返回语句
       MathOperation division = (int a, int b) -> a / b;
         
       System.out.println("10 + 5 = " + tester.operate(10, 5, addition));
       System.out.println("10 - 5 = " + tester.operate(10, 5, subtraction));
       System.out.println("10 x 5 = " + tester.operate(10, 5, multiplication));
       System.out.println("10 / 5 = " + tester.operate(10, 5, division));
         
       // 不用括号
       GreetingService greetService1 = message ->
       System.out.println("Hello " + message);
         
       // 用括号
       GreetingService greetService2 = (message) ->
       System.out.println("Hello " + message);
         
       greetService1.sayMessage("smile");
       greetService2.sayMessage("Google");
    }
     
    interface MathOperation {
       int operation(int a, int b);
    }
     
    interface GreetingService {
       void sayMessage(String message);
    }
     
    private int operate(int a, int b, MathOperation mathOperation){
       return mathOperation.operation(a, b);
    }
 }
```

执行以上脚本，输出结果为：

```java
10 + 5 = 15
10 - 5 = 5
10 x 5 = 50
10 / 5 = 2
Hello smile
Hello Google
```

### 使用 Lambda 表达式需要注意以下两点：

- Lambda 表达式主要用来定义行内执行的方法类型接口，例如，一个简单方法接口。在上面例子中，我们使用各种类型的Lambda表达式来定义MathOperation接口的方法。然后我们定义了sayMessage的执行。
- Lambda 表达式免去了使用匿名方法的麻烦，并且给予Java简单但是强大的函数化的编程能力。



## 变量作用域

`lambda` 表达式只能引用标记了 `final` 的外层局部变量，这就是说不能在 `lambda` 内部修改定义在域外的局部变量，否则会编译错误。

```java
public class Java8Tester {
 
   final static String salutation = "Hello! ";
   
   public static void main(String args[]){
      GreetingService greetService1 = message -> System.out.println(salutation + message);
      greetService1.sayMessage("smile");
   }
    
   interface GreetingService {
      void sayMessage(String message);
   }
}
```

执行以上脚本，输出结果为：

```
Hello! smile
```

我们也可以直接在 lambda 表达式中访问外层的局部变量：

```java
public class Java8Tester {
    public static void main(String args[]) {
        final int num = 1;
        Converter<Integer, String> s = (param) -> System.out.println(String.valueOf(param + num));
        s.convert(2);  // 输出结果为 3
    }
 
    public interface Converter<T1, T2> {
        void convert(int i);
    }
}
```

lambda 表达式的局部变量可以不用声明为 final，但是必须不可被后面的代码修改（即隐性的具有 final 的语义）

```java
int num = 1;  
Converter<Integer, String> s = (param) -> System.out.println(String.valueOf(param + num));
s.convert(2);
num = 5;  
//报错信息：Local variable num defined in an enclosing scope must be final or effectively 
 final
```

在 Lambda 表达式当中不允许声明一个与局部变量同名的参数或者局部变量。

```java
String first = "";  
Comparator<String> comparator = (first, second) -> Integer.compare(first.length(), second.length());  //编译会出错 
```

### Consumer接口
java.util.function包
Consumer是一个功能接口，用来作为lambda表达式或方法引用的任务目标(传递一个参数执行指定的方法)
Consumer的功能接口是一个接受单一参数并且不返回任何结果的操作

#### 使用Lambda表达式创建Consumer
##### 基础类型操作
创建两个Consumer,一个用于将数字添加到列表的方法，如果数字为奇数，则将添加到具有奇数的列表中；如果数字为偶数，则将其添加到具有偶数的另一个列表中
```java
List<Integer> oddList = new ArrayList<>();
	List<Integer> evenList = new ArrayList<>();
	
	Consumer<Integer> storeNumber = n -> {
	   if (n % 2 == 0) {
		 evenList.add(n);
	   } else {
		 oddList.add(n);
	   }
	};
	
	Consumer<List<Integer>> printList = list -> list.forEach(n -> System.out.println(n));
	
	storeNumber.accept(10);
	storeNumber.accept(15);
	storeNumber.accept(25);
	storeNumber.accept(30);
	
	System.out.println("--- Odd number ---");
	
	printList.accept(oddList);
	
	System.out.println("--- Even number ---");
	
	printList.accept(evenList);
  }
```
   --- Odd number ---
   15
   25
   --- Even number ---
   10
   30 

##### 对象类型操作
consumer将决定并显示一个公民在选举中是否可以投票的数据
```java
import java.util.function.Consumer;

public class ConsumerLambda2 {
  public static void main(String[] args) {
     Consumer<Citizen> electionConsumer = c -> {
       if (c.getAge() < 18) {
    	 System.out.println(c.getName() + " is not eligible to vote.");
       } else {
    	 System.out.println(c.getName() + " can vote.");
       }
     };
     
     electionConsumer.accept(new Citizen("Ritesh", 15));
     
     electionConsumer.accept(new Citizen("Shreya", 20));
  }
}

class Citizen {
  private String name;
  private int age;

  public Citizen(String name, int age) {
	this.name = name;
	this.age = age;
  }

  public String getName() {
	return name;
  }

  public int getAge() {
	return age;
  }
} 
```
   Ritesh is not eligible to vote.
   Shreya can vote. 

#### 方法

##### accept
这是Consumer功能接口的功能方法。accept 方法对给定的参数进行这一操作。
`void accept(T t)`

```java
import java.util.function.Consumer;

public class ConsumerAccept {
  public static void main(String[] args) {
    Consumer<String> nameConsumer = s -> System.out.println(s); 
    
    nameConsumer.accept("i");//i
    nameConsumer.accept("j");//j
  }
} 
```

##### andThen
此方法返回一个组合的Consumer，该Consumer先执行原始的Consumer操作，然后按照从左到右的顺序执行给定的andThen操作。
default Consumer<T> andThen(Consumer<? super T> after)

- 这个方法返回一个组合的Consumer，先执行当前Consumer操作，然后再执行after的Consumer操作。
- 如果在此操作或操作之后有异常，则将其中继到当前组合操作。
- 如果这个操作出现异常，那么后面的操作将不会被执行。








