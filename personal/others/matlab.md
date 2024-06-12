

## 1
1.1 将一个八位二进制数x=(10111101),转换成十进制数时，可以用公式
x=2’+0x2°+2°+2*+2°+2?+0x2+1
(1)用多项式求值的秦九韶算法求x的值,并用MATLAB 函数 bin2dec('10111101')，
检验计算结果的正确性;
(2)给出将任意一个不超过 32 位二进制数转化为十进制数的算法，并编程实现.


a = input('输入二进制数组 a =');
%a = [1,0,1,1,1,1,0,1];
n = length(a);
x=a(1);
for i = 2 : n
    x = 2*x + a(i);
end
x
astr = [];
for i = 1:n
    astr = [astr,num2str(a(i))];
end

bin2dec(astr)

###
a=input('输入二进制串 a=');
n=length(a);
x=str2num(a(1));%将字符转化为数字
for i=2:n
x=2*x+str2num(a(i));
end
fprintf('秦九韶算法得到值为 x=%10d\n',x);
fprintf('转换函数得到的值为%10d\n',bin2dec(a));


## 2
2.1 构造差商表有以下方法:
(1)由左至右，再由下至上地逐渐生成各列:
(2)由上至下逐渐生成各行.
编程实现上述方法，并比较这些方法的优点.

2.4 用三次样条插值函数方法，可以根据插值节点和节点上的函数值，绘制出连续
而且光滑的曲线.因此，这一方法在造船业和飞机制造业中有着普遍应用，已知某型直
升机旋转机翼外形轮廓线的数据如表 2.18所示.

