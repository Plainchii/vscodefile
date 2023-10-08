
# 
Beautiful Soup 借助网页的结构和属性等特性来解析网页，HTML 或 XML 的解析库

> 提供一些函数用来处理导航、搜索、修改分析树等功能
> 自动将输入文档转换为 Unicode 编码，输出文档转换为 utf-8 编码
> 推荐使用 LXML 解析库，必要时使用 html.parser。
> 节点选择筛选功能弱但是速度快。

## 解析器
Beautiful Soup 在解析时实际上依赖解析器

|  解析器	| 使用方法 | 优势 | 劣势 |
|----- | ----- | ----- | ----- |
| Python 标准库 |	BeautifulSoup(markup, "html.parser")	| Python 的内置标准库、执行速度适中 、文档容错能力强 | Python 2.7.3 or 3.2.2) 前的版本中文容错能力差 |
| LXML HTML 解析器	| BeautifulSoup(markup, "lxml")	| 速度快、文档容错能力强 | 需要安装 C 语言库 |
| LXML XML 解析器	| BeautifulSoup(markup, "xml") | 速度快、唯一支持 XML 的解析器 | 需要安装 C 语言库 |
| html5lib	| BeautifulSoup(markup, "html5lib")	 | 最好的容错性、以浏览器的方式解析文档、生成 HTML5 格式的文档 | 速度慢、不依赖外部扩展 |


如果使用 lxml，那么在初始化 Beautiful Soup 时，可以把第二个参数改为 lxml 即可：

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup('<p>Hello</p>', 'lxml')
print(soup.p.string)
```

## 节点选择器

直接调用节点的名称就可以选择节点元素，再调用 string 属性就可以得到节点内的文本

### 选择元素
```python
html = """
<html><head><title>The Dormouse's story</title></head>
<body>
<p class="title" name="dromouse"><b>The Dormouse's story</b></p>
<p class="story">Once upon a time there were three little sisters; and their names were
<a href="http://example.com/elsie" class="sister" id="link1"><!-- Elsie --></a>,
<a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> and
<a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>;
and they lived at the bottom of a well.</p>
<p class="story">...</p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.title)
print(type(soup.title))
print(soup.title.string)
print(soup.head)
print(soup.p)
```
运行结果：
```html
<title>The Dormouse's story</title>
<class 'bs4.element.Tag'>
The Dormouse's story
<head><title>The Dormouse's story</title></head>
<p class="title" name="dromouse"><b>The Dormouse's story</b></p>
```

首先打印输出 title 节点的选择结果，接下来，输出它的类型，是 bs4.element.Tag 类型，这是 Beautiful Soup 中一个重要的数据结构。经过选择器选择后，选择结果都是这种 Tag 类型。调用string属性，可以得到节点的文本内容，接下来，我们又尝试选择了 head 节点，最后，选择了 p 节点。这种选择方式只会选择到第一个匹配的节点，其他的后面节点都会忽略。


### 提取信息

#### 获取名称
```python
print(soup.title.name)
```
运行结果:
```
title
```

#### 获取属性

每个节点可能有多个属性，比如 id 和 class 等，选择这个节点元素后，可以调用 attrs 获取所有属性：
```python
print(soup.p.attrs)
print(soup.p.attrs['name'])
```
运行结果：
```python
{'class': ['title'], 'name': 'dromouse'}
dromouse
```

直接在节点元素后面加中括号，传入属性名
```python
print(soup.p['name'])
print(soup.p['class'])
```
运行结果如下：
```
dromouse
['title']
```

这里需要注意的是，有的返回结果是字符串，有的返回结果是字符串组成的列表。比如，name 属性的值是唯一的，返回的结果就是单个字符串。而对于 class，一个节点元素可能有多个 class，所以返回的是列表。在实际处理过程中，我们要注意判断类型。

#### 获取内容
```python
print(soup.p.string)
```
运行结果如下：
```
The Dormouse's story
```

再次注意一下，这里选择到的 p 节点是第一个 p 节点，获取的文本也是第一个 p 节点里面的文本。

### 嵌套选择
在上面的例子中，我们知道每一个返回结果都是 bs4.element.Tag 类型，它同样可以继续调用节点进行下一步的选择。比如，我们获取了 head 节点元素，我们可以继续调用 head 来选取其内部的 head 节点元素：
```python
html = """
<html><head><title>The Dormouse's story</title></head>
<body>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.head.title)
print(type(soup.head.title))
print(soup.head.title.string)
```
运行结果如下：
```
<title>The Dormouse's story</title>
<class 'bs4.element.Tag'>
The Dormouse's story
```

第一行结果是调用 head 之后再次调用 title 而选择的 title 节点元素。然后打印输出了它的类型，可以看到，它仍然是 bs4.element.Tag 类型。也就是说，我们在 Tag 类型的基础上再次选择得到的依然还是 Tag 类型，每次返回的结果都相同，所以这样就可以做嵌套选择了。

### 关联选择
在做选择的时候，有时候不能做到一步就选到想要的节点元素，需要先选中某一个节点元素，然后以它为基准再选择它的子节点、父节点、兄弟节点等

#### 子节点和子孙节点
选取节点元素之后，如果想要获取它的直接子节点，可以调用 contents 属性
```python
html = """
<html>
    <head>
        <title>The Dormouse's story</title>
    </head>
    <body>
        <p class="story">
            Once upon a time there were three little sisters; and their names were
            <a href="http://example.com/elsie" class="sister" id="link1">
                <span>Elsie</span>
            </a>

        </p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.p.contents)
```

```python
['\n            Once upon a time there were three little sisters; and their names were\n            ', <a class="sister" href="http://example.com/elsie" id="link1">
<span>Elsie</span></a>, '\n']
```

可以看到，返回结果是列表形式。p 节点里既包含文本，又包含节点，最后会将它们以列表形式统一返回。

需要注意的是，列表中的每个元素都是 p 节点的直接子节点。比如第一个 a 节点里面包含一层 span 节点，这相当于孙子节点了，但是返回结果并没有单独把 span 节点选出来。所以说，contents 属性得到的结果是直接子节点的列表。


> 调用children属性，返回结果是生成器类型
```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.p.children)
for i, child in enumerate(soup.p.children):
    print(i, child)
```

```
<list_iterator object at 0x1064f7dd8>
0 
            Once upon a time there were three little sisters; and their names were

1 <a class="sister" href="http://example.com/elsie" id="link1"><span>Elsie</span></a>

```

> 得到所有的子孙节点，调用 descendants 属性，返回结果还是生成器。
```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.p.descendants)
for i, child in enumerate(soup.p.descendants):
    print(i, child)
```

```
<generator object descendants at 0x10650e678>
0 
            Once upon a time there were three little sisters; and their names were
            
1 <a class="sister" href="http://example.com/elsie" id="link1"><span>Elsie</span></a>
2 <span>Elsie</span>
3 Elsie

```

#### 父节点和祖先节点

如果要获取某个节点元素的父节点，可以调用 parent 属性

```python
html = """
<html>
    <head>
        <title>The Dormouse's story</title>
    </head>
    <body>
        <p class="story">
            Once upon a time there were three little sisters; and their names were
            <a href="http://example.com/elsie" class="sister" id="link1">
                <span>Elsie</span>
            </a>
        </p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.a.parent)
