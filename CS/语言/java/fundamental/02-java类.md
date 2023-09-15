

## Java 常见类
### object类详解

### `toString()`方法

1、`toString()`方法：返回对象的字符串表示，通常是对象的属性值

如：Person [name=张三, age=20, salary=3000.0]，如果没有重写该方法，返回的是对象的内存地址，如：poloy.Person@15db9742

> 默认返回的是`全类名+@+哈希值的十六进制`
>
> **原码：**
>
> + `getClass().getName()`包名+类名
> + `Integer.toHexString(hashCode())`对象的`hashCode`转化为`16进制`
>
> ```java
> public String toString() {
>       return getClass().getName() + "@" + Integer.toHexString(hashCode());
>   }
> ```

**重写`toString`**方法

```java
package Hashcode;

public class ToString {
    public static void main(String[] args) {
        A2 a = new A2();
        System.out.println(a.toString());  // 重写toString()方法后，输出的是对象的地址
        System.out.println(a.hashCode());  // 重写hashCode()方法后，输出的是对象的地址
     }
}

class A2 {
    @Override
    public String toString() {
        return getClass().getName() + "@nsddd.top " + Integer.toHexString(hashCode());
    }
}
```

🚀 编译结果如下：

```
Hashcode.A2@nsddd.top 4eec7777
1324119927
```



### `equals()`方法

2、`equals()`方法：比较两个对象是否相等，如果没有重写该方法，比较的是两个对象的内存地址是否相等，

如：false,如果重写了该方法，比较的是两个对象的属性值是否相等，

> 面试经常问道，是object类方法，**只能判断引用类型（String，包装类）**

![image-20221004144218209](./images/image-20221004144218209.png)



### `==` 和 `equals`区别

![在这里插入图片描述](./images/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L0tvaWtvaTEy,size_16,color_FFFFFF,t_70.png)



### `hashCode()`方法

3、`hashCode()`方法：返回对象的哈希码值，如果没有重写该方法，返回的是对象的内存地址的哈希码值。

如：366712642，如果重写了该方法，返回的是对象的属性值的哈希码值，

如：-2128831035

> 小结：
>
> 1. 提高具有哈希结构的容器的效率
> 2. 两个引用，如果指向的是同一个对象，则哈希值肯定是一样的
> 3. 两个引用，如果指向的是不同对象，则哈希值是不一样的
> 4. 两个引用，如果指向的是不同对象，但是哈希值是一样的，这种情况称为哈希冲突
> 5. 哈希值是通过对象的`hashCode()`方法来计算的，如果两个对象的哈希值一样，但是equals()方法返回false，则称为哈希冲突
> 6. 哈希值主要是根据地址号来的，不能完全将哈希值等价于地址

💡简单的一个案例如下：

```java
package Hashcode;

public class HashCode {
    public static void main(String[] args) {
        A a = new A();
        A a2 = new A();   // a2和a是不同的对象
        System.out.println(a.hashCode());  // 重写hashCode()方法后，输出的是对象的地址
        System.out.println(a2.hashCode()); // 重写hashCode()方法后，输出的是对象的地址
        
        A a3 = new A();
        A a4 = a3;  // a3和a4是同一个对象
        System.out.println(a3.hashCode());  // 重写hashCode()方法后，输出的是对象的地址
        System.out.println(a4.hashCode());  // 重写hashCode()方法后，输出的是对象的地址
    }
}

class  A {

}
```

🚀 编译结果如下：

```
1324119927
990368553
1096979270
1096979270
```



### `getClass()`方法

4、`getClass()`方法：返回对象的运行时类，

如：class poloy.Person,如果没有重写该方法，返回的是对象的运行时类，如：class poloy.Person



### `clone()`方法

5、`clone()`方法：

克隆对象，如果没有重写该方法，返回的是对象的内存地址，

如：poloy.Person@6d06d69c，如果重写了该方法，返回的是对象的属性值，如：Person [name=张三, age=20, salary=3000.0]



### `finalize()`方法

6、`finalize()`方法：垃圾回收器在回收对象之前调用该方法，如果没有重写该方法，返回的是对象的内存地址，

如：poloy.Person@7852e922，如果重写了该方法，返回的是对象的属性值，如：Person [name=张三, age=20, salary=3000.0]

💡简单的一个案例如下：

```java
package Hashcode;

public class Car {
    public static void main(String[] args) {
        A3 a3 = new A3("宝马");
        a3 = null;   // a3指向的对象没有引用指向，会被垃圾回收器回收
        //null和0的区别：null是一个引用，0是一个值
        System.gc();  // 手动调用垃圾回收器

        //finalize()方法是在垃圾回收器回收对象之前调用的
        //finalize()方法是Object类中的方法，所有的类都继承了Object类

        System.out.println(a3+"程序结束");
    }
}

class A3 {
    private String name;

    public A3(String name) {
        this.name = name;
    }

    //重写finalize()方法
    @Override
    protected void finalize() throws Throwable {
        System.out.println("垃圾回收器回收了"+name+"对象");
    }
}

```

