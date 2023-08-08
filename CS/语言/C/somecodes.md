```

 
#include<stdio.h>
intmain()
{
        intline = 1;
        printf("go to school\n");
        while(line<=999)
        {
               printf("go to school to kiss her:%d\n",line);
               line++;
        }
        if(line>=999)
        printf("What a blessing!\n");
        return0;
}
 
 
#include<stdio.h>
intAdd(intx,inty)
{       
        into = x + y;
   returno;
}
intmain()
{
        intnum1 = 1;
        intnum2 = 1;
        intsum1 = 0;
        intsum2 = 0;
        inta = 4;
        intb = 2;
        sum1= Add(num1, num2);
        sum2= Add(a, b);
        printf("sum1 = %d\n",  sum1);
        printf("sum2 =%d\n", sum2);
        return0;
}
 
#include<stdio.h>
intmain()
{
        intcynicism =299;
        if(cynicism > 22 & cynicism < 28)
               printf("是\n");
        else
        {
               if(cynicism < 11)
                      printf("否\n");
               elseif(cynicism>90)
                      printf("hehe\n");
        }
               return0;
} 
 
 
 
判断一百以内的奇数
#include<stdio.h>
Int main()
{
        int i = 1;
        while (  i<=100)
    {
           if(i % 2 != 0)
               printf("%d ", i);
           i++;
    }
        return0;
}
 
switch语句：（整型常量表达式）break终止，否则继续
#include<stdio.h>
intmain()
{
        intobliged = 0;
        scanf("%d", &obliged );
               switch(obliged)
               {
               case1 :
                      printf("11\n");
                      break;
               case2 :
                      printf("22\n");
                      break;
               case3 :
                      printf("33\n");
                      break;
                     default:
printf("错误\n");
break;
        }
        return0;
}
   打印1至10
#include<stdio.h>
intmain()
{
        intnotion = 1;
        while(notion <= 10)
        {
               printf("%d  ", notion);
               notion++;
        }
        return0;
}
 
 
 
#include<stdio.h>//调用多个函数
voidjolly();
voiddeny();
intmain()
{
        jolly();
        
        deny();
        
        return0;
}
        
voidjolly()
               {
               printf("For he`s a jolly good fellow!\n");
               }
               voiddeny()
               {
                      printf("Which nobody can deny!\n");
               }
 
 
#include<stdio.h>
//99以十进制，八进制，十六进制打印
 
int main()
{
inta = 99;
printf("wed= %d ; ww = %o ; oo = %x\n", a,a,a);
printf("wed= %d ; ww = %#o ; oo = %#x\n", a,a,a);
return0;
}
 
 
/* C99为类型大小提供%zd转换说明*/ 
printf("Typeint has a size of %zd bytes.\n", sizeof(int)); 
printf("Typechar has a size of %zd bytes.\n", sizeof(char)); 
printf("Typelong has a size of %zd bytes.\n", sizeof(long)); 
printf("Typelong long has a size of %zd bytes.\n", 
sizeof(longlong)); 
printf("Typedouble has a size of %zd bytes.\n", 
sizeof(double)); //double类型所占字节大小
printf("Typelong double has a size of %zd bytes.\n", 
sizeof(longdouble)); 
return0;
 
 
 
 
#include<stdio.h> 
intmain(void) 
{
unsigned int un = 3000000000; /* int为32位和short为16位的系统 */
shortend = 200; 
longbig = 65537; 
longlong verybig = 12345678908642; 
printf("un= %u and not %d\n", un, un); 
printf("end= %hd and %d\n", end, end); 
printf("big= %ld and not %hd\n", big, big); 
printf("verybig=%lld and not %ld\n", verybig, verybig); 
return0; 
}
 
 
Grampssez, "a \ is a backslash." 
应这样编写代码： 
printf("Grampssez, \"a \\ is a backslash.\"\n"); 
 
 
 
#include<stdio.h>
 
intmain()//字符所代表的ascii码
{
charch;
printf("Pleaseenter a character.\n" );
scanf("%c",&ch);
printf("Thecode for %c is %d\n",ch ,ch);
return0;
}
 
 
 
