+ [author](http://nsddd.top)

# 第19节 NumPy教程

## numpy

NumPy 是一个 Python 库。

NumPy 用于处理数组。

NumPy 是“数值 Python”的缩写。

```
pip install numpy
```



## 创建numpy

```py
In [70]: import numpy as np 
    ...:  
    ...: arr = np.array([1, 2, 3, 4, 5]) 
    ...:  
    ...: print(arr) 
    ...:  
    ...: print(type(arr))                                   
[1 2 3 4 5]
<class 'numpy.ndarray'>
```



### 多维数组

**检查数组有多少维**

```py
In [3]: import numpy as np 
   ...:  
   ...: a = np.array(42) 
   ...: b = np.array([1, 2, 3, 4, 5]) 
   ...: c = np.array([[1, 2, 3], [4, 5, 6]]) 
   ...: d = np.array([[[1, 2, 3], [4, 5, 6]], [[1, 2, 3], [4
   ...: , 5, 6]]]) 
   ...:  
   ...: print(a.ndim) 
   ...: print(b.ndim) 
   ...: print(c.ndim) 
   ...: print(d.ndim)                                       
0
1
2
3
```



## 索引

**负索引**

打印第二列的最后一个元素

```py
In [8]: import numpy as np 
   ...:  
   ...: arr = np.array([[1,2,3,4,5], [6,7,8,9,10]]) 
   ...:  
   ...: print('Last element from 2nd dim: ', arr[1, -1])    
Last element from 2nd dim:  10
```



**切片**

```py
In [12]: import numpy as np 
    ...:  
    ...: arr = np.array([1, 2, 3, 4, 5, 6, 7]) 
    ...:  
    ...: print(arr[4:])                                     
[5 6 7]
```



**二维数组切片**

```py
In [13]: arr = np.array([[12,12,34],[12,43,54]])            

In [15]: arr[0:]                                            
Out[15]: 
array([[12, 12, 34],
       [12, 43, 54]])

In [16]: arr[1,0:]                                          
Out[16]: array([12, 43, 54])

In [17]: arr[0,0:]                                          
Out[17]: array([12, 12, 34])

In [18]: arr[1:,1:]         # 从第二列到后面所有列 -- 从第二行到后面所有行  
Out[18]: array([[43, 54]])
```



**复制以及显示**

```py
In [19]: x = arr.copy()                                     

In [20]: x                                                  
Out[20]: 
array([[12, 12, 34],
       [12, 43, 54]])

In [21]: x = arr.view()                                     

In [22]: x                                                  
Out[22]: 
array([[12, 12, 34],
       [12, 43, 54]])
```

❗ 副本和视图的区别：

+ 副本不受到原来的数组更改所带来的影响
+ 视图会受到原来的数组更改所带来的影响

```py
In [23]: x[0] = 1000                                        

In [24]: x                                                  
Out[24]: 
array([[1000, 1000, 1000],
       [  12,   43,   54]])

In [25]: arr                                                
Out[25]: 
array([[1000, 1000, 1000],
       [  12,   43,   54]])
```



## 数组重塑 

### 获取数组的形状

```
In [27]: arr.shape                                          
Out[27]: (2, 3)
```

> 显示为 `2×3`



### 数组重塑

重塑意味着改变数组的形状。

数组的形状是每个维度中元素的数量。

通过重塑，我们可以添加或删除维度或更改每个维度中的元素数量。



### 二维变一维

扁平化数组意味着将多维数组转换为一维数组。

我们可以用它`reshape(-1)`来做到这一点。

**注意：需要一个变量来接收**

```py
In [28]: arr                                                
Out[28]: 
array([[1000, 1000, 1000],
       [  12,   43,   54]])

In [29]: arr.reshape(-1)                                    
Out[29]: array([1000, 1000, 1000,   12,   43,   54])

In [30]: arr                                                
Out[30]: 
array([[1000, 1000, 1000],
       [  12,   43,   54]])
```



### 一维变多维

```py
In [52]: arr = np.array([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 
    ...: 12]) 
    ...:  
    ...: newarr = arr.reshape(2, 3, 2)                      

In [53]: newarr.view()                                      
Out[53]: 
array([[[ 1,  2],
        [ 3,  4],
        [ 5,  6]],

       [[ 7,  8],
        [ 9, 10],
        [11, 12]]])

```



## 遍历

**python的遍历和Go语言的range特别像**

```python
In [10]: import numpy as np

In [11]: arr = np.array([[1, 2, 3], [4, 5, 6]])

In [12]: arr.view()
Out[12]:
array([[1, 2, 3],
       [4, 5, 6]])

In [13]: for x in arr:
    ...:     for y in x:
    ...:         print(y)
    ...:
1
2
3
4
5
6
```

## 使用 ndenumerate() 进行枚举迭代

> 尤其是`ndenumerate()`简直就和Go语言一模一样
>
> ```go
> arr := [12,3,2,32,2,3,3]
> for i,v = range arr {
>     fmt.Printf("%d 的值为 %d",i,v)	
> }
> ```

枚举是指一一提到某事的序号。

有时我们在迭代时需要元素的相应索引，该`ndenumerate()`方法可以用于那些用例。

枚举以下一维数组元素：

```py
In [14]: arr.reshape(-1)
Out[14]: array([1, 2, 3, 4, 5, 6])

In [15]: for i,v in np.ndenumerate(arr):
    ...:     print(i,v)
    ...:
(0, 0) 1
(0, 1) 2
(0, 2) 3
(1, 0) 4
(1, 1) 5
(1, 2) 6
```



## 数组连接

连接意味着将两个或多个数组的内容放在一个数组中。

在 SQL 中，我们基于键连接表，而在 NumPy 中，我们通过轴连接数组。

我们将一系列想要加入 `concatenate()`函数的数组与轴一起传递。如果未显式传递axis，则将其视为0。

>  ❗注意这个括号`np.concatenate((arr1,arr2))`，两层

```python
In [1]: import numpy as np

In [2]: arr1 = np.array([1, 2, 3])
   ...:
   ...: arr2 = np.array([4, 5, 6])

In [5]: arr = np.concatenate((arr1,arr2))
```

### 使用堆栈函数连接数组

堆叠与串联相同，唯一的区别是堆叠是沿着一个新的轴完成的。

我们可以沿着第二个轴连接两个一维数组，这将导致它们一个在另一个上，即。堆叠。

我们将一系列想要加入到 `stack()`方法中的数组与轴一起传递。如果未显式传递轴，则将其视为 0。

```python
import numpy as np

arr1 = np.array([1, 2, 3])

arr2 = np.array([4, 5, 6])

arr = np.stack((arr1, arr2), axis=1)

print(arr)
```



### 沿行堆叠

NumPy 提供了一个辅助函数：`hstack()` 沿行堆叠。

```python
import numpy as np

arr1 = np.array([1, 2, 3])

arr2 = np.array([4, 5, 6])

arr = np.hstack((arr1, arr2))

print(arr)
```



### 沿列堆叠

NumPy 提供了一个辅助函数：`vstack() ` 沿列堆叠。

```python
import numpy as np

arr1 = np.array([1, 2, 3])

arr2 = np.array([4, 5, 6])

arr = np.vstack((arr1, arr2))

print(arr)
```

### 沿高度（深度）堆叠

NumPy 提供了一个辅助函数：`dstack()` 沿高度堆叠，与深度相同。

```py
import numpy as np

arr1 = np.array([1, 2, 3])

arr2 = np.array([4, 5, 6])

arr = np.dstack((arr1, arr2))

print(arr)
```



## 数组拆分

Splitting 是 Joining 的逆操作。

Join 将多个数组合并为一个，Splitting 将一个数组分成多个。

我们`array_split()`用于拆分数组，我们将要拆分的数组和拆分的数量传递给它。

```py
In [6]: import numpy as np
   ...:
   ...: arr = np.array([1, 2, 3, 4, 5, 6])
   ...:
   ...: newarr = np.array_split(arr, 3)
   ...:
   ...: print(newarr)
[array([1, 2]), array([3, 4]), array([5, 6])]
```



## 搜索数组

您可以在数组中搜索某个值，并返回匹配的索引。

要搜索数组，请使用`where()`方法。

查找值为 4 的索引：

```py
In [7]: import numpy as np
   ...:
   ...: arr = np.array([1, 2, 3, 4, 5, 4, 4])
   ...:
   ...: x = np.where(arr == 4)
   ...:
   ...: print(x) # returns 2
(array([3, 5, 6], dtype=int64),)
```

**查找值是偶数的索引：**

```py
x = np.where(arr%2 == 0)
```



**查找值是奇数的索引：**

```py
x = np.where(arr%2 == 1)
```



## 数组排序

> ❗ 此方法返回数组的副本，保持原始数组不变。所以你可以创建一个新的变量来接收

```python
In [9]: np.sort(arr)
Out[9]: array([1, 2, 3, 4, 4, 4, 5])
```

**排序不仅仅能排列数字，还能排列字母**

```python
In [11]: arr = np.array([1, 43,2,1,2,4,54,-1,-5,-534,'a','g','h','s','a','e','g','cds','df','vd','sa','sd'])

In [12]: np.sort(arr)
Out[12]:
array(['-1', '-5', '-534', '1', '1', '2', '2', '4', '43', '54', 'a', 'a',
       'cds', 'df', 'e', 'g', 'g', 'h', 's', 'sa', 'sd', 'vd'],
      dtype='<U11')
```



## 数组过滤器

创建一个过滤器数组，它只返回原始数组中的偶数元素：

```python
import numpy as np

arr = np.array([1, 2, 3, 4, 5, 6, 7])

# Create an empty list
filter_arr = []

# go through each element in arr
for element in arr:
  # if the element is completely divisble by 2, set the value to True, otherwise False
  if element % 2 == 0:
    filter_arr.append(True)
  else:
    filter_arr.append(False)

newarr = arr[filter_arr]

print(filter_arr)
print(newarr)
```



## 随即数

在 NumPy 中，我们使用数组，您可以使用上述示例中的两种方法来制作随机数组。

该`randint()`方法采用一个`size` 参数，您可以在其中指定数组的形状。

生成一个包含 5 个从 0 到 100 的随机整数的一维数组：

```python
from numpy import random
x=random.randint(100, size=(5))
print(x)
```





## END 链接

<ul><li><div><a href = '18.md' style='float:left'>⬆️上一节🔗</a><a href = '20.md' style='float: right'>⬇️下一节🔗</a></div></li></ul>

+ [Ⓜ️回到目录🏠](../README.md)

+ [**🫵参与贡献💞❤️‍🔥💖**](https://nsddd.top/archives/contributors))

+ ✴️版权声明 &copy; :本书所有内容遵循[CC-BY-SA 3.0协议（署名-相同方式共享）&copy;](http://zh.wikipedia.org/wiki/Wikipedia:CC-by-sa-3.0协议文本) 

