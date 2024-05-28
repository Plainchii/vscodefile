aicheck.cc，querycee.com,
Claude文笔比chatgpt好多了，
一级信息差:chatgpt用来写水文章
次级:gptzero能查是不是chatgpt写的，很多大学已经用上了
三级:有一个网站可用来自动做paraphrase过zero
再一级:有个叫futuretools的网站可查各种有意思的这类东西
五级:有个油管博主的视频对那个网站的内容还做过评测，他得出里面最强的几个





##
问题描述




进行机器学习前如何处理数据

开发一个机器学习模型，利用所给数据，训练和验证机器学习模型，以实现对乳腺超声图像的自动分类和分割。

BUSI是一个包含乳腺超声图像的分类和分割数据集。它由100张图像组成，每张图像的平均大小为 500*500 像素。这些图像被划分为三类：正常、良性和恶性。


给出并描述所使用的机器学习算法，描述你是如何进行算法验证，而且进行算法性能比较：比较所选的两种机器学习算法在学习时间、预测准确率、召回率、ROC，并给出分类结果的混淆矩阵。


数据预处理：
像素大小
训练集和验证集
80%，20%
过拟合
迁移学习

filter提取特征
小矩阵为卷积核
特征图
池化减小数据量，压缩降维
激活，使有意义，方便sigmoid，ReLU
全连接 

黑色，闭合区域，比较大大，不规则图形，边缘呈向外放射状不规则为恶性肿瘤
黑色，闭合区域，不太大，圆形或者椭圆形，边缘平滑为良性肿瘤
白色大块区域，白色带状组织组织和黑白间隔带状为正常组织







## 算法实现代码

```python

#导包
import os

import tensorflow as tf
from tensorflow.keras.optimizers import Adam
from tensorflow.keras.preprocessing.image import ImageDataGenerator

from tensorflow.keras import layers, models, optimizers
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense

# 数据文件夹
data_dir = './MLdata/BUSI'
train_dir = os.path.join(data_dir,'train')
test_dir = os.path.join(data_dir,'test')

# 训练集
train_benign_dir = os.path.join(train_dir,'benign')
train_malignant_dir = os.path.join(train_dir,'malignant')
train_normal_dir = os.path.join(train_dir,'normal')

# 验证集
test_benign_dir = os.path.join(test_dir,'benign')
test_malignant_dir = os.path.join(test_dir,'malignant')
test_normal_dir = os.path.join(test_dir,'normal')

# 数据处理

img_width, img_height = 450, 450


# 数据增强
train_datagen = ImageDataGenerator(rescale=1./255, target_size=(img_width, img_height))  #归一化
test_datagen = ImageDataGenerator(rescale=1./255, target_size=(img_width, img_height))

train_generator = train_datagen.flow_from_directory(
    train_dir,  #目录
    target_size=(img_width, img_height),
    batch_size=32,  #每次抽取32个
    class_mode='categorical')  #one-hot编码

test_generator = test_datagen.flow_from_directory(
    test_dir,
    target_size=(img_width, img_height),
    batch_size=32,
    class_mode='categorical')



# 自动分类

# 构建卷积神经网络模型
model = tf.keras.models.Sequntial([
    
    # glitter，激活，限制输入格式input_shape=(height, width, 3))
    layers.Conv2D(32, (3, 3), activation='relu', input_shape=(img_width, img_height, 3)),  #卷积层
    layers.MaxPooling2D((2, 2)),  #池化层
    
    layers.Conv2D(64, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),
    
    layers.Conv2D(128, (3, 3), activation='relu'),
    layers.MaxPooling2D((2, 2)),

    
    Flatten(),  #展平
    Dense(512, activation='relu'),  #全连接层
    Dense(3, activation='softmax')  #3个类别
])

model.summary()

# 开始训练时间
start_time = time.time()


# 开始
model.compile(loss='categorical_crossentropy',  #损失函数
              optimizer='adam',  #优化器
              metrics=['accuracy'])  #评估指标

histroy = model.fit_generator(
    train_generator,
    steps_per_epoch=100,  #每次20个
    epochs=10,  #
    validation_data=test_generator,
    validation_steps=20)

# 训练时间
train_time = time.time() - start_time
print("训练时间：", train_time)

```

200，351，716
66，70，175
数据集里有三个文件夹normal,malignant,benign分别为图片为一组一组的图片，一张为原图malignant (1).png，另外一张为对肿瘤位置部分涂成白色剩下部分涂成黑色的黑白图malignant (1)_mask.png，

卷积神经网络，对原图肿瘤位置进行分割，并涂成白色剩下部分为黑色，与mask图片进行对比验证，实现自动分割


530+px 乘 480+px的图片

malignant (1).png
malignant (1)_mask.png

U-net人工智能图像分割算法


基于机器学习的医学图像分割技术
1.项目背景
乳腺癌是全球女性最常见的癌症之一，早期发现和诊断对于提高患者的生存率至关重要。乳腺超声检查是一种无创、无辐射、方便快捷的检查方式，已经成为临床上检测乳腺疾病的重要手段。然而，超声图像的解读需要依赖医生的经验，存在一定的主观性，而且工作量大，效率低。因此，利用机器学习技术自动分析乳腺超声图像，对于提高诊断的准确性和效率具有重要的意义。
本项目的目标是

开发一个机器学习模型，
对乳腺超声图像进行自动分类和分割。
利用所给数据，训练和验证机器学习模型，以实现对乳腺超声图像的自动分类和分割。

希望通过这个项目，能够为乳腺癌的早期发现和诊断提供有力的技术支持，从而提高患者的生存率和生活质量。

2． 数集简介
BUSI（Breast Ultrasound Image）是一个包含乳腺超声图像的分类和分割数据集。
该数据集包括了 2018 年收集的乳腺超声波图像，涵盖了 25 至 75 岁的 600 名女性患者。
数据集由 780 张图像组成，每张图像的平均大小为 500*500 像素。
这些图像被划分为三类：正常、良性和恶性。



（1）描述在进行机器学习前如何处理数据的？
1数据集划分：将数据集分为训练集80%和验证集20%
2数据归一化
img_width, img_height = 450, 450
train_datagen = ImageDataGenerator(rescale=1./255, target_size=(img_width, img_height)) 
3裁剪图片像素大小为450x450
img_width, img_height = 450, 450
train_datagen = ImageDataGenerator(rescale=1./255, target_size=(img_width, img_height)) 

（2）描述项目完成过程中用到的技术？


（3）结合项目本身，描述所使用的机器学习算法？

（4）描述你是如何进行算法验证的？

（5）算法性能比较。至少比较所选的两种机器学习算法在学习时间、预测准确率、召回率、ROC，并给出分类结果的混淆矩阵。（或者其他一些能体现分割性能的指标，如IoU、Dice等）

图片共有780张
预测一下学习时间、预测准确率、召回率、ROC，并给出分类结果的混淆矩阵，IoU、Dice等

自动分类
卷积神经网络算法：
学习时间：7：39
预测准确率： 0.85




（6）项目完成心得。


（7）列出参考文献。

学习效果评价

心得体会