```
运行结果如下：
```html
<p class="story">
            Once upon a time there were three little sisters; and their names were
            <a class="sister" href="http://example.com/elsie" id="link1">
<span>Elsie</span>
</a>
</p>
```

这里我们选择的是第一个 a 节点的父节点元素。很明显，它的父节点是 p 节点，输出结果便是 p 节点及其内部的内容。

如果想获取所有的祖先节点，可以调用 parents 属性
```python
html = """
<html>
    <body>
        <p class="story">
            <a href="http://example.com/elsie" class="sister" id="link1">
                <span>Elsie</span>
            </a>
        </p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(type(soup.a.parents))
print(list(enumerate(soup.a.parents)))
```
运行结果如下：
```python
<class 'generator'>
[(0, <p class="story">
<a class="sister" href="http://example.com/elsie" id="link1">
<span>Elsie</span>
</a>
</p>), 

(1, <body>
<p class="story">
<a class="sister" href="http://example.com/elsie" id="link1">
<span>Elsie</span>
</a>
</p>
</body>), 

(2, <html>
<body>
<p class="story">
<a class="sister" href="http://example.com/elsie" id="link1">
<span>Elsie</span>
</a>
</p>
</body></html>), 

(3, <html>
<body>
<p class="story">
<a class="sister" href="http://example.com/elsie" id="link1">
<span>Elsie</span>
</a>
</p>
</body></html>)]
```

返回结果是生成器类型。这里用列表输出了它的索引和内容，而列表中的元素就是 a 节点的祖先节点。

#### 兄弟节点
```python
html = """
<html>
    <body>
        <p class="story">
            Once
            <a href="http://example.com/elsie" class="sister" id="link1">
                <span>Elsie</span>
            </a>
            Hello
            <a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> 
            and
            <a href="http://example.com/tillie" class="sister" id="link3">Tillie</a>
            and they lived at the bottom of a well.
        </p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print('Next Sibling', soup.a.next_sibling)