🚀 编译结果如下：

```
null程序结束
```

**现在object弃用了**

+ 在某个对象没有任何引用时候，jvm认为这个对象是一个垃圾对象，就会使用垃圾回收机制来销毁该对象。销毁之前调用`finalize()`方法

> 后面讲`gvm`的`gc`垃圾回收算法，垃圾回收由系统决定，实际开发几乎用不到。更多为了应付面试。



### Object

#### Object 类的常见方法有哪些？

Object 类是一个特殊的类，是所有类的父类。它主要提供了以下 11 个方法：

```java
/**
 * native 方法，用于返回当前运行时对象的 Class 对象，使用了 final 关键字修饰，故不允许子类重写。
 */
public final native Class<?> getClass()
/**
 * native 方法，用于返回对象的哈希码，主要使用在哈希表中，比如 JDK 中的HashMap。
 */
public native int hashCode()
/**
 * 用于比较 2 个对象的内存地址是否相等，String 类对该方法进行了重写以用于比较字符串的值是否相等。
 */
public boolean equals(Object obj)
/**
 * naitive 方法，用于创建并返回当前对象的一份拷贝。
 */
protected native Object clone() throws CloneNotSupportedException
/**
 * 返回类的名字实例的哈希码的 16 进制的字符串。建议 Object 所有的子类都重写这个方法。
 */
public String toString()
/**
 * native 方法，并且不能重写。唤醒一个在此对象监视器上等待的线程(监视器相当于就是锁的概念)。如果有多个线程在等待只会任意唤醒一个。
 */
public final native void notify()
/**
 * native 方法，并且不能重写。跟 notify 一样，唯一的区别就是会唤醒在此对象监视器上等待的所有线程，而不是一个线程。
 */
public final native void notifyAll()
/**
 * native方法，并且不能重写。暂停线程的执行。注意：sleep 方法没有释放锁，而 wait 方法释放了锁 ，timeout 是等待时间。
 */
public final native void wait(long timeout) throws InterruptedException
/**
 * 多了 nanos 参数，这个参数表示额外时间（以毫微秒为单位，范围是 0-999999）。 所以超时的时间还需要加上 nanos 毫秒。。
 */
public final void wait(long timeout, int nanos) throws InterruptedException
/**
 * 跟之前的2个wait方法一样，只不过该方法一直等待，没有超时时间这个概念
 */
public final void wait() throws InterruptedException
/**
 * 实例被垃圾回收器回收的时候触发的操作
 */
protected void finalize() throws Throwable { }
```

#### == 和 equals() 的区别

**`==`** 对于基本类型和引用类型的作用效果是不同的：

- 对于基本数据类型来说，`==` 比较的是值。
- 对于引用数据类型来说，`==` 比较的是对象的内存地址。

> 因为 Java 只有值传递，所以，对于 == 来说，不管是比较基本数据类型，还是引用数据类型的变量，其本质比较的都是值，只是引用类型变量存的值是对象的地址。

**`equals()`** 不能用于判断基本数据类型的变量，只能用来判断两个对象是否相等。`equals()`方法存在于`Object`类中，而`Object`类是所有类的直接或间接父类，因此所有的类都有`equals()`方法。

`Object` 类 `equals()` 方法：

```java
public boolean equals(Object obj) {
     return (this == obj);
}
```

`equals()` 方法存在两种使用情况：

- **类没有重写 `equals()`方法** ：通过`equals()`比较该类的两个对象时，等价于通过“==”比较这两个对象，使用的默认是 `Object`类`equals()`方法。
- **类重写了 `equals()`方法** ：一般我们都重写 `equals()`方法来比较两个对象中的属性是否相等；若它们的属性相等，则返回 true(即，认为这两个对象相等)。

举个例子（这里只是为了举例。实际上，你按照下面这种写法的话，像 IDEA 这种比较智能的 IDE 都会提示你将 `==` 换成 `equals()` ）：

```java
String a = new String("ab"); // a 为一个引用
String b = new String("ab"); // b为另一个引用,对象的内容一样
String aa = "ab"; // 放在常量池中
String bb = "ab"; // 从常量池中查找
System.out.println(aa == bb);// true
System.out.println(a == b);// false
System.out.println(a.equals(b));// true
System.out.println(42 == 42.0);// true
```

`String` 中的 `equals` 方法是被重写过的，因为 `Object` 的 `equals` 方法是比较的对象的内存地址，而 `String` 的 `equals` 方法比较的是对象的值。

当创建 `String` 类型的对象时，虚拟机会在常量池中查找有没有已经存在的值和要创建的值相同的对象，如果有就把它赋给当前引用。如果没有就在常量池中重新创建一个 `String` 对象。

`String`类`equals()`方法：

