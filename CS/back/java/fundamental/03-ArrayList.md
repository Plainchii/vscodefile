# 集合AL
ArrayList 类是一个可以动态修改的数组，与普通数组的区别就是它是没有固定大小的限制，我们可以添加或删除元素。

ArrayList 类位于 java.util 包中，使用前需要引入它，语法格式如下：

    import java.util.ArrayList; // 引入 ArrayList 类
    ArrayList<E> objectName =new ArrayList<>();　 // 初始化
- E: 泛型数据类型，用于设置 objectName(对象名) 的数据类型，只能为引用数据类型。

## 方法
### 添加add()
    ArrayList<String> sites = new ArrayList<String>();
            sites.add("1");
            sites.add("2");
            sites.add("3");
            sites.add("4");
            System.out.println(sites);//[1,2,3,4]

### 访问get()
System.out.println(sites.get(1));  // 访问第二个元素-2

### 修改set()
    sites.set(2, "5"); // 第一个参数为索引位置，第二个为要修改的值
    System.out.println(sites);//[1,2,5,4]

### 删除Remove()
    sites.remove(3); // 删除第四个元素
    System.out.println(sites);//[1,2,3]

### 计算大小size()
    System.out.println(sites.size());//4

### 迭代数组列表
    for (int i = 0; i < sites.size(); i++) {
    System.out.println(sites.get(i));//1
                                        2
                                        3
                                        4

### forEach()
遍历动态数组中每一个元素并执行特定操作。
arraylistname.forEach(Consumer<E> action)
action - 对每个元素执行的操作,没有返回值
```js
        // 创建一个动态数组
        ArrayList<Integer> numbers = new ArrayList<>();

        // 往数组中添加元素
        numbers.add(1);
        numbers.add(2);
        numbers.add(3);
        numbers.add(4);
        System.out.println("ArrayList: " + numbers);
        //ArrayList: [1, 2, 3, 4]

        // 所有元素乘以 10
        System.out.print("更新 ArrayList: ");
        //更新 ArrayList: 10 20 30 40 
       
        // 将匿名函数 lambda 的表达式作为 forEach() 方法的参数传入
        numbers.forEach((e) -> {
            e = e * 10;
            System.out.print(e + " ");
        });
    }
```
### 基本包装类
    ArrayList<Integer> li=new ArrayList<>();     // 存放整数元素
    ArrayList<Character> li=new ArrayList<>();   // 存放字符元素


