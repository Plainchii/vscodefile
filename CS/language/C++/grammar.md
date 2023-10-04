std::cin.good();
std::cin.fail();查询cin状态
std::cin.clear();恢复cin错误状态
std::cin.ignore(std::numeric_limits<std::streamsize>::max(),'\n');清空缓冲区
#defineA 2 + 2   无括号 A*A=8;
 
1,using namespace a;(int i)
2,using namespace b;(int i)
3,int i;
一：1/2一起与3出现，优先使用3
二：1,2一起出现，出错，二义性
 
for(int ele : array){}依次对ele进行赋值；