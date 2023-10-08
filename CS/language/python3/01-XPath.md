## 使用 XPath

XPath，全称 XML Path Language，即 XML 路径语言，它是一门在 XML 文档中查找信息的语言。

XPath 的选择功能十分强大，它提供了非常简洁明了的路径选择表达式。另外，它还提供了超过 100 个内建函数，用于字符串、数值、时间的匹配以及节点、序列的处理等。几乎所有我们想要定位的节点，都可以用 XPath 来选择。

|  表　达　式 | 描　　述                            |
| ------------- | ---------------------------- |
|  nodename | 选取此节点的所有子节点    |
|  /                 | 从当前节点选取直接子节点 |
|  //               | 从当前节点选取子孙节点    |
|  .                 | 选取当前节点                     |
|  ..                 | 选取当前节点的父节点        |
|  @               | 选取属性                            |


|  运算符 | 描　　述           | 实　　例                       | 返　回　值                                                                    |
| -------- | ----------------- | ------------------------- | ---------------------------------------------------------- |
|  or        | 或                     | age=19 or age=20      | 如果 age 是 19，则返回 true。如果 age 是 21，则返回 false |
|  and     | 与                     | age&gt;19 and age&lt;21 | 如果 age 是 20，则返回 true。如果 age 是 18，则返回 false |
|  mod    | 计算除法的余数 | 5 mod 2                       | 1                                                                                   |
|  |          | 计算两个节点集 | //book | //cd               | 返回所有拥有 book 和 cd 元素的节点集                             |
|  +         | 加法                  | 6 + 4                           | 10                                                                                 |
|  -          | 减法                  | 6 - 4                             | 2                                                                                   |
|  *          | 乘法                  | 6 * 4                            | 24                                                                                 |
|  div      | 除法                  | 8 div 4                         | 2                                                                                   |
|  =         | 等于                  | age=19                        | 如果 age 是 19，则返回 true。如果 age 是 20，则返回 false |
|  !=        | 不等于              | age!=19                       | 如果 age 是 18，则返回 true。如果 age 是 19，则返回 false |
|  &lt;        | 小于                  | age&lt;19                       | 如果 age 是 18，则返回 true。如果 age 是 19，则返回 false |
|  &lt;=      | 小于或等于        | age&lt;=19                     | 如果 age 是 19，则返回 true。如果 age 是 20，则返回 false |
|  &gt;       | 大于                  | age&gt;19                      | 如果 age 是 20，则返回 true。如果 age 是 19，则返回 false |
|  &gt;=    | 大于或等于        | age&gt;=19                   | 如果 age 是 19，则返回 true。如果 age 是 18，则返回 false |

```python
from lxml import etree
text = '''
<div>
    <ul>
         <li class="item-0"><a href="link1.html">first item</a></li>
         <li class="item-1"><a href="link2.html">second item</a></li>
         <li class="item-inactive"><a href="link3.html">third item</a></li>
         <li class="item-1"><a href="link4.html">fourth item</a></li>
         <li class="item-0"><a href="link5.html">fifth item</a>
     </ul>
 </div>
'''
html = etree.HTML(text)
result = etree.tostring(html)
print(result.decode('utf-8'))
```
这里首先导入 lxml 库的 etree 模块，然后声明了一段 HTML 文本，调用 HTML 类进行初始化，成功构造了一个 XPath 解析对象。

## 节点
### 选取所有节点

//开头来选取所有符合要求的节点

```python
from lxml import etree
html = etree.parse('./test.html', etree.HTMLParser())
result = html.xpath('//*')
print(result)
```
运行结果如下：
```python
[<Element html at 0x10510d9c8>, <Element body at 0x10510da08>, <Element div at 0x10510da48>, <Element ul at 0x10510da88>, <Element li at 0x10510dac8>, <Element a at 0x10510db48>, <Element li at 0x10510db88>, <Element a at 0x10510dbc8>, <Element li at 0x10510dc08>, <Element a at 0x10510db08>, <Element li at 0x10510dc48>, <Element a at 0x10510dc88>, <Element li at 0x10510dcc8>, <Element a at 0x10510dd08>]
```