```java
public boolean equals(Object anObject) {
    if (this == anObject) {
        return true;
    }
    if (anObject instanceof String) {
        String anotherString = (String)anObject;
        int n = value.length;
        if (n == anotherString.value.length) {
            char v1[] = value;
            char v2[] = anotherString.value;
            int i = 0;
            while (n-- != 0) {
                if (v1[i] != v2[i])
                    return false;
                i++;
            }
            return true;
        }
    }
    return false;
}
```

#### hashCode() 有什么用？

`hashCode()` 的作用是获取哈希码（`int` 整数），也称为散列码。这个哈希码的作用是确定该对象在哈希表中的索引位置。

`hashCode()`定义在 JDK 的 `Object` 类中，这就意味着 Java 中的任何类都包含有 `hashCode()` 函数。另外需要注意的是： `Object` 的 `hashCode()` 方法是本地方法，也就是用 C 语言或 C++ 实现的，该方法通常用来将对象的内存地址转换为整数之后返回。

```java
public native int hashCode();
```

散列表存储的是键值对(key-value)，它的特点是：**能根据“键”快速的检索出对应的“值”。这其中就利用到了散列码！（可以快速找到所需要的对象）**

#### 为什么要有 hashCode？

我们以“`HashSet` 如何检查重复”为例子来说明为什么要有 `hashCode`？

下面这段内容摘自我的 Java 启蒙书《Head First Java》:

> 当你把对象加入 `HashSet` 时，`HashSet` 会先计算对象的 `hashCode` 值来判断对象加入的位置，同时也会与其他已经加入的对象的 `hashCode` 值作比较，如果没有相符的 `hashCode`，`HashSet` 会假设对象没有重复出现。但是如果发现有相同 `hashCode` 值的对象，这时会调用 `equals()` 方法来检查 `hashCode` 相等的对象是否真的相同。如果两者相同，`HashSet` 就不会让其加入操作成功。如果不同的话，就会重新散列到其他位置。这样我们就大大减少了 `equals` 的次数，相应就大大提高了执行速度。

其实， `hashCode()` 和 `equals()`都是用于比较两个对象是否相等。

**那为什么 JDK 还要同时提供这两个方法呢？**

这是因为在一些容器（比如 `HashMap`、`HashSet`）中，有了 `hashCode()` 之后，判断元素是否在对应容器中的效率会更高（参考添加元素进`HashSet`的过程）！

我们在前面也提到了添加元素进`HashSet`的过程，如果 `HashSet` 在对比的时候，同样的 `hashCode` 有多个对象，它会继续使用 `equals()` 来判断是否真的相同。也就是说 `hashCode` 帮助我们大大缩小了查找成本。

**那为什么不只提供 `hashCode()` 方法呢？**

这是因为两个对象的`hashCode` 值相等并不代表两个对象就相等。

**那为什么两个对象有相同的 `hashCode` 值，它们也不一定是相等的？**

因为 `hashCode()` 所使用的哈希算法也许刚好会让多个对象传回相同的哈希值。越糟糕的哈希算法越容易碰撞，但这也与数据值域分布的特性有关（所谓哈希碰撞也就是指的是不同的对象得到相同的 `hashCode` )。

总结下来就是 ：

- 如果两个对象的`hashCode` 值相等，那这两个对象不一定相等（哈希碰撞）。
- 如果两个对象的`hashCode` 值相等并且`equals()`方法也返回 `true`，我们才认为这两个对象相等。
- 如果两个对象的`hashCode` 值不相等，我们就可以直接认为这两个对象不相等。

相信大家看了我前面对 `hashCode()` 和 `equals()` 的介绍之后，下面这个问题已经难不倒你们了。

#### 为什么重写 equals() 时必须重写 hashCode() 方法？

因为两个相等的对象的 `hashCode` 值必须是相等。也就是说如果 `equals` 方法判断两个对象是相等的，那这两个对象的 `hashCode` 值也要相等。

如果重写 `equals()` 时没有重写 `hashCode()` 方法的话就可能会导致 `equals` 方法判断是相等的两个对象，`hashCode` 值却不相等。

**思考** ：重写 `equals()` 时没有重写 `hashCode()` 方法的话，使用 `HashMap` 可能会出现什么问题。

**总结** ：

- `equals` 方法判断两个对象是相等的，那这两个对象的 `hashCode` 值也要相等。
- 两个对象有相同的 `hashCode` 值，他们也不一定是相等的（哈希碰撞）。



## java内部类

在 Java 中，也可以嵌套类（类中的类）。嵌套类的目的是将属于一起的类分组，这使您的代码更具可读性和可维护性。

要访问内部类，先创建外部类的对象，然后再创建内部类的对象：

💡简单的一个案例如下：