print('Prev Sibling', soup.a.previous_sibling)
print('Next Siblings', list(enumerate(soup.a.next_siblings)))
print('Prev Siblings', list(enumerate(soup.a.previous_siblings)))
```
运行结果如下：
```python
Next Sibling 
            Hello
            
Prev Sibling 
            Once
            
Next Siblings [
(0, '\n            Hello\n            '), 
(1, <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>), 
(2, ' \n            and\n            '), 
(3, <a class="sister" href="http://example.com/tillie" id="link3">Tillie</a>), 
(4, '\n            and they lived at the bottom of a well.\n        ')
]

Prev Siblings [(0, '\n            Once\n            ')]
```

可以看到，这里调用了 4 个属性，其中 next_sibling 和 previous_sibling 分别获取节点的下一个和上一个兄弟元素，next_siblings 和 previous_siblings 则分别返回后面和前面的兄弟节点。

#### 提取信息

前面讲解了关联元素节点的选择方法，如果想要获取它们的一些信息，比如文本、属性等，也用同样的方法，示例如下：

```python
html = """
<html>
    <body>
        <p class="story">
            Once
            <a href="http://example.com/elsie" class="sister" id="link1">Bob</a>
            <a href="http://example.com/lacie" class="sister" id="link2">Lacie</a> 
        </p>
"""
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')

print(soup.a.next_sibling.string)

print(list(soup.a.parents)[0])
print(list(soup.a.parents)[0].attrs['class'])
```
运行结果：
```python
Lacie

<p class="story">
            Once
            <a class="sister" href="http://example.com/elsie" id="link1">Bob</a>
            <a class="sister" href="http://example.com/lacie" id="link2">Lacie</a>
</p>
['story']
```

如果返回结果是单个节点，那么可以直接调用 string、attrs 等属性获得其文本和属性；如果返回结果是多个节点的生成器，则可以转为列表后取出某个元素，然后再调用 string、attrs 等属性获取其对应节点的文本和属性。

## 方法选择器

### find_all
```python
find_all(name , attrs , recursive , text , **kwargs)
```
#### name
我们可以根据节点名来查询元素
```python
html='''
<div class="panel">
    <div class="panel-heading">
        <h4>Hello</h4>
    </div>
    <div class="panel-body">
        <ul class="list" id="list-1">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
            <li class="element">Jay</li>
        </ul>
        <ul class="list list-small" id="list-2">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
        </ul>
    </div>
</div>
'''
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.find_all(name='ul'))
print(type(soup.find_all(name='ul')[0]))
```
运行结果：
```python
[<ul class="list" id="list-1">
<li class="element">Foo</li>
<li class="element">Bar</li>
<li class="element">Jay</li>
</ul>, 

<ul class="list list-small" id="list-2">
<li class="element">Foo</li>
<li class="element">Bar</li>
</ul>]
<class 'bs4.element.Tag'>
```

这里我们调用了 find_all 方法，传入 name 参数，其参数值为 ul。也就是说，我们想要查询所有 ul 节点，返回结果是列表类型，长度为 2，每个元素依然都是 bs4.element.Tag 类型。


因为都是 Tag 类型，所以依然可以进行嵌套查询。还是同样的文本，这里查询出所有 ul 节点后，再继续查询其内部的 li 节点：
```python
for ul in soup.find_all(name='ul'):
    print(ul.find_all(name='li'))
```
运行结果如下：
```python
[<li class="element">Foo</li>, <li class="element">Bar</li>, <li class="element">Jay</li>]

[<li class="element">Foo</li>, <li class="element">Bar</li>]
```

返回结果是列表类型，列表中的每个元素依然还是 Tag 类型。

接下来我们就可以遍历每个 li 获取它的文本了。

```python
for ul in soup.find_all(name='ul'):
    print(ul.find_all(name='li'))
    for li in ul.find_all(name='li'):
        print(li.string)
```
运行结果如下：
```python
[<li class="element">Foo</li>, <li class="element">Bar</li>, <li class="element">Jay</li>]
Foo
Bar
Jay
[<li class="element">Foo</li>, <li class="element">Bar</li>]
Foo
Bar
```

#### attrs
传入一些属性来进行查询
```python
html='''
<div class="panel">
    <div class="panel-heading">
        <h4>Hello</h4>
    </div>
    <div class="panel-body">
        <ul class="list" id="list-1" name="elements">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
            <li class="element">Jay</li>
        </ul>
        <ul class="list list-small" id="list-2">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
        </ul>
    </div>
</div>
'''
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.find_all(attrs={'id': 'list-1'}))
print(soup.find_all(attrs={'name': 'elements'}))
```

```
[<ul class="list" id="list-1" name="elements">
<li class="element">Foo</li>
<li class="element">Bar</li>
<li class="element">Jay</li>
</ul>]

