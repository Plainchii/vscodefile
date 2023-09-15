

# Java HashMap
`HashMap`将项目存储在“**键**/**值**”对中，您可以通过另一种类型的索引（例如 a `String`）访问。

一个对象用作另一个对象（值）的键（索引）。它可以存储不同的类型：`String`键和`Integer`值，也可以存储相同的类型，例如：`String`键和`String`值：

创建一个`HashMap`名为**capitalCities**的对象，它将存储`String` **键**和`String` **值**：

```java
import java.util.HashMap; // import the HashMap class
HashMap<String, String> capitalCities = new HashMap<String, String>();
```

## 添加项目

```java
// Import the HashMap class
import java.util.HashMap;

public class Main {
  public static void main(String[] args) {
    // Create a HashMap object called capitalCities
    HashMap<String, String> capitalCities = new HashMap<String, String>();

    // Add keys and values (Country, City)
    capitalCities.put("England", "London");
    capitalCities.put("Germany", "Berlin");
    capitalCities.put("Norway", "Oslo");
    capitalCities.put("USA", "Washington DC");
    System.out.println(capitalCities);
  }
}
```

**我们需要知道`<String, String>`是代表着`<key,value>`,下面案例**

```java
/*
 * @Description: HashMap
 * @Author: xiongxinwei 3293172751nss@gmail.com
 * @Date: 2022-09-08 19:19:12
 * @LastEditTime: 2022-09-11 14:26:20
 * @FilePath: \code\project1\src\Main.java
 * @blog: https://nsddd.top
 */
import java.util.HashMap;

import javax.xml.catalog.CatalogManager;

public class Main {
    public static void main(String[] args) {
        HashMap<Integer,String> capMap = new HashMap<Integer,String>();
        System.out.println("Hello world!");
        capMap.put(1, "asfd");
        capMap.put(2, "asfd");
        capMap.put(3, "asfd");
        capMap.put(4, "asfd");
        capMap.put(5, "asfd");
        capMap.put(6, "asfd");
        System.out.println(capMap);   
    }
}
```

##  方法
### get()访问项目
```java
capitalCities.get("England");
```

### remove()移除项目
```java
capitalCities.remove("England");
```
### clear()删除所有项目
```java
capitalCities.clear();
```
### size()哈希图大小

要找出有多少项目，请使用以下``方法：

```java
capitalCities.size();
```

## 循环遍历

`HashMap`使用**for-each**循环遍历 a的项目。

**注意：**`keySet()`如果您只需要键，请使用该方法`values()`，如果您只需要值，请使用该方法：

```java
// Print keys
for (String i : capitalCities.keySet()) {
  System.out.println(i);
}
```

```java
// Print values
for (String i : capitalCities.values()) {
  System.out.println(i);
}
```

```java
// Print keys and values
for (String i : capitalCities.keySet()) {
  System.out.println("key: " + i + " value: " + capitalCities.get(i));
}
```

## 其他类型
使用泛型