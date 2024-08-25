
#include<stdio.h>
#include<string.h>

int main(){
    int i, n, ivl = 1,max = 0;
    int a[n];
    scanf("%d\n);
    for(int i = 0; i < n; i++){
        scanf("%d",&a[i]);
    }
    for(i = 0; i < n; i++){
        if(a[i+1]==a[i]+1){
            ivl += 1;
            max = {max,ivl};
        }
        else
        ivl = 1;
    }
    printf("%d",max);
}


















