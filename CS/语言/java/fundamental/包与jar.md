## 包  
一般包名的规则为：公司域名反写 + 包的作用，而且全部都要用英文小写。
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
以上代码中的 import 你可能也在其他代码中见到过，但你不知道啥作用。其实它就是为了包的使用而生，如果我要使用另一个人的包，那该怎么做呢？其实很简单，只需要在程序中使用关键字 import 即可完成包的导入。

通过使用包，可以达到以下的作用：

将功能类似或或相关的类以及接口组织放在同一个包中，方便类的查找与使用。
包也像文件夹一样，采用了树形目录的存储方式。同一个包中的类名不同，不同包中的类名可以相同。当同时调用两个不同包中的同一类名的类时，通过加上完整的包名就可以加以区分，从而避免类名冲突。
同时包也限定了访问权限，只有拥有包访问权限的类才能间接去访问包中的类。  

## jar文件