这里使用 * 代表匹配所有节点，也就是整个 HTML 文本中的所有节点都会被获取。可以看到，返回形式是一个列表，每个元素是 Element 类型，其后跟了节点的名称，如 html、body、div、ul、li、a 等，所有节点都包含在列表中了。


当然，此处匹配也可以指定节点名称。如果想获取所有 li 节点，示例如下：
```python
from lxml import etree
html = etree.parse('./test.html', etree.HTMLParser())
result = html.xpath('//li')
print(result)
print(result[0])
```

```python
[<Element li at 0x105849208>, <Element li at 0x105849248>, <Element li at 0x105849288>, <Element li at 0x1058492c8>, <Element li at 0x105849308>]
<Element li at 0x105849208>
```

### 子孙节点
我们通过 / 或 // 即可查找元素的子节点或子孙节点
选择 li 节点的所有直接 a 子节点

```python
from lxml import etree

html = etree.parse('./test.html', etree.HTMLParser())
result = html.xpath('//li/a')
print(result)
```

```python
[<Element a at 0x106ee8688>, <Element a at 0x106ee86c8>, <Element a at 0x106ee8708>, <Element a at 0x106ee8748>, <Element a at 0x106ee8788>]
```

```python
from lxml import etree

html = etree.parse('./test.html', etree.HTMLParser())
result = html.xpath('//ul//a')
print(result)
```

### 父节点
首先选中 href 属性为 link4.html 的 a 节点，然后再获取其父节点，然后再获取其 class 属性
```python
from lxml import etree  

html = etree.parse('./test.html', etree.HTMLParser())  
result = html.xpath('//a[@href="link4.html"]/../@class')
result = html.xpath('//a[@href="link4.html"]/parent::*/@class') 
print(result)
```
运行结果如下：
```
['item-1']
```

## 属性
### 属性匹配
```python
from lxml import etree  
html = etree.parse('./test.html', etree.HTMLParser())  
result = html.xpath('//li[@class="item-0"]')  
print(result)
```

```python
<Element li at 0x10a399288>, <Element li at 0x10a3992c8>
```

### 属性获取
获取所有 li 节点下所有 a 节点的 href 属性
```
from lxml import etree  

html = etree.parse('./test.html', etree.HTMLParser())  
result = html.xpath('//li/a/@href')  
print(result)
```
通过 @href 即可获取节点的 href 属性。
属性匹配是中括号加属性名和值来限定某个属性，如 [@href="link1.html"]

```python
['link1.html', 'link2.html', 'link3.html', 'link4.html', 'link5.html']
```

### 属性多值匹配
某些节点的某个属性可能有多个值，HTML 文本中 li 节点的 class 属性有两个值 li 和 li-first
```python
from lxml import etree  
text = '''  
<li class="li li-first"><a href="link.html">first item</a></li>  
'''  
html = etree.HTML(text)  
result = html.xpath('//li[contains(@class, "li")]/a/text()')  
print(result)
```
contains 方法，第一个参数传入属性名称，第二个参数传入属性值，只要此属性包含所传入的属性值，就可以完成匹配了。

```
['first item']
```

### 多属性匹配
根据多个属性确定一个节点，这时就需要同时匹配多个属性
```python
from lxml import etree  
text = '''  
<li class="li li-first" name="item"><a href="link.html">first item</a></li>
'''  
html = etree.HTML(text)  
result = html.xpath('//li[contains(@class, "li") and @name="item"]/a/text()')  
print(result)
```
一个条件是 class 属性里面包含 li 字符串，另一个条件是 name 属性为 item 字符串，二者需要同时满足，需要用 and 操作符相连，相连之后置于中括号内进行条件筛选。
```
['first item']
```

