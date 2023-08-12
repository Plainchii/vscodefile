
## 标题  
要创建标题，请在标题文本前添加一至六个#以及一个空格  
```
# A first-level heading  
## A second-level heading  
### A third-level heading  
```  

# A first-level heading  
## A second-level heading  
### A third-level heading  

---

## 段落  
用一行空白行：  
```
1

2  
```
1

2  

---

## 换行  
两个空格加回车/`<br/>`/`\`加回车：
```
1  
2<br/>
3\
4
```
1  
2<br/>
3\
4

---

## 缩进  
比例关系:2:4:1
半角空格: `&ensp;`或 `&#8194;`  
全角空格: `&emsp;`或 `&#8195;`  
不换行空格: `&nbsp;`或 `&#160;`  

```
半角:1&ensp2;
全角:1&emsp2;
不换:1&nbsp2;
```
半角:1&ensp;2  
全角:1&emsp;2  
不换:1&nbsp;2

---

## 文字样式  
| | | | |
|-|-|-|-|
|加粗   |** **/__ __    |`**This is bold text**`  | **This is bold text** |  
|斜体 | * */_ _  | `_This text is italicized_` |  _This text is italicized_  
删除线 | ~~ ~~   |`~~This was mistaken text~~` |  ~~This was mistaken text~~  
粗体和嵌入的斜体  | ** **/ _ _     |`**This text is _extremely_ important**`  | **This text is _extremely_ important**  
全部粗体和斜体  | *** ***   | `***All this text is important***`   | ***All this text is important***  
下标 |	`<sub> </sub> ` | `<sub>This is a subscript text</sub>`  | <sub>This is a subscript text</sub>  
上标 |	`<sup> </sup> `| `<sup>This is a superscript text</sup>`  | <sup>This is a superscript text</sup>  

---

## 引用文本  
使用 > 来引用文本。
```
Text that is not a quote  

> Text that is a quote
``` 
Text that is not a quote  

> Text that is a quote


### 多个段落：
```
> 1
>
> 3
```
> 1
>
> 3


### 嵌套：
```
>1
>
>>2
```
>1
>
>>2

---

## 引用代码


### 使用`
```
Use `git status` to list all new or modified files that haven't yet been committed.
```
Use `git status` to list all new or modified files that haven't yet been committed.  


### 转义反引号  
如果你要表示为代码的单词或短语中包含一个或多个反引号，则可以通过将单词或短语包裹在双反引号(``)中。
```
``Use `code` in your Markdown file.``
```
``Use `code` in your Markdown file.``


### 代码块  
使用三反引号/将代码块的每一行缩进至少四个空格或一个制表符。  
```
```
1
2
3
```
```

```
1
2
3
```

### 语法高亮
```
```json
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
```
```
```json
{  
  "firstName": "John",  
  "lastName": "Smith",  
  "age": 25  
}
```

---

## 分隔线

单独一行上使用三个或多个星号 (***)、破折号 (---) 或下划线 (___) ,在分隔线的前后均添加空白行
```
1

---

2
```
1

---

2

---

## 转义字符  
在字符前面添加反斜杠字符\
```
Character	Name
\	backslash
`	backtick 
*	asterisk
_	underscore
{ }	curly braces
[ ]	brackets
( )	parentheses
#	pound sign
+	plus sign
-	minus sign (hyphen)
.	dot
!	exclamation mark
|	pipe 
< &lt;
& &amp;
```

---

## 图像  
```
![描述](链接)
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)
```
![Screenshot of a comment on a GitHub issue showing an image, added in the Markdown, of an Octocat smiling and raising a tentacle.](https://myoctocat.com/assets/images/base-octocat.svg)

## 链接
链接title(可选)是当鼠标悬停在链接上时会出现的文字，这个title是可选的，它放在圆括号中链接地址后面，跟链接地址之间以空格分隔。
```
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。
```
这是一个链接 [Markdown语法](https://markdown.com.cn "最好的markdown教程")。


### 网址和Email地址
```
<https://markdown.com.cn>
<fake@example.com>
```
<https://markdown.com.cn>  
<fake@example.com>


### 带格式化的链接  
```
I love supporting the **[EFF](https://eff.org)**.
This is the *[Markdown Guide](https://www.markdownguide.org)*.
See the section on [`code`](#code).
```
I love supporting the **[EFF](https://eff.org)**.  
This is the *[Markdown Guide](https://www.markdownguide.org)*.  
See the section on [`code`](#code).


### 为了兼容性，请尽量使用%20代替空格
```
[link](https://www.example.com/my%20great%20page)
```
[link](https://www.example.com/my%20great%20page)

---

## 列表


### 有序列表
```
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item
```
1. First item
2. Second item
3. Third item
    1. Indented item
    2. Indented item
4. Fourth item


### 无序列表  
在每个列表项前面添加破折号 (-)、星号 (*) 或加号 (+)  
嵌套其它元素则缩进四个空格或一个制表符  
嵌套代码块则缩进八个空格或二个制表符
```
- First item
- Second item

* First item
* Second item

+ First item
+ Second item
```
- First item
- Second item

* First item
* Second item

+ First item
+ Second item

---

## 表格  
添加:以对齐
```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |
```
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

更为快捷的方式：*[Markdown Tables Generator](https://www.tablesgenerator.com/markdown_tables)*

---

## 任务列表  
在任务列表项之前添加破折号-和方括号[ ]，并在[ ]前面加上空格。要选择一个复选框，请在方括号[x]之间添加 x 
```
- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media
```
- [x] Write the press release  
- [ ] Update the website  
- [ ] Contact the media  

---

## 数学表达式


### 格式
```
use $\sqrt{3x-1}+(1+x)^2$ or $`\sqrt{3x-1}+(1+x)^2`$(当正在编写的表达式包含与 markdown 语法重叠的字符)
```
use $\sqrt{3x-1}+(1+x)^2$ or $`\sqrt{3x-1}+(1+x)^2`$(当正在编写的表达式包含与 markdown 语法重叠的字符)


```
**The Cauchy-Schwarz Inequality**

$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

or

**The Cauchy-Schwarz Inequality**

```math
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```()

```

**The Cauchy-Schwarz Inequality**
$$\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)$$

or

**The Cauchy-Schwarz Inequality**

```math
\left( \sum_{k=1}^n a_k b_k \right)^2 \leq \left( \sum_{k=1}^n a_k^2 \right) \left( \sum_{k=1}^n b_k^2 \right)
```

全Markdown公式、符号总结