```java
class OuterClass {
  int x = 10;

  class InnerClass {
    int y = 5;
  }
  class Class2{
  	 int y = 10;
  }
}

public class Main {
  public static void main(String[] args) {
    OuterClass myOuter = new OuterClass();
    OuterClass.InnerClass myInner = myOuter.new InnerClass();
    OuterClass.Class2 myInner2 = myOuter.new Class2();
    System.out.println(myInner.y + myOuter.x);  //15
    System.out.println(myInner2.y + myOuter.x); //20
  }
}
```

------



### public内部

与“常规”类不同，内部类可以是`private`或`protected`。如果您不希望外部对象访问内部类，请将类声明为`private`：

```java
class OuterClass {
  int x = 10;
    
      private class InnerClass {
        int y = 5;
      }  //不能被外部对象访问
}

public class Main {
  public static void main(String[] args) {
    OuterClass myOuter = new OuterClass();
    OuterClass.InnerClass myInner = myOuter.new InnerClass();
    System.out.println(myInner.y + myOuter.x);   //myInner.y ×
  }
}
```

如果您尝试从外部类访问私有内部类，则会发生错误：

```
Main.java:13: error: OuterClass.InnerClass has private access in OuterClass  OuterClass.InnerClass myInner = myOuter.new InnerClass();       ^
```



------

### 静态内部类

内部类也可以是`static`，这意味着您可以在不创建外部类的对象的情况下访问它：

```java
class OuterClass {
  int x = 10;

  static class InnerClass {
    int y = 5;
  }
}

public class Main {
  public static void main(String[] args) {
    OuterClass.InnerClass myInner = new OuterClass.InnerClass();
    System.out.println(myInner.y);
  }
}

// Outputs 5
 
```

**注意：**就像`static`属性和方法一样，`static`内部类不能访问外部类的成员。



## 从内部类访问外部类

内部类的一个优点是它们可以访问外部类的属性和方法：

💡简单的一个案例如下：

```java
class OuterClass {
  int x = 10;

  class InnerClass {
    public int myInnerMethod() {
      return x;
    }
  }
}

public class Main {
  public static void main(String[] args) {
    OuterClass myOuter = new OuterClass();
    OuterClass.InnerClass myInner = myOuter.new InnerClass();
    System.out.println(myInner.myInnerMethod());
  }
}
// Outputs 10
```



## 抽象类和方法

数据**抽象**是隐藏某些细节并仅向用户显示基本信息的过程。
抽象可以通过**抽象类**或 **接口**来实现。

`abstract`关键字是非访问修饰符，用于类和方法 ：

- **抽象类：**是一个受限制的类，不能用于创建对象（要访问它，必须从另一个类继承）。
- **抽象方法：**只能在抽象类中使用，它没有主体。主体由子类（继承自）提供。

抽象类可以同时具有抽象方法和常规方法：

```java
abstract class Animal {
  public abstract void animalSound();
  public void sleep() {
    System.out.println("Zzz");
  }
}
```

从上面的示例中，无法创建 Animal 类的对象：

```java
Animal myObj = new Animal(); //将产生一个错误
```