## U
### 自动修正
```py
#这里需要注意的是，HTML 文本中的最后一个 li 节点是没有闭合的，但是 etree 模块可以自动修正 HTML 文本。
#这里我们调用 tostring 方法即可输出修正后的 HTML 代码，但是结果是 bytes 类型。这里利用 decode 方法将其转成 str 类型，结果如下：
from lxml import etree
text = '''
<div>
    <ul>
         <li class="item-0"><a href="link1.html">first item</a></li>
         <li class="item-1"><a href="link2.html">second item</a></li>
         <li class="item-inactive"><a href="link3.html">third item</a></li>
         <li class="item-1"><a href="link4.html">fourth item</a></li>
         <li class="item-0"><a href="link5.html">fifth item</a>
     </ul>
 </div>
'''
html = etree.HTML(text)
result = etree.tostring(html)
print(result.decode('utf-8'))

html
<html><body><div>
    <ul>
         <li class="item-0"><a href="link1.html">first item</a></li>
         <li class="item-1"><a href="link2.html">second item</a></li>
         <li class="item-inactive"><a href="link3.html">third item</a></li>
         <li class="item-1"><a href="link4.html">fourth item</a></li>
         <li class="item-0"><a href="link5.html">fifth item</a>
     </li></ul>
 </div>
</body></html>
#可以看到，经过处理之后，li 节点标签被补全，并且还自动添加了 body、html 节点。
```

### 按序选择

有时候，我们在选择的时候某些属性可能同时匹配了多个节点，但是只想要其中的某个节点，如第二个节点或者最后一个节点，这时可以利用中括号传入索引的方法获取特定次序的节点

```python
from lxml import etree

text = '''
<div>
    <ul>
         <li class="item-0"><a href="link1.html">first item</a></li>
         <li class="item-1"><a href="link2.html">second item</a></li>
         <li class="item-inactive"><a href="link3.html">third item</a></li>
         <li class="item-1"><a href="link4.html">fourth item</a></li>
         <li class="item-0"><a href="link5.html">fifth item</a>
     </ul>
 </div>
'''
html = etree.HTML(text)
result = html.xpath('//li[1]/a/text()')#第一个
print(result)
result = html.xpath('//li[last()]/a/text()')#最后一个
print(result)
result = html.xpath('//li[position()<3]/a/text()')#1和2
print(result)
result = html.xpath('//li[last()-2]/a/text()')#倒数第三
print(result)
```

```python
['first item']
['fifth item']
['first item', 'second item']
['third item']
```


### 文本获取
```html
<li class="item-0"><a href="link1.html">first item</a></li>
<li class="item-0"><a href="link5.html">fifth item</a>
</li>
```
用text 方法尝试获取 li 节点中的文本

```python
from lxml import etree  

html = etree.parse('./test.html', etree.HTMLParser())  
result = html.xpath('//li[@class="item-0"]/text()')  
print(result)
```
运行结果如下：
```
['\n     ']
```

奇怪的是，我们并没有获取到任何文本，只获取到了一个换行符，这是为什么呢？因为 XPath 中 text 方法前面是 /，而此处 / 的含义是选取直接子节点，很明显 li 的直接子节点都是 a 节点，文本都是在 a 节点内部的，所以这里匹配到的结果就是被修正的 li 节点内部的换行符，因为自动修正的 li 节点的尾标签换行了。其中一个节点因为自动修正，li 节点的尾标签添加的时候换行了，所以提取文本得到的唯一结果就是 li 节点的尾标签和 a 节点的尾标签之间的换行符。


```python
from lxml import etree  
html = etree.parse('./test.html', etree.HTMLParser())  
result = html.xpath('//li[@class="item-0"]/a/text()')  
print(result)
```