#include<stdio.h>//精确pi
#include<math.h>
int main()
{
constdouble a = 3.1415;
doubleb;
printf("Whatis the value of pi?\n");
scanf("%lf",&b);
while(fabs(b - a) > 0.0001)
{
printf("no!tryagain!\n");
scanf("%lf",&b);
}
printf("oh,that'sit!\n");
return0;
}
 
 
 
int main()//真为1，假为0
{
intvulgar, perilous;
vulgar = (2 == 2);
perilous = (2 == 0);
printf("true= %d ,false = %d\n", vulgar, perilous);
return0;
}
 
 
intmain()//将用户输入的数字加和
{
longimmaculate;
longsum = 0; 
intstatus;
printf("Pleaseenter an integer to be sumed (q to quit):");
status= scanf("%ld", &immaculate);
while(status == 1)
{
sum= sum + immaculate;
printf("Pleaseenter another integer to be sumed (q to quit):");
status= scanf("%ld", &immaculate);
 
 
 
}
printf("Thosesum up to %ld\n", sum);
 
 
 
//使用for来实现计数循环（包含初始化，测试，更新）
intvivacious;
intcolossal = 100;
for(vivacious = 1; vivacious < colossal; vivacious++)
printf("Loveyou.\n");
 
//打印整数1~6及其对应的立方
int redeem;
printf("n ncubed\n");
for (redeem =1;redeem <=6 ; redeem++)
printf("%5d%5d\n", redeem, redeem*redeem*redeem);
 
拓展：递减，加2，字符，几何增长
 
int ans, n; //可省略for中表达式
ans= 2; 
for(n = 3; ans <= 25;) 
ans= ans * n; 
printf("n= %d; ans = %d.\n", n, ans);
 
 
int num = 0; //对第一个表达式只表达一次
for(printf("Keep entering numbers!\n"); num != 6;) 
scanf("%d",&num); 
printf("That'sthe one I want!\n"); 
return0; 
 
 
 
//等比数列求和（把计算式放在for里面）
intcynical, inherent;
doubleutter, neutral;
printf("Pleaseenter the times you want:");
scanf("%d",&cynical);
for(inherent = 1, utter = 0,neutral = 1; inherent <= cynical;inherent++,neutral *= 2)
{
 
 
utter+= (1.0 / neutral);
intf("thesum is %f when times =%d \n", utter, inherent);
 
 
}
 
 
/* rows1.c -- 使用嵌套循环 */ 
#include<stdio.h> 
#defineROWS 6 
#defineCHARS 10 
intmain(void) 
{
introw; 
charch; 
for (row = 0; row < ROWS; row++) /* 第10行 */ 
{
for (ch = 'A'; ch < ('A' + CHARS); ch++) /* 第12行 */ 
printf("%c",ch); 
printf("\n");
}
return0; 
}
 
#defineutter 5//录入分数，计算总数，平均数
 
{
intinvade,vague[utter];
intsum=0;
floataverage;
printf("Pleaseenter 5 scores:\n",utter);
for(invade= 0; invade < utter; invade++)
scanf("%d",&vague[invade]);
printf("Checkit.\n");
for(invade = 0; invade < utter; invade++)
printf("%d", vague[invade]);
printf("\n");
for(invade = 0; invade < utter; invade++)
sum+= vague[invade];
printf("Thesum is %d\n", sum);
average= sum /utter;
printf("Theaverage is %f\n", average);
 
 
 
 
#include<stdio.h>
 
double power(doubleevade, int amass);
 
int main(void)
{
//计算数的整数幂,调用pow函数
doublerectify, discipline;
intembark;
printf("Pleaseenter two number.\n");
 
while(scanf("%lf%d", &rectify, &embark) == 2)
{
discipline= power(rectify, embark);
printf("%.3g  to %d is %.5g\n", rectify, embark,discipline);
printf("enteragain or q to quit.\n");
 
}
return0;
}
doublepower(double evade, int amass)
{
doublesignify = 1;
inti;
for(i = 1; i <= amass; i++)
signify*= evade;
returnsignify;
}
 
int i, j,z;
charch;
for(i = 0; i <6 ; i++)
{
for(j = 0; j <= i; j++)
{
ch= 'F' - j;
printf("%c",ch);
}
printf("\n");
 
}
 
#include<stdio.h> 
int main(void)
{
charch;//Try to type "Go west, young man!"
scanf("%c",&ch);
while(ch != 'g')
{
printf("%c",++ch);
scanf("%c",&ch);
}
return0;
 
}
 
//桶排序
intj,t,q[1001];
intn = 5;
for(j = 1; j <= 1000; j++)
q[j] = 0;//初始化
for(j = 1; j <= n; j++)
{                
scanf("%d",&t);//读入5个号
q[t] = 1;//标记
}
for(j = 1 ; j <= 1000 ; j++)
{
if (q[j] == 1)//将读入的号打印
printf("%d", j);
 
}
 
 
 int i,o, t, j[6];
 
for(i= 1; i <= 5; i++)
{
scanf("%d", &j[i]);//输入需要排序的值
}
for(o = 1; o <= 4; o++)
{
for(i = 1; i <= 4; i++)
{
if (j[i] > j[i + 1])//进行冒泡排序
{   t = j[i], j[i] = j[i + 1], j[i + 1] =t;        }
}
}
printf("%d", j[1]);
for(i = 2; i <= 5; i++)
{
if (j[i - 1] != j[i])//重复的值去掉
printf("%d", j[i]);
}
 
//解密qq号
int a, head, tail,q[100] = { 0,3,7,2,6,2,4 };
head =1;//队首
tail =7;//队尾后一位
while (head <tail)
{        
printf("%d", q[head]);//输出队首
head++;//删去原队首
q[tail]= q[head];//将队首放置队尾
tail++;//队尾+1
head++;//删去队首
}
 
 
 
#include<stdio.h>//队列，啊哈算法解密qq号
 
structqueue//创建结构体
{
int tail;//队尾
int head;//队首
 
int data[101];//储存
};
int main()
{
 
structqueue q;
inti;
 q.head = 1;
 q.tail =1;//初始化队列
for(i = 1; i <= 5; i++)
{
scanf("%d",&q.data[q.tail]);
q.tail++;
}
while(q.head < q.tail)
{
printf("%d", q.data[q.head]);
q.head++;
q.data[q.tail]= q.data[q.head];
q.tail++;
q.head++;
 
}
return0;
}
 
 
int a[101];//快排
 
void so(int left,int right)
{
inti, j, t, q;
if(left>right)
return;
 
q= a[left];
i= left; 
j= right;
while(i != j)
{
while(a[j] > q && i < j)
j--;
while(a[i] < q && i < j)
i++;
if(i < j)
{
 
t= a[i]; a[i] = a[j]; a[j] = t;
}
}
a[left]= a[i];
a[i]= q;
 
so(left,i - 1);
so(i+ 1, right);
}
int main(void)
{
inti,j,t;
for(i = 1; i <= 5; i++)
scanf("%d",&a[i]);
so(1,5);
for(i = 1; i <= 5; i++)
printf("%d  ", a[i]);
return0;
}
 
#include<stdio.h>
#include<ctype.h>//包含了isalpha()函数
 
int main(void)
{
charch;
while((ch = getchar()) != '\n')//输入字符
{
if (isalpha(ch))//如果是字符
putchar(ch+ 1);
else
putchar(ch);//打印不变
}
putchar(ch);//显示换行符
return0;
}
/*
输入Look! It's a programmer! 
输出Mppl! Ju't b qsphsbnnfs! */
 
 
//打印约数
unsigned long i;
unsigned long j;
intisprime;//用于判断是否为素数
while(scanf("%lu", &i) == 1)//q to quit
{
for (j = 2, isprime = 1; (j  * j ) <= i; j ++)//逐个试
if (i % j == 0)//判断是否能整除
{
if((j * j) != i)
printf("%luand %lu\n", j, i / j);
else//平方根
printf("%lu\n",j);
isprime = 0;//非素数
}
if(isprime == 1)
printf("prime!\n");
}
 
//统计ei出现的次数
charformer, present;
intcount = 0;
former= 'a';
printf("请输入一段话，并以#结尾：\n");
while((present = getchar()) != '#')
{
if(former == 'e' && present == 'i')
{
count= count + 1;
}
former= present;
}
printf("ei出现的次数为%d。\n",count);
return0;
//Receive your eieio award
```