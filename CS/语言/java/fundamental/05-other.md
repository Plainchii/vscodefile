








## 多态数组

💡简单的一个案例如下：

```java
package polyarr_;

public class Array {
    public static void main(String[] args) {
        Person[] persons = new Person[5];
        persons[0] = new Person("张三", 18);
        persons[1] = new Teacher("李四", 28, 12.132);  //老师
        persons[2] = new Student("王五", 38, 123.2);  //学生
        persons[3] = new Teacher("赵六", 48,132.41);
        persons[4] = new Student("田七", 58,421.232);

        for (int i = 0; i < persons.length; i++) {
            //persons[i]的编译类型是Person，运行类型是Person、Student或Teacher,根据实际情况Java虚拟机会调用相应的方法
            System.out.println(persons[i]); //这里会有一个动态绑定机制
        }
    }
}

class Student extends Person {
    private double score;
    public Student(String name, int age, double score) {
        super(name, age);
        this.score = score;
    }

    //重写父类的toString方法  -- 从父类开始查找
    public String toString() {
        return super.toString() + ", score=" + score;
    }

    public double getScore() {
        return score;
    }

    public void setScore(double score) {
        this.score = score;
    }
}

class Teacher extends Person {
    private double salary;  //薪水
    public Teacher(String name, int age, double salary) {
        super(name, age);
        this.salary = salary;
    }

    public double getSalary() {
        return salary;
    }

    public void setSalary(double salary) {
        this.salary = salary;
    }

    //重写父类的toString方法  -- 从父类开始查找
    public String toString() {
        return super.toString() + ", salary=" + salary;
    }

}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String toString() {
        return "Person [name=" + name + ", age=" + age + "]";
    }
}
```

🚀 编译结果如下：

```bash
Person [name=张三, age=18]
Person [name=李四, age=28], salary=12.132
Person [name=王五, age=38], score=123.2
Person [name=赵六, age=48], salary=132.41
Person [name=田七, age=58], score=421.232
```



### 如何调用上面子类特有的方法

> 比如说：
>
> + `Teacher`中的`teach`方法
>
>   ```java
>   public void teach() {
>       System.out.println("姓名：" + getName() + "，年龄：" + getAge() + "，薪水：" + salary + "，在教书");
>   }
>   ```
>
>   
>
> + `Student`中的`study`方法
>
>   ```java
>   //特有方法
>   public void study() {
>       System.out.println("姓名：" + getName() + "，年龄：" + getAge() + "，成绩：" + score + "，在学习");
>   }
>   ```

**但是我们调用好像是会出问题的**

![image-20221004115425616](./images/image-20221004115425616.png)

📜 对上面的解释：

> `persons[i]`的编译类型是`persons`类，是没有这样的方法的。

**这个是不是和我们之前学下转型一样的，对吧，是的，我们这里也需要用到下转型方法**

💡简单的一个案例如下：

```java
package polyarr_;

public class Array {
    public static void main(String[] args) {
        Person[] persons = new Person[5];
        persons[0] = new Person("张三", 18);
        persons[1] = new Teacher("李四", 28, 12.132);  //老师
        persons[2] = new Student("王五", 38, 123.2);  //学生
        persons[3] = new Teacher("赵六", 48,132.41);
        persons[4] = new Student("田七", 58,421.232);

        for (int i = 0; i < persons.length; i++) {
            //persons[i]的编译类型是Person，运行类型是Person、Student或Teacher,根据实际情况Java虚拟机会调用相应的方法
            System.out.println(persons[i]); //这里会有一个动态绑定机制
            if (persons[i] instanceof Teacher) {
                //向下转型: 等同于Teacher t = (Teacher)persons[i]; t.teach();
                ((Teacher) persons[i]).teach();
            } else if (persons[i] instanceof Student) {
                //向下转型: 等同于Student s = (Student)persons[i]; s.study();
                ((Student) persons[i]).study();
            } else if (persons[i] instanceof Person) {
                System.out.println("这是一个普通人");
             }else {
                System.out.println("不是老师也不是学生，也不是人,你的类型有问题");
            }
        }
    }
}
```

🚀 编译结果如下：

```bash
Person [name=张三, age=18]
这是一个普通人
Person [name=李四, age=28], salary=12.132
姓名：李四，年龄：28，薪水：12.132，在教书
Person [name=王五, age=38], score=123.2
姓名：王五，年龄：38，成绩：123.2，在学习
Person [name=赵六, age=48], salary=132.41
姓名：赵六，年龄：48，薪水：132.41，在教书
Person [name=田七, age=58], score=421.232
姓名：田七，年龄：58，成绩：421.232，在学习
```



## 多态参数

💡简单的一个案例如下：

