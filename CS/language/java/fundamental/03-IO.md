## 流

### 什么是流

所谓流，就是一系列数据的组合。当我们需要进行数据交互的时候，比如在服务器和客户端之间进行数据交互时，我们此时就可以使用 Java 中的流来实现。Java 中，数据的输入和输出都是以流的形式来进行的。根据数据流方向的不同，我们可以将其分为：**输入流**、**输出流**。而根据处理的数据单位不同，可分为：**字节流**、**字符流**。两者的关系可以描述为下表：

|            | 字节流         | 字符流   |
| ---------- | -------------- | -------- |
| **输入流** | `InputStream`  | `Reader` |
| **输出流** | `OutputStream` | `Writer` |

而对于字节流和字符流的选用原则，我们建议遵循如下规则：**如果数据能够通过 Windows 自带笔记本软件打开并且能够读懂其中的内容，则选用字符流，否则选择字节流。而如果我们也不知道应该使用何种类型的流，则默认使用字节流**。

下图描述了字节流和字符流的类层次图，注意：**无论是字节流还是字符流，其子类名都是以其父类名作为子类名的后缀的**。

![](./assets/20220715-in-out-stream/io-stream.png)

### InputStream

![](./assets/20220715-in-out-stream/inputstream.png)

注意，`InputStream` 并非是并不是一个接口，而是所有字节输入流所有类的父类。下面我们主要以 `FileInputStream` 来举例，所谓 `FileInputStream`，就是从文件流中读取数据，然后将数据从文件中读取到内存，常用方法如下：

| 返回值 | 方法              | 描述                                         |
| ------ | ----------------- | -------------------------------------------- |
| `int`  | `available()`     | 返回该输入流中可以读取的字节数的估计值       |
| `void` | `close()`         | 关闭输入流并释放相关资源                     |
| `int`  | `read(bytep[] b)` | 从输入流读取一些字节数，并将其存储到缓冲区 b |

下面是一个从文件中读取数据到内存中的实例，文件内容如下：

![](./assets/20220715-in-out-stream/output-file.png)

```java
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : TestInputStream
 * @date : 2021/4/20 15:29
 * @description : InputStream 实例
 */

public class TestInputStream {

    public static void main(String[] args) {

        String result = null;
        File file = new File("D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/1.txt");
        try (InputStream inputStream = new FileInputStream(file)) {

//            读取输入流中可以被读的 bytes 估计值
            int size = inputStream.available();
//            根据 bytes 数创建数组
            byte[] array = new byte[size];
//            数据读取到数组
            inputStream.read(array);
//            数组转化为字符串
            result = new String(array);

        } catch (IOException e) {
            e.printStackTrace();
        }

//        打印字符串
        System.out.println(result);

    }
}
```

![](./assets/20220715-in-out-stream/file-demo1.png)

### OutputStream

![](./assets/20220715-in-out-stream/outputstream.png)

`OutputStream` 并非是并不是一个接口，而是所有输出字节流的所有类的父类。下面我们主要以 `FileOutputStream` 来举例，所谓 `FileOutputStream`，就是从内存中读取数据，然后将数据从内存存放到文件中，常用方法如下：

| 返回值 | 方法              | 描述                                               |
| ------ | ----------------- | -------------------------------------------------- |
| `void` | `write(byte[] b)` | 将 `b.length` 个字节从指定字节数组写入此文件输出流 |
| `void` | `close()`         | 关闭文件输出流并释放相关资源                       |

```java
import java.io.*;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : TestOutputStream
 * @date : 2021/4/20 15:58
 * @description : OutputStream 实例
 */

public class TestOutputStream {
    public static void main(String[] args) {
        File file = new File("D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/2.txt");
        String content = "这是一个 OutputStream 实例！";
        try (OutputStream outputStream = new FileOutputStream(file)) {
//            字符串转换为 byte 数组
            byte[] array = content.getBytes();

//            写入数据
            outputStream.write(array);
        } catch (IOException e) {
            e.printStackTrace();
        }

        System.out.println("写入成功");
    }
}
```

![](./assets/20220715-in-out-stream/write-success.png)

![](./assets/20220715-in-out-stream/file-text.png)

需要注意的点：

- 字节流写入数据时如何实现换行？

写入换行的转义字符的字节数组即可，但是需要注意，不同系统下换行的转义字符不同，Windows 下为 `\r\n`，macOS 下为 `\r`，而 Linux 下为 `\m`。