[<ul class="list" id="list-1" name="elements">
<li class="element">Foo</li>
<li class="element">Bar</li>
<li class="element">Jay</li>
</ul>]
```

这里查询的时候传入的是 attrs 参数，参数的类型是字典类型。比如，要查询 id 为 list-1 的节点，可以传入 attrs={'id': 'list-1'} 的查询条件，得到的结果是列表形式，包含的内容就是符合 id 为 list-1 的所有节点。在上面的例子中，符合条件的元素个数是 1，所以结果是长度为 1 的列表。

对于一些常用的属性，比如 id 和 class 等，我们可以不用 attrs 来传递
```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.find_all(id='list-1'))
print(soup.find_all(class_='element'))
```
运行结果如下：
```python
[<ul class="list" id="list-1">
<li class="element">Foo</li>
<li class="element">Bar</li>
<li class="element">Jay</li>
</ul>]
[<li class="element">Foo</li>, <li class="element">Bar</li>, <li class="element">Jay</li>, <li class="element">Foo</li>, <li class="element">Bar</li>]
```

#### text
text 参数可用来匹配节点的文本，传入的形式可以是字符串，可以是正则表达式对象

```python
import re
html='''
<div class="panel">
    <div class="panel-body">
        <a>Hello, this is a link</a>
        <a>Hello, this is a link, too</a>
    </div>
</div>
'''
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.find_all(text=re.compile('link')))
```
运行结果：
```python
['Hello, this is a link', 'Hello, this is a link, too']
```

#### find
find 方法返回的是单个元素，也就是第一个匹配的元素，
```python
html='''
<div class="panel">
    <div class="panel-heading">
        <h4>Hello</h4>
    </div>
    <div class="panel-body">
        <ul class="list" id="list-1">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
            <li class="element">Jay</li>
        </ul>
        <ul class="list list-small" id="list-2">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
        </ul>
    </div>
</div>
'''
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.find(name='ul'))
```

```
<ul class="list" id="list-1">
<li class="element">Foo</li>
<li class="element">Bar</li>
<li class="element">Jay</li>
</ul>
```

####
find_parents 和 find_parent：前者返回所有祖先节点，后者返回直接父节点。

find_next_siblings 和 find_next_sibling：前者返回后面所有的兄弟节点，后者返回后面第一个兄弟节点。

find_previous_siblings 和 find_previous_sibling：前者返回前面所有的兄弟节点，后者返回前面第一个兄弟节点。

find_all_next 和 find_next：前者返回节点后所有符合条件的节点，后者返回第一个符合条件的节点。

find_all_previous 和 find_previous：前者返回节点前所有符合条件的节点，后者返回第一个符合条件的节点。

## CSS 选择器
使用 CSS 选择器，只需要调用 select 方法，传入相应的 CSS 选择器即可
```python
html='''
<div class="panel">
    <div class="panel-heading">
        <h4>Hello</h4>
    </div>
    <div class="panel-body">
        <ul class="list" id="list-1">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
            <li class="element">Jay</li>
        </ul>
        <ul class="list list-small" id="list-2">
            <li class="element">Foo</li>
            <li class="element">Bar</li>
        </ul>
    </div>
</div>
'''
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
print(soup.select('.panel .panel-heading'))
print(soup.select('ul li'))
print(soup.select('#list-2 .element'))
```
运行结果如下：
```python
[<div class="panel-heading">
<h4>Hello</h4>
</div>]

[<li class="element">Foo</li>, <li class="element">Bar</li>, <li class="element">Jay</li>, <li class="element">Foo</li>, <li class="element">Bar</li>]

[<li class="element">Foo</li>, <li class="element">Bar</li>]
```

#### 嵌套选择
```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
for ul in soup.select('ul'):
    print(ul.select('li'))
```
运行结果如下：
```python
[<li class="element">Foo</li>, <li class="element">Bar</li>, <li class="element">Jay</li>]
[<li class="element">Foo</li>, <li class="element">Bar</li>]
```

#### 获取属性
节点类型是 Tag 类型，所以获取属性还可以用原来的方法

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
for ul in soup.select('ul'):
    print(ul['id'])
    print(ul.attrs['id'])
```
运行结果如下：
```
list-1
list-1
list-2
list-2
```

#### 获取文本
string, get_text

```python
from bs4 import BeautifulSoup
soup = BeautifulSoup(html, 'lxml')
for li in soup.select('li'):
    print('Get Text:', li.get_text())
    print('String:', li.string)
```