**要访问抽象类，它必须从另一个类继承。**让我们将我们在[多态](https://www.w3schools.com/java/java_polymorphism.asp)一章中使用的 Animal 类转换为抽象类：

请记住，**在继承中**，我们使用`extends`关键字从类继承。

```java
// Abstract class
abstract class Animal {
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep() {
    System.out.println("Zzz");
  }
}

// Subclass (inherit from Animal)
class Pig extends Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig(); // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}
```



### 上转型

```java
// Abstract class
abstract class Animal {
  // Abstract method (does not have a body)
  public abstract void animalSound();
  // Regular method
  public void sleep() {
    System.out.println("Zzz");
  }
}

// Subclass (inherit from Animal)
class Pig extends Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig(); // Create a Pig object
    //Animal animal = new Animal(); //不能定义
    //animal.sleep();
    
    Animal myPig2 = new Pig();  //上转型
    myPig.animalSound();
    myPig.sleep();
    myPig2.animalSound();
    myPig2.sleep();
  }
}
```



### 为什么以及何时使用抽象类和方法？

实现安全性 - 隐藏某些细节并仅显示对象的重要细节。

**注意：**抽象也可以通过接口来实现，您将在下一章中了解更多信息。



## 接口

在 Java**中实现抽象的另一种方法是使用接口**。

An`interface`是一个完全“**抽象类**”，用于将相关方法与空主体分组：

```java
// interface
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void run(); // interface method (does not have a body)
}
```

要访问接口方法，接口必须由另一个使用`implements` 关键字（而不是）的类“实现”（有点像继承`extends`）。接口方法的主体由“实现”类提供：

```java
// Interface
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // interface method (does not have a body)
}

// Pig "implements" the Animal interface
class Pig implements Animal {
  public void animalSound() {
    // The body of animalSound() is provided here
    System.out.println("The pig says: wee wee");
  }
  public void sleep() {
    // The body of sleep() is provided here
    System.out.println("Zzz");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig();  // Create a Pig object
    myPig.animalSound();
    myPig.sleep();
  }
}
```

### 接口注意事项：

- 与**抽象类**一样，接口**不能**用于创建对象（在上面的示例中，无法在 MyMainClass 中创建“Animal”对象）
- 接口方法没有主体——主体由“实现”类提供
- 在实现接口时，您必须覆盖其所有方法
- 接口方法默认`abstract`是 `public`
- 接口属性是默认的`public`， `static`并且`final`
- 接口不能包含构造函数（因为它不能用于创建对象）

### 为什么以及何时使用接口？

1）为了实现安全——隐藏某些细节，只显示一个对象（接口）的重要细节。

2）Java不支持“多重继承”（一个类只能从一个超类继承）。但是，它可以用接口来实现，因为类可以**实现**多个接口。 **注意：**要实现多个接口，请用逗号分隔它们（参见下面的示例）。

### 接口支持上转型

```java
interface Animal {
  public void animalSound(); // interface method (does not have a body)
  public void sleep(); // interface method (does not have a body)
}

class Pig implements Animal {
  public void animalSound() {
    System.out.println("The pig says: wee wee");
  }
  public void sleep() {
    System.out.println("Zzz");
  }
}

class Main {
  public static void main(String[] args) {
    Pig myPig = new Pig();
    myPig.animalSound();
    myPig.sleep();
    
    Animal myPig2 = new Pig();		//上转型变量
    myPig2.animalSound();
    myPig.sleep();
  }
}
```



------

### 多个接口

要实现多个接口，请用逗号分隔它们：

```java
interface FirstInterface {
  public void myMethod(); // interface method
}

interface SecondInterface {
  public void myOtherMethod(); // interface method
}

class DemoClass implements FirstInterface, SecondInterface {
  public void myMethod() {
    System.out.println("Some text..");
  }
  public void myOtherMethod() {
    System.out.println("Some other text...");
  }
}

class Main {
  public static void main(String[] args) {
    DemoClass myObj = new DemoClass();
    myObj.myMethod();
    myObj.myOtherMethod();
  }
}
```

### 多接口上转型

```java
/*
 * @Description: 
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-09-08 14:35:45
 * @LastEditTime: 2022-09-08 14:36:22
 * @FilePath: \code\top.nsddd.erer\src\a\a.java
 * @blog: https://nsddd.top
 */
interface FirstInterface {
  public void myMethod(); // interface method
}

interface SecondInterface {
  public void myOtherMethod(); // interface method
  public void a(int a); 	
}

// DemoClass "implements" FirstInterface and SecondInterface
class DemoClass implements FirstInterface, SecondInterface {
  public void myMethod() {
    System.out.println("Some text..");
  }
  public void myOtherMethod() {
    System.out.println("Some other text...");
  }
  public void a(int a){
  	 System.out.println("A = "+a);
  }  
}

class a {
  public static void main(String[] args) {
    DemoClass myObj = new DemoClass();
    myObj.myMethod();    //Some text..
    myObj.myOtherMethod();   //Some other text...
    
    //上转型
    FirstInterface my1 = new DemoClass();
    my1.myMethod();   //Some text..
    //my1.myOtherMethod();	FirstInterfacec创建的上转型不能用SecondInterface接口方法 
    
    SecondInterface my2 = new DemoClass();
    //my2.myMethod();  SecondInterface创建的上转型不能用 FirstInterfacec接口方法 
    my2.myOtherMethod();  //SecondInterface
    my2.a(1000);  //1000
  }
}
```



## 枚举

An`enum`是一个特殊的“类”，它表示一组 **常量**（不可更改的变量，如`final`变量）。

要创建`enum`，请使用`enum`关键字（而不是类或接口），并用逗号分隔常量。请注意，**它们应该是大写字母**：

```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}
```

您可以使用**点**语法访问`enum`常量：

```
Level myVar = Level.MEDIUM;
```

**Enum**是“枚举”的缩写，意思是“特别列出”。

------

## 类中的枚举

你也可以`enum`在一个类里面：

```java
public class Main {
  enum Level {
    LOW,
    MEDIUM,
    HIGH
  }

  public static void main(String[] args) {
    Level myVar = Level.MEDIUM; 
    System.out.println(myVar);
  }
}
```

输出将是：

```
MEDIUM
```

------

### Switch 语句中的枚举

枚举经常在`switch`语句中用于检查相应的值：

```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main {
  public static void main(String[] args) {
    Level myVar = Level.MEDIUM;

    switch(myVar) {
      case LOW:
        System.out.println("Low level");
        break;
      case MEDIUM:
         System.out.println("Medium level");
        break;
      case HIGH:
        System.out.println("High level");
        break;
    }
  }
}
```

输出将是：

```
Medium level
```

------

enum 类型有一个`values()`方法，它返回一个包含所有枚举常量的数组。当您想要遍历枚举的常量时，此方法很有用：

```java
enum Level {
  LOW,
  MEDIUM,
  HIGH
}

public class Main { 
  public static void main(String[] args) {
  	  int i = 1;
    for (Level myVar : Level.values()) {
      System.out.println("myVar中的第"+(i++)+"的值为:"+myVar);
    }
  } 
}
```

输出将是：

```
myVar中的第1的值为:LOW
myVar中的第2的值为:MEDIUM
myVar中的第3的值为:HIGH
```



### 枚举和类之间的区别

一个`enum`罐头，就像一个`class`，有属性和方法。唯一的区别是枚举常量是`public`,`static`和`final` (不可更改 - 不能被覆盖)。

An`enum`不能用于创建对象，也不能扩展其他类（但它可以实现接口）。



### 为什么以及何时使用枚举？

当你有你知道不会改变的值时使用枚举，比如月日、日、颜色、卡片组等。




### String

#### String、StringBuffer、StringBuilder 的区别？

**可变性**

`String` 是不可变的（后面会详细分析原因）。

`StringBuilder` 与 `StringBuffer` 都继承自 `AbstractStringBuilder` 类，在 `AbstractStringBuilder` 中也是使用字符数组保存字符串，不过没有使用 `final` 和 `private` 关键字修饰，最关键的是这个 `AbstractStringBuilder` 类还提供了很多修改字符串的方法比如 `append` 方法。

```java
abstract class AbstractStringBuilder implements Appendable, CharSequence {
    char[] value;
    public AbstractStringBuilder append(String str) {
        if (str == null)
            return appendNull();
        int len = str.length();
        ensureCapacityInternal(count + len);
        str.getChars(0, len, value, count);
        count += len;
        return this;
    }
  	//...
}
```

**线程安全性**

`String` 中的对象是不可变的，也就可以理解为常量，线程安全。`AbstractStringBuilder` 是 `StringBuilder` 与 `StringBuffer` 的公共父类，定义了一些字符串的基本操作，如 `expandCapacity`、`append`、`insert`、`indexOf` 等公共方法。`StringBuffer` 对方法加了同步锁或者对调用的方法加了同步锁，所以是线程安全的。`StringBuilder` 并没有对方法进行加同步锁，所以是非线程安全的。

**性能**

每次对 `String` 类型进行改变的时候，都会生成一个新的 `String` 对象，然后将指针指向新的 `String` 对象。`StringBuffer` 每次都会对 `StringBuffer` 对象本身进行操作，而不是生成新的对象并改变对象引用。相同情况下使用 `StringBuilder` 相比使用 `StringBuffer` 仅能获得 10%~15% 左右的性能提升，但却要冒多线程不安全的风险。

**对于三者使用的总结：**

1. 操作少量的数据: 适用 `String`
2. 单线程操作字符串缓冲区下操作大量数据: 适用 `StringBuilder`
3. 多线程操作字符串缓冲区下操作大量数据: 适用 `StringBuffer`

#### String 为什么是不可变的?

`String` 类中使用 `final` 关键字修饰字符数组来保存字符串，~~所以`String` 对象是不可变的。~~

```java
public final class String implements java.io.Serializable, Comparable<String>, CharSequence {
    private final char value[];
	//...
}
```

> 🐛 修正 ： 我们知道被 `final` 关键字修饰的类不能被继承，修饰的方法不能被重写，修饰的变量是基本数据类型则值不能改变，修饰的变量是引用类型则不能再指向其他对象。因此，`final` 关键字修饰的数组保存字符串并不是 `String` 不可变的根本原因，因为这个数组保存的字符串是可变的（`final` 修饰引用类型变量的情况）。
>
> `String` 真正不可变有下面几点原因：
>
> 1. 保存字符串的数组被 `final` 修饰且为私有的，并且`String` 类没有提供/暴露修改这个字符串的方法。
> 2. `String` 类被 `final` 修饰导致其不能被继承，进而避免了子类破坏 `String` 不可变。
>
> 相关阅读：[如何理解 String 类型值的不可变？ - 知乎提问](https://www.zhihu.com/question/20618891/answer/114125846)
>
> 补充（来自[issue 675](https://github.com/Snailclimb/JavaGuide/issues/675)）：在 Java 9 之后，`String` 、`StringBuilder` 与 `StringBuffer` 的实现改用 `byte` 数组存储字符串。
>
> ```java
> public final class String implements java.io.Serializable,Comparable<String>, CharSequence {
>     // @Stable 注解表示变量最多被修改一次，称为“稳定的”。
>     @Stable
>     private final byte[] value;
> }
> 
> abstract class AbstractStringBuilder implements Appendable, CharSequence {
>     byte[] value;
> 
> }
> ```
>
> **Java 9 为何要将 `String` 的底层实现由 `char[]` 改成了 `byte[]` ?**
>
> 新版的 String 其实支持两个编码方案： Latin-1 和 UTF-16。如果字符串中包含的汉字没有超过 Latin-1 可表示范围内的字符，那就会使用 Latin-1 作为编码方案。Latin-1 编码方案下，`byte` 占一个字节(8 位)，`char` 占用 2 个字节（16），`byte` 相较 `char` 节省一半的内存空间。
>
> JDK 官方就说了绝大部分字符串对象只包含 Latin-1 可表示的字符。
>
> ![](https://sm.nsddd.top//typora/jdk9-string-latin1.png?mail:3293172751@qq.com)
>
> 如果字符串中包含的汉字超过 Latin-1 可表示范围内的字符，`byte` 和 `char` 所占用的空间是一样的。
>
> 这是官方的介绍：https://openjdk.java.net/jeps/254 。

#### 字符串拼接用“+” 还是 StringBuilder?

Java 语言本身并不支持运算符重载，“+”和“+=”是专门为 String 类重载过的运算符，也是 Java 中仅有的两个重载过的运算符。

```java
String str1 = "he";
String str2 = "llo";
String str3 = "world";
String str4 = str1 + str2 + str3;
```

上面的代码对应的字节码如下：

![](https://sm.nsddd.top//typora/image-20220422161637929.png?mail:3293172751@qq.com)

可以看出，字符串对象通过“+”的字符串拼接方式，实际上是通过 `StringBuilder` 调用 `append()` 方法实现的，拼接完成之后调用 `toString()` 得到一个 `String` 对象 。

不过，在循环内使用“+”进行字符串的拼接的话，存在比较明显的缺陷：**编译器不会创建单个 `StringBuilder` 以复用，会导致创建过多的 `StringBuilder` 对象**。

```java
String[] arr = {"he", "llo", "world"};
String s = "";
for (int i = 0; i < arr.length; i++) {
    s += arr[i];
}
System.out.println(s);
```

`StringBuilder` 对象是在循环内部被创建的，这意味着每循环一次就会创建一个 `StringBuilder` 对象。

![](https://sm.nsddd.top//typora/image-20220422161320823.png?mail:3293172751@qq.com)

如果直接使用 `StringBuilder` 对象进行字符串拼接的话，就不会存在这个问题了。

```java
String[] arr = {"he", "llo", "world"};
StringBuilder s = new StringBuilder();
for (String value : arr) {
    s.append(value);
}
System.out.println(s);
```

![](https://sm.nsddd.top//typora/image-20220422162327415.png?mail:3293172751@qq.com)

如果你使用 IDEA 的话，IDEA 自带的代码检查机制也会提示你修改代码。

#### String#equals() 和 Object#equals() 有何区别？

`String` 中的 `equals` 方法是被重写过的，比较的是 String 字符串的值是否相等。 `Object` 的 `equals` 方法是比较的对象的内存地址。

#### 字符串常量池的作用了解吗？

**字符串常量池** 是 JVM 为了提升性能和减少内存消耗针对字符串（String 类）专门开辟的一块区域，主要目的是为了避免字符串的重复创建。

```java
// 在堆中创建字符串对象”ab“
// 将字符串对象”ab“的引用保存在字符串常量池中
String aa = "ab";
// 直接返回字符串常量池中字符串对象”ab“的引用
String bb = "ab";
System.out.println(aa==bb);// true
```

更多关于字符串常量池的介绍可以看一下 [Java 内存区域详解](https://javaguide.cn/java/jvm/memory-area.html) 这篇文章。

#### String s1 = new String("abc");这句话创建了几个字符串对象？

会创建 1 或 2 个字符串对象。

1、如果字符串常量池中不存在字符串对象“abc”的引用，那么会在堆中创建 2 个字符串对象“abc”。

示例代码（JDK 1.8）：

```java
String s1 = new String("abc");
```

对应的字节码：

![](https://sm.nsddd.top//typora/image-20220413175809959.png?mail:3293172751@qq.com)

`ldc` 命令用于判断字符串常量池中是否保存了对应的字符串对象的引用，如果保存了的话直接返回，如果没有保存的话，会在堆中创建对应的字符串对象并将该字符串对象的引用保存到字符串常量池中。

2、如果字符串常量池中已存在字符串对象“abc”的引用，则只会在堆中创建 1 个字符串对象“abc”。

示例代码（JDK 1.8）：

```java
// 字符串常量池中已存在字符串对象“abc”的引用
String s1 = "abc";
// 下面这段代码只会在堆中创建 1 个字符串对象“abc”
String s2 = new String("abc");
```

对应的字节码：

![](https://sm.nsddd.top//typora/image-20220413180021072.png?mail:3293172751@qq.com)

这里就不对上面的字节码进行详细注释了，7 这个位置的 `ldc` 命令不会在堆中创建新的字符串对象“abc”，这是因为 0 这个位置已经执行了一次 `ldc` 命令，已经在堆中创建过一次字符串对象“abc”了。7 这个位置执行 `ldc` 命令会直接返回字符串常量池中字符串对象“abc”对应的引用。

#### intern 方法有什么作用?

`String.intern()` 是一个 native（本地）方法，其作用是将指定的字符串对象的引用保存在字符串常量池中，可以简单分为两种情况：

- 如果字符串常量池中保存了对应的字符串对象的引用，就直接返回该引用。
- 如果字符串常量池中没有保存了对应的字符串对象的引用，那就在常量池中创建一个指向该字符串对象的引用并返回。

示例代码（JDK 1.8） :

```java
// 在堆中创建字符串对象”Java“
// 将字符串对象”Java“的引用保存在字符串常量池中
String s1 = "Java";
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s2 = s1.intern();
// 会在堆中在单独创建一个字符串对象
String s3 = new String("Java");
// 直接返回字符串常量池中字符串对象”Java“对应的引用
String s4 = s3.intern();
// s1 和 s2 指向的是堆中的同一个对象
System.out.println(s1 == s2); // true
// s3 和 s4 指向的是堆中不同的对象
System.out.println(s3 == s4); // false
// s1 和 s4 指向的是堆中的同一个对象
System.out.println(s1 == s4); //true
```

#### String 类型的变量和常量做“+”运算时发生了什么？

先来看字符串不加 `final` 关键字拼接的情况（JDK1.8）：

```java
String str1 = "str";
String str2 = "ing";
String str3 = "str" + "ing";
String str4 = str1 + str2;
String str5 = "string";
System.out.println(str3 == str4);//false
System.out.println(str3 == str5);//true
System.out.println(str4 == str5);//false
```

> **注意** ：比较 String 字符串的值是否相等，可以使用 `equals()` 方法。 `String` 中的 `equals` 方法是被重写过的。 `Object` 的 `equals` 方法是比较的对象的内存地址，而 `String` 的 `equals` 方法比较的是字符串的值是否相等。如果你使用 `==` 比较两个字符串是否相等的话，IDEA 还是提示你使用 `equals()` 方法替换。

![](https://sm.nsddd.top//typora/image-20210817123252441.png?mail:3293172751@qq.com)

**对于编译期可以确定值的字符串，也就是常量字符串 ，jvm 会将其存入字符串常量池。并且，字符串常量拼接得到的字符串常量在编译阶段就已经被存放字符串常量池，这个得益于编译器的优化。**

在编译过程中，Javac 编译器（下文中统称为编译器）会进行一个叫做 **常量折叠(Constant Folding)** 的代码优化。《深入理解 Java 虚拟机》中是也有介绍到：

![](https://sm.nsddd.top//typora/image-20210817142715396.png?mail:3293172751@qq.com)

常量折叠会把常量表达式的值求出来作为常量嵌在最终生成的代码中，这是 Javac 编译器会对源代码做的极少量优化措施之一(代码优化几乎都在即时编译器中进行)。

对于 `String str3 = "str" + "ing";` 编译器会给你优化成 `String str3 = "string";` 。

并不是所有的常量都会进行折叠，只有编译器在程序编译期就可以确定值的常量才可以：

- 基本数据类型( `byte`、`boolean`、`short`、`char`、`int`、`float`、`long`、`double`)以及字符串常量。
- `final` 修饰的基本数据类型和字符串变量
- 字符串通过 “+”拼接得到的字符串、基本数据类型之间算数运算（加减乘除）、基本数据类型的位运算（<<、\>>、\>>> ）

**引用的值在程序编译期是无法确定的，编译器无法对其进行优化。**

对象引用和“+”的字符串拼接方式，实际上是通过 `StringBuilder` 调用 `append()` 方法实现的，拼接完成之后调用 `toString()` 得到一个 `String` 对象 。

```java
String str4 = new StringBuilder().append(str1).append(str2).toString();
```

我们在平时写代码的时候，尽量避免多个字符串对象拼接，因为这样会重新创建对象。如果需要改变字符串的话，可以使用 `StringBuilder` 或者 `StringBuffer`。

不过，字符串使用 `final` 关键字声明之后，可以让编译器当做常量来处理。

示例代码：

```java
final String str1 = "str";
final String str2 = "ing";
// 下面两个表达式其实是等价的
String c = "str" + "ing";// 常量池中的对象
String d = str1 + str2; // 常量池中的对象
System.out.println(c == d);// true
```

被 `final` 关键字修改之后的 `String` 会被编译器当做常量来处理，编译器在程序编译期就可以确定它的值，其效果就相当于访问常量。

如果 ，编译器在运行时才能知道其确切值的话，就无法对其优化。

示例代码（`str2` 在运行时才能确定其值）：

```java
final String str1 = "str";
final String str2 = getStr();
String c = "str" + "ing";// 常量池中的对象
String d = str1 + str2; // 在堆上创建的新的对象
System.out.println(c == d);// false
public static String getStr() {
      return "ing";
}
```