- 字节流写入数据时如何实现追加？

调用 `public FileOutputStream(String name, boolean append)` 这个构造方法即可，当 `append` 为 `true` 时，表示追加，默认情况下是 `false`，表示不追加。

### 字符串中的编解码问题

#### 编码

- `byte[] getBytes()`：使用平台默认字符集将该字符串编码成一系列字节，然后将结果存储到新的字节数组中；
- `byte[] getBytes(String charsetName)`：使用指定字符集将该字符串编码为一系列字节，然后将结果存储到新的字节数组中；

#### 解码

- `String(byte[] bytes)`：使用平台默认字符集解码指定的字节数来构造新的字符串；
- `String(byte[] bytes, String charsetName)`：通过指定的字符集解码指定的字节数组来构造新的字符串；

```java
import java.io.UnsupportedEncodingException;
import java.util.Arrays;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : EncodeAndDecode
 * @date : 2021/4/21 9:37
 * @description : 编码和解码
 */

public class EncodeAndDecode {
    public static void main(String[] args) throws UnsupportedEncodingException {
//        编码
        String str = "村雨遥";
        byte[] bytes1 = str.getBytes();
        byte[] bytes2 = str.getBytes("UTF-8");
        byte[] bytes3 = str.getBytes("GBK");

        System.out.println(Arrays.toString(bytes1));
        System.out.println(Arrays.toString(bytes2));
        System.out.println(Arrays.toString(bytes3));

//        解码
        String res1 = new String(bytes1);
        String res2 = new String(bytes1, "UTF-8");
        String res3 = new String(bytes1, "GBK");

        System.out.println(res1);
        System.out.println(res2);
        System.out.println(res3);
    }
}
```

![](./assets/20220715-in-out-stream/encode-decode.png)

### Writer

![](./assets/20220715-in-out-stream/writer.png)

当我们要写入基于字符的数据到数据源中时，需要使用写入器 `Writer`. 以其中的 `FileWriter` 具体展开，其常用方法如下：

| 返回值 | 方法        | 描述                         |
| ------ | ----------- | ---------------------------- |
| `void` | `close()`   | 先刷新再关闭流，不能再写数据 |
| `void` | `flush()`   | 刷新流，可以继续写数据       |
| `void` | `newLine()` | 写入行分隔符                 |
| `void` | `write()`   | 写入字符或字符串             |

```java
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : TestWriter
 * @date : 2021/4/20 18:35
 * @description : Writer 实例
 */

public class TestWriter {
    public static void main(String[] args) {
        File file = new File("D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/2.txt");
        try (BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(file))) {
            bufferedWriter.write("公众号：村雨遥");
            bufferedWriter.newLine();
            bufferedWriter.write("Blog：https://cunyu1943.site");
            bufferedWriter.newLine();
            bufferedWriter.flush();
        } catch (IOException e) {
            e.printStackTrace();
        }
        System.out.println("写入成功");
    }
}
```

![](./assets/20220715-in-out-stream/write-demo.png)

### Reader

![](./assets/20220715-in-out-stream/reader.png)

当我们要从数据源读取基于字符的数据时，需要使用读取器 `Reader`. 我们以 `FileReader` 实践，其常用的方法有：

| 返回值    | 方法         | 描述                     |
| --------- | ------------ | ------------------------ |
| `void`    | `close()`    | 关闭流并释放相关资源     |
| `int`     | `read()`     | 读取一个字符             |
| `String`  | `readLine()` | 读一行文字               |
| `boolean` | `ready()`    | 获取该流是否准备好被读取 |

我们以从文件中读取内容为例：

```java
import java.io.*;

/**
 * @author : cunyu
 * @version : 1.0
 * @className : TestReader
 * @date : 2021/4/20 18:40
 * @description : Reader 实例
 */

public class TestReader {
    public static void main(String[] args) {
        String content = null;
        File file = new File("D:/PersonalFiles/github/githubCodes/IDEA/TheWay2Java/IOStream/data/2.txt");
        System.out.println("内容如下：");
        try (BufferedReader bufferedReader = new BufferedReader(new FileReader(file))) {
            while ((content = bufferedReader.readLine()) != null) {
                System.out.println(content);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

![](./assets/20220715-in-out-stream/reader-demo.png)