由表中的13个点，用三次样条插值的方法，将点增加到49个，绘制出光滑的直升机旋
转机翼外形轮廓曲线(取“=0,y"=0).

### 

%由左至右,由下至上逐列构造差商表
format short %设置数据格式为短实型
x=[-2,0,1,2];%输入插值节点
y=[17,1,2,19];%输入插值节点对应的函数值
n=length(x);%获取插值节点个数
z=[x',y']%创建差商表的前两列,并显示
pause(1)%暂停1秒
for j=2:n%计算第 j-1 阶差商
    for i=n: -1:1
        if i>=j
            y(i)=(y(i) -y(i-1))/(x(i)-x(i-j+1));
        else
            y(i)=0;%0不具有实际意义,仅表示空格
        end
    end
    z=[z,y']%将j-1阶差商存入差商表的第j+1列,并显示
    pause(1)%暂停1秒
end

%点评:构造差商表的目的是为了获取主对角线上的各阶差商值，这一方法稍作改变


###
%由上至下逐行构造差商表
format short%设置数据格式为短实型
x=[-2,0,1,2];%输入插值节点
y=[17,1,2,19];%输入插值节点对应的函数值
n=length(x);%获取插值节点个数
FrontRow=[x(1),y(1)];%差商表的前一行置初值
z(1,1)=x(1);z(1,2)=y(1);%将差商表的第一行存入z中第一行
z%显示差商表
pause(1)%暂停1秒
for i=2:n%生成差商表的第i行
    RearRow=[x(i),y(i)];%差商表后一行置初值
    for j=3:i+1%生成差商表后一行的其他值
        RearRow(j)=(RearRow(j-1)-FrontRow(j-1))/(x(i)-x(i+2-j));
    end
    for j=1:i+1%将差商表的第i行存入z中第i行
        z(i,j)=RearRow(j);
    end
    z%显示差商表
    pause(1) 
    FrontRow=RearRow;%改变前一行
end

%点评:当增加一个新插值点时，可方便地生成差商表的最后一行

###

h0=figure('Menubar','none','NumberTitle','off','Name','直升机旋转机翼轮廓曲线', ...
    'Position',[400,234,400,300],'Resize','off');   
x = [520,280,156.6,78,39.62,3.1,0,3.1,39.62,78,156.6,280,520];  
y = [0,-30,-36,-35,-28.44,-9.4,0,9.4,28.44,35,36,30,0];     

ybar=[0,0]; 
t=1:13;
ti=1:0.25:13;


xi=wicker(t,x,ybar,2,ti);
yi=wicker(t,y,ybar,2,ti);

plot(x,y,'*r',xi,yi,'-k')
h=legend('插值点','三次样条');
legend(h,'boxoff')


function s=wicker(x,y,ybar,boundary,z)

n=length(x);
for i=1:n-1
    h(i)=x(i+1)-x(i);
end
 
if boundary==1 
    lambda(1)=1;
    d(1)=6*((y(2)-y(1))/h(1)-ybar(1))/h(1);
    mu(n)=1;
    d(n)=6*(ybar(2)-(y(n)-y(n-1))/h(n-1))/h(n-1);
end

if boundary==2 
    lambda(1)=0;
    d(1)=2*ybar(1);
    mu(n)=0;
    d(n)=2*ybar(2);
end

for i=2:n-1
    lambda(i)=h(i)/(h(i-1)+h(i));
    mu(i)=h(i-1)/(h(i-1)+h(i));
    d(i)=6 * ( (y(i+1) - y(i)) / h(i) - (y(i)-y(i-1)) / h(i-1)) / (h(i-1) + h(i) );
end
 
u(1)=d(1)/2;
v(1)=lambda(1)/2;


for i=2:n-1
    u(i)=(d(i)-u(i-1)*mu(i))/(2-v(i-1)*mu(i));
    v(i)=lambda(i)/(2-v(i-1)*mu(i));
end


u(n)=(d(n)-u(n-1)*mu(n))/(2-v(n-1)*mu(n))
M(n)=u(n);

for i=n-1: -1:1
    M(i)=u(i)-v(i)*M(i+1);
end

if(nargin==5)
    m=length(z);

    for k=1:m
        for i=1:n-1
            if(z(k) <= x(i+1)  &  z(k) >= x(i))
                s(k)=M(i)*(x(i+1)-z(k))^3/(6*h(i))+M(i+1)*(z(k)-x(i))^3/(6*h(i))+(y(i)-M(i)*h(i)^2/6)*(x(i+1)-z(k))/h(i)+(y(i+1)-M(i+1)*h(i)^2/6)*(z(k)-x(i))/h(i);
                break;
            end
        end
    end

    elseif(nargin==4)
    syms Z;
        for i=l:n-1
            fprintf('插值函数在区间[%6.4f,%6.4f]的表达式为:\n',x(i),x(i+1));
        
            str=M(i)*(x(i+1)-z)^3/(6*h(i))+M(i+1)*(z-x(i))^3/(6*h(i))+(y(i)-M(i)*h(i)^2/6)*(x(i+1)-z)/h(i)+(y(i+1)-M(i+1)*h(i)^2/6)*(z-x(i))/h(i);
        
            str=simplify(str);
            disp(str);
        end
    end
end




## 3
3.2 在工程实验中，测得以下数据如表 3.10 所示

求系数a。、4 、4、4，使得函数y=a,+a,sinx+a,cosx+ax’为数据表 3.10 的最小二乘
拟合函数，并画出拟合效果图.

h0=figure('Menubar','none','NumberTitle','off','Name','数据点的拟合效果演示', ...
    'Position',[440,234,400,300],'Resize','off');
x=[0,0.4,0.8,1.2,1.6,2.0,2.4,2.8,3.2];
y=[0.1,2.8,3.7,4.6,5.9,6.7,7.8,8.1,9.2];
A=[x.^0,sin(x),cos(x),x.^2];
b = [sin(x)]
a=(A' * A)\(A' * y);



syms z 
f = vpa( a(1)+a(2)*sin(z)+a(3)*cos(z)+a(4)*z.^2,4 ) 
u=0:0.1:3.2;
v=subs(f,'z',u);
plot(x,y,'*r',u,v,'-k') 
h=legend('数据点', '拟合曲线'); 



## 4
4.3 构造计算1=-“dx近似值的 5x5阶T数表


function Romberg
format long
a=0;b=1; 
T=zeros(5,5); 
h=b-a;k=1;T(k,1)=h*(f(a)+f(b))/2;

while k<5

    H=0;u=h/2;x=a+u;
    while x<b
        H=H+f(x);
        x=x+h;
    end
    T(k+1,1)=(T(k,1)+h*H)/2;
    
    for m=2:k+1
        T(k+1,m)=(4^(m-1)*T(k+1,m-1)-T(k,m-1))/(4^(m-1)-1)
    end
    
    k=k+1;h=u;
end


function y=f(x)
    if x==0
        y=1;
    else
        y=sin(x)/x;
end

在 MATLAB 命令窗口中，键入Romberg，可得到以下结果:
T=
0.920735492404
0.939793284806 0.946145882274



## 5


```c
j=0;


f=inline('x^41+x^3+1'); 
fbar=inline('41*x^40+3*x^2'); 
epsilon=0.5*10^(-8);N=100; 
for i=1:5 
    k=0;
    x0=input('请输入初值 x0='); 
    f0=f(x0);fbar0=fbar(x0);
    while 1
        
        fprintf('%3d  %9.8f  ',k,x0)
        
        j=j+1;
        if(rem(j,12)==0)
            fprintf('\n');
        end
    if fbar0==0
        flag =1;
        break
    end

    x1=x0-f0/fbar0;
    k=k+1;
    if k>N
        flag=2;
        break
    end
    
    if(abs(x1-x0)<epsilon)
        flag=3;
        break
    end
    
    x0=-x1;
    f0=f(x0);
    fbar0=fbar(x0);
 end
    
    switch flag
    case 1
        fprintf('导数为零,牛顿法失效!\n')
    case 2
        fprintf('迭代超限,牛顿法失效!\n')
    case 3
        fprintf('x*=%6.5f\n',x1)
    end
end
```
点评:方程的根约为-0.9524838752，
当取x=-10时，仍可用牛顿法求其满足精度要求的近似根，只是迭代次数较大;
当取x=0时,“导数为零，牛顿法失效”;
当x=1.6时，“迭代超限，牛顿法失效”;
当x=1.7,1.8时，迭代是收敛.

这些现象表明，初值的可选集合，不一定构成区间，不同初值使迭代的敛散性不同，即使收敛，收敛速度也不一样.

可见，牛顿法的敛散性对初值的选取太敏感了，

## 6

编写矩阵的 LU 分解程序，并对以下矩阵作LU分解

format rat 
A=[1,-5,3,-3;3,1,-1,2;-5,1,3,-4;2,0,3,-1];
 
[m,n]=size(A);
while(m~=n)
    fprintf('矩阵非方阵，无法进行 LU 分解')
    break
end

flag=1; 

for k=1:n
    d=det(A(1:k,1:k));
    if d==0
        fprint('顺序主子式|A%1d|=0,无法进行LU分解\n',k)
        flag=0;
        break
    end
end
    
while(flag==0)
    break
end

U(1,1:n)=A(1,1:n);%给出U的第1行
L(1,1)=1;L(2:n,1)=A(2:n,1)/U(1,1);

for k=2:n
    for j=k:n
        U(k,j)=A(k,j);%计算U的第k行
        for p=1:k-1
            U(k,j)=U(k,j)-L(k,p)*U(p,j);
        end
    end
    L(k,k)=1;%计算L的第k列
    if k~=n
        for i=k+1:n
            L(i,k)=A(i,k);
            for p=1:k-1
                L(i,k)=L(i,k)-L(i,p)*U(p,k);
            end
            L(i,k)=L(i,k)/U(k,k);
        end
    end
end

fprintf('下三角阵L为\n')
disp(L)
fprintf('上三角阵U为\n')
disp(U)














