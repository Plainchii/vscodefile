#

## 栈
栈就是一种只允许在表尾进行插入和删除操作的线性表，先进后出的线性表

- 栈顶：允许进行插入和进行删除操作的一段成为栈顶
- 栈底：表的另一端称为栈底 （第一个元素进入的位置）
- 压栈(入栈、进栈)：在栈顶位置插入元素的操作
- 出栈(弹栈、退栈)：删除栈顶元素的操作
- 空栈：不含元素的空表
- 栈溢出：当栈满的时候，如果再有元素压栈，则发生上溢，当栈空的时候，再出栈则发生下溢

## 栈的实现

### 数组实现 

能快速随机访问存储的元素，通过下标 index 访问，支持随机访问，查询速度快，但存在元素在数组空间中大量移动的操作，增删效率低。


```c
#include <stdio.h>
#include <stdlib.h>

#define MAXSIZE 100
typedef int SElemType;

//数组方式实现栈 
typedef struct
{
	SElemType data[MAXSIZE];
	int top;	//用于栈顶指针 
}SqStack;
typedef SqStack* LinkStack;

/* 遍历栈 */
void display(LinkStack linkStack){
	int i;
	printf("栈：\n");
	for(i=linkStack->top;i>=0;i--){
		printf("%d\n",linkStack->data[i]);
	}
}

/* 初始化，建立一个空栈 */
LinkStack initStack(){
	LinkStack linkStack = (LinkStack)malloc(sizeof(SqStack));	//指针，指向栈
	linkStack->top = -1;	//表示空栈
	return linkStack; 
}
 
/* 销毁栈 */
void destroyStack(LinkStack linkStack){
	free(linkStack);
}

/* 清空栈 */
void clearStack(LinkStack linkStack){
	linkStack->top = -1;	//即置空栈 
}

/* 判断栈是否为空 */
bool stackEmpty(LinkStack linkStack){
	if(linkStack->top == -1)
		return true;
	else
		return false;
}

/* 判断栈是否满 */
bool stackFull(LinkStack linkStack){
	if(linkStack->top == MAXSIZE-1)
		return true;
	else
		return false;
}

/* 返回栈顶元素 */
bool getTop(LinkStack linkStack, SElemType *e){
	if(linkStack->top == -1){
		return false;
	}else{
		*e = linkStack->data[linkStack->top];
		return true;
	}
} 

/* 压栈 */
bool push(LinkStack linkStack, SElemType e){
	if(linkStack->top ==  MAXSIZE-1){
		printf("栈满！\n");
		return false;
	}else{
		linkStack->top++;
		linkStack->data[linkStack->top] =  e;
		return true;
	}
}

/* 出栈 */
bool pop(LinkStack linkStack, SElemType* e){
	if(linkStack->top == -1){
		printf("栈空！\n");
		return false;
	}else{
		*e = linkStack->data[linkStack->top];
		linkStack->top--;
		return true;
	}
}

/* 返回栈元素的个数 */
int stackLength(LinkStack linkStack){
	return linkStack->top+1;
}
```

### 链表实现 

只支持顺序访问，在某些遍历操作中查询速度慢，但增删元素快。

```c

#include<stdio.h>
#include<stdlib.h>
#define LENGTH sizeof(struct node)

//定义一个节点
typedef struct node
{
    int data;
    struct node* next;
}*Stack, *Node;

//判断结点是否为空
int IsEmpty(Stack L) {
    return L->next == NULL;
}
//初始化结点（头结点）
Stack Init_List(void) {
    Node L = (Node)malloc(LENGTH);
    if (L == NULL)
        printf("out of space");
    L->next = NULL;
    return L;
}
//遍历链表
void Print_List(Node L)
{
    Node p = L->next;//跳过头结点进行遍历
    while (p != NULL)//尾结点为空时终止（尾结点的指针域为空）
    {
        printf("%d\t", p->data);
        p = p->next;
    }printf("\n");
}

//入栈
Stack Push(Node L)
{
     Node p;
    int a;
    int len;
    printf("请入栈个数:");
    scanf_s("%d", &len);
    printf("请输入元素:\n");
    for (int i = 0; i < len; i++)
    {
        p = (Node)malloc(LENGTH);
        if (p == NULL) {
            printf("out of space");
            return 0;
        }
        scanf_s("%d", &a);
        p->data = a;
        p->next = L->next;
        L->next = p;
    }
     return L;
}
//出栈
Stack Pop(Node L) {
     Node p=L->next,tail;
     int top;
     top = p->data;
     printf("top is %d\n",top);
     if (IsEmpty(L)) {
         return NULL;
     }
     while (!IsEmpty(L)) {
         tail = p;
         printf("输出%d\t", p->data);
         p = p->next;
         free(tail);
         L->next = p;
         Top(L);
     }
}
//返回栈顶元素
int Top(Stack L) {
     int top;
     if (!IsEmpty(L)) {
         top = L->next->data;
         printf("top is %d\n",top);
         return top;
     }
     else {
         printf("stack is empty");
         return 0;
     }
}
```