```
['first item', 'fifth item']
```
这里我们是逐层选取的，先选取了 li 节点，又利用 / 选取了其直接子节点 a，然后再选取其文本，得到的结果恰好是符合我们预期的两个结果。


```python
from lxml import etree  

html = etree.parse('./test.html', etree.HTMLParser())  
result = html.xpath('//li[@class="item-0"]//text()')  
print(result)
```

```python
['first item', 'fifth item', '\n     ']
```
这里是选取所有子孙节点的文本，其中前两个就是 li 的子节点 a 节点内部的文本，另外一个就是最后一个 li 节点内部的文本，即换行符。


- 如果要想获取子孙节点内部的所有文本，可以直接用 // 加 text 方法的方式，这样可以保证获取到最全面的文本信息，但是可能会夹杂一些换行符等特殊字符。
- 如果想获取某些特定子孙节点下的所有文本，可以先选取到特定的子孙节点，然后再调用 text 方法方法获取其内部文本，这样可以保证获取的结果是整洁的。

### 节点轴选择

XPath 提供了很多节点轴选择方法，包括获取子元素、兄弟元素、父元素、祖先元素等

```python
from lxml import etree

text = '''
<div>
    <ul>
         <li class="item-0"><a href="link1.html"><span>first item</span></a></li>
         <li class="item-1"><a href="link2.html">second item</a></li>
         <li class="item-inactive"><a href="link3.html">third item</a></li>
         <li class="item-1"><a href="link4.html">fourth item</a></li>
         <li class="item-0"><a href="link5.html">fifth item</a>
     </ul>
 </div>
'''
html = etree.HTML(text)
result = html.xpath('//li[1]/ancestor::*')
print(result)
result = html.xpath('//li[1]/ancestor::div')
print(result)
result = html.xpath('//li[1]/attribute::*')
print(result)
result = html.xpath('//li[1]/child::a[@href="link1.html"]')
print(result)
result = html.xpath('//li[1]/descendant::span')
print(result)
result = html.xpath('//li[1]/following::*[2]')
print(result)
result = html.xpath('//li[1]/following-sibling::*')
print(result)
```
运行结果如下：
```python
[<Element html at 0x107941808>, <Element body at 0x1079418c8>, <Element div at 0x107941908>, <Element ul at 0x107941948>]
[<Element div at 0x107941908>]
['item-0']
[<Element a at 0x1079418c8>]
[<Element span at 0x107941948>]
[<Element a at 0x1079418c8>]
[<Element li at 0x107941948>, <Element li at 0x107941988>, <Element li at 0x1079419c8>, <Element li at 0x107941a08>]
```

第一次选择时，我们调用了 ancestor 轴，可以获取所有祖先节点。其后需要跟两个冒号，然后是节点的选择器，这里我们直接使用 *，表示匹配所有节点，因此返回结果是第一个 li 节点的所有祖先节点，包括 html、body、div 和 ul。

第二次选择时，我们又加了限定条件，这次在冒号后面加了 div，这样得到的结果就只有 div 这个祖先节点了。

第三次选择时，我们调用了 attribute 轴，可以获取所有属性值，其后跟的选择器还是 *，这代表获取节点的所有属性，返回值就是 li 节点的所有属性值。

第四次选择时，我们调用了 child 轴，可以获取所有直接子节点。这里我们又加了限定条件，选取 href 属性为 link1.html 的 a 节点。

第五次选择时，我们调用了 descendant 轴，可以获取所有子孙节点。这里我们又加了限定条件获取 span 节点，所以返回的结果只包含 span 节点而不包含 a 节点。

第六次选择时，我们调用了 following 轴，可以获取当前节点之后的所有节点。这里我们虽然使用的是 * 匹配，但又加了索引选择，所以只获取了第二个后续节点。

第七次选择时，我们调用了 following-sibling 轴，可以获取当前节点之后的所有同级节点。这里我们使用 * 匹配，所以获取了所有后续同级节点。