```java
package poloy;

public class PloyParameter {
    public static void main(String[] args) {
        // TODO Auto-generated method stub
        Manager m = new Manager("张三", 30, 5000); // 创建经理对象
        m.setBonus(5000);
        Worker w = new Worker("李四", 20, 3000);  // 创建工人对象
        System.out.println(m);  // 打印经理对象
        System.out.println(w);  // 打印工人对象
        System.out.println("经理的年工资是"+m.getSalary()); // 打印经理的年工资
        System.out.println("工人的年工资是"+w.getSalary()); // 打印工人的年工资
        System.out.println("经理的年工资是"+getSalary(m));  // 打印经理的年工资
        System.out.println("工人的年工资是"+getSalary(w)); // 打印工人的年工资
    }

    public static double getSalary(Employee e) {
        return e.getSalary(); // 调用Employee类的getSalary方法
    }
}

class Employee {
    public String name;
    public int age;
    public double salary;   //工资薪水


    public Employee(String name, int age, double salary) {
        this.name = name;
        this.age = age;
        this.salary = salary;
    }


    // 得到年工资的方法
    public double getSalary() {
        //有的是十二薪，有的是十三薪，有的是十四薪 方法不同，但是功能是一样的
        return 12 * salary;  // 12个月
    }

    // 修改工资的方法
    public void setSalary(double salary) {
        this.salary = salary;
    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String toString() {
        return "Employee [name=" + name + ", age=" + age + "]";
    }
}

class Manager extends Employee {
    // 经理的工作
    private double bonus;   //奖金

    public Manager(String name, int age, double salary) {
        super(name, age, salary);
    }

    public void work() {
        System.out.println("经理"+getName()+"要管理,年龄是"+getAge() +"薪资是"+getSalary());
    }

    public double getSalary() {
        //经理的工资是每月的工资*14，但是经理有奖金，所以要加上奖金
        return super.getSalary() + bonus * 14 ;  // 14个月
    }

    // 奖金的get和set方法
    public double getBonus() {
        return bonus;
    }

    public void setBonus(double bonus) {
        this.bonus = bonus;
    }

    public String toString() {
        return "Manager [name=" + getName() + ", age=" + getAge() + ", salary=" + salary + ", bonus=" + bonus + "]";
    }
}



class Worker extends Employee {
    // 工人的工作
    public Worker(String name, int age, double salary) {
        super(name, age, salary);
    }

    public void work() {
        System.out.println("工人"+getName()+"要干活,年龄是"+getAge() +"薪资是"+getSalary());
    }


    public double getSalary() {
        //工人的工资是每月的工资*13，因为没有奖金，可以直接调用父类的方法
        return 13 * salary;  // 13个月
    }

    public String toString() {
        return "Worker [name=" + getName() + ", age=" + getAge() + ", salary=" + salary + "]";
    }


}

```

🚀 编译结果如下：

```
Manager [name=张三, age=30, salary=5000.0, bonus=5000.0]
Worker [name=李四, age=20, salary=3000.0]
经理的年工资是130000.0
工人的年工资是39000.0
经理的年工资是130000.0
工人的年工资是39000.0
```



📜 对上面的解释：

```java
//添加一个方法，testWork方法，可以测试任何员工的工作
//向下转型
public static void testWork(Employee e) {
    if(e instanceof Manager) {
        Manager m = (Manager) e;
        m.work();
        //也可以写成
        //((Manager) e).work();
    } else if(e instanceof Worker) {
        Worker w = (Worker) e;
        w.work();
    } else {
        System.out.println("输入的员工类型不正确");
    }
}
```



## 

### 创建一个对象用什么运算符?对象实体与对象引用有何不同?

new 运算符，new 创建对象实例（对象实例在堆内存中），对象引用指向对象实例（对象引用存放在栈内存中）。

一个对象引用可以指向 0 个或 1 个对象（一根绳子可以不系气球，也可以系一个气球）;一个对象可以有 n 个引用指向它（可以用 n 条绳子系住一个气球）。

### 对象的相等和引用相等的区别

- 对象的相等一般比较的是内存中存放的内容是否相等。
- 引用相等一般比较的是他们指向的内存地址是否相等。

### 类的构造方法的作用是什么?

构造方法是一种特殊的方法，主要作用是完成对象的初始化工作。

### 如果一个类没有声明构造方法，该程序能正确执行吗?

如果一个类没有声明构造方法，也可以执行！因为一个类即使没有声明构造方法也会有默认的不带参数的构造方法。如果我们自己添加了类的构造方法（无论是否有参），Java 就不会再添加默认的无参数的构造方法了，我们一直在不知不觉地使用构造方法，这也是为什么我们在创建对象的时候后面要加一个括号（因为要调用无参的构造方法）。如果我们重载了有参的构造方法，记得都要把无参的构造方法也写出来（无论是否用到），因为这可以帮助我们在创建对象的时候少踩坑。

### 构造方法有哪些特点？是否可被 override?

构造方法特点如下：

- 名字与类名相同。
- 没有返回值，但不能用 void 声明构造函数。
- 生成类的对象时自动执行，无需调用。

构造方法不能被 override（重写）,但是可以 overload（重载）,所以你可以看到一个类中有多个构造函数的情况。

### 接口和抽象类有什么共同点和区别？

**共同点** ：

- 都不能被实例化。
- 都可以包含抽象方法。
- 都可以有默认实现的方法（Java 8 可以用 `default` 关键字在接口中定义默认方法）。

**区别** ：

- 接口主要用于对类的行为进行约束，你实现了某个接口就具有了对应的行为。抽象类主要用于代码复用，强调的是所属关系（比如说我们抽象了一个发送短信的抽象类，）。
- 一个类只能继承一个类，但是可以实现多个接口。
- 接口中的成员变量只能是 `public static final` 类型的，不能被修改且必须有初始值，而抽象类的成员变量默认 default，可在子类中被重新定义，也可被重新